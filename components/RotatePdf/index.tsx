'use client';
import { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';

import UploadController, { UploadRef } from './UploadController';
import DisplayPdf, { DisplayPdfRef } from './DisplayPdf';
import PageTools from './PageTools';
import styles from './rotate.module.scss';

export type PDFFile = string | File | null;

function RotatePdf() {
  const uploadRef = useRef<UploadRef | null>(null);
  const displayPdf = useRef<DisplayPdfRef | null>(null);

  const [file, setFile] = useState<PDFFile>('');
  const [allPagesRotateDeg, setAllPagesRotateDeg] = useState<number[]>([]);
  const [isRenderedAllPages, setIsRenderedAllPages] = useState<boolean>(false);
  const [pageWidth, setPageWidth] = useState<number>(200);

  /** 上传 pdf */
  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target;

    const nextFile = files?.[0];

    if (nextFile) {
      setFile(nextFile);
    }
  }

  /** 清空 pdf */
  function onRemovePdf() {
    uploadRef.current?.clearUpload();
    setIsRenderedAllPages(false);
    setFile('');
  }

  /** 放大页面宽度 上限 500 */
  function zoomIn() {
    if (pageWidth === 500) return;
    setPageWidth((pre) => pre + 50);
  }

  /** 缩小页面宽度 上限 500 */
  function zoomOut() {
    if (pageWidth === 100) return;
    setPageWidth((pre) => pre - 50);
  }

  /** 全部 pdf页旋转 90° */
  function rotateAllPages() {
    setAllPagesRotateDeg((pre) => {
      return pre.map((pageRotateDeg) => pageRotateDeg + 90);
    });
  }

  /** 单页面 旋转 90° */
  function rotateSinglePage(pageIndex: number) {
    setAllPagesRotateDeg((pre) => {
      return pre.map((pageRotateDeg, index) => {
        if (pageIndex === index) {
          pageRotateDeg += 90;
        }
        return pageRotateDeg;
      });
    });
  }

  /** 下载 pdf */
  async function downloadPdf() {
    if (file) {
      const pdfInstance = new jsPDF('p', 'mm', 'a4');
      const a4Width = pdfInstance.internal.pageSize.getWidth();
      const a4Height = pdfInstance.internal.pageSize.getHeight();
      const pagesRef = displayPdf.current?.getDisplayPdfRef();

      pagesRef?.forEach((page, pageIndex) => {
        if (page) {
          const rotation = allPagesRotateDeg[pageIndex] % 360;
          let offsetLeft, offsetTop; // addImage 设定的偏移量
          switch (rotation) {
            case 0:
              pdfInstance.addPage('a4', 'p');
              offsetLeft = 0;
              offsetTop = 0;
              break;
            case 90:
              pdfInstance.addPage('a4', 'l');
              offsetLeft = 0;
              offsetTop = -a4Height;
              break;
            case 180:
              pdfInstance.addPage('a4', 'p');
              offsetLeft = a4Width;
              offsetTop = -a4Height;
              break;
            case 270:
              pdfInstance.addPage('a4', 'l');
              offsetLeft = a4Height;
              offsetTop = -(a4Height - a4Width);
              break;
            default:
              throw new Error('Invalid rotation');
          }
          pdfInstance.addImage(
            page.toDataURL('image/png'),
            'PNG',
            // 以加入图片左下角为旋转点，不是根据page!!!!!!!!!!!!!!!!!!!!
            offsetLeft,
            offsetTop,
            a4Width,
            a4Height,
            '',
            'NONE',
            -rotation
          );
        }
      });

      pdfInstance.deletePage(1);
      pdfInstance.save('rotatePdf.pdf');
    }
  }

  return (
    <>
      {!file && <UploadController ref={uploadRef} onChange={onFileChange} />}
      {file && (
        <>
          {!isRenderedAllPages && <LoadingComp />}
          <div className="space-y-5" style={{ display: isRenderedAllPages ? 'block' : 'none' }}>
            <PageTools
              removePdf={onRemovePdf}
              zoomIn={zoomIn}
              zoomOut={zoomOut}
              pageWidth={pageWidth}
              onRotateAllPages={rotateAllPages}
            />
            <DisplayPdf
              ref={displayPdf}
              file={file}
              onAllPagesRenderSuccess={() => setIsRenderedAllPages(true)}
              pageWidth={pageWidth}
              allPagesRotateDeg={allPagesRotateDeg}
              initAllPagesRotateDeg={(pageNum) => setAllPagesRotateDeg(new Array(pageNum).fill(0))}
              onRotateSinglePage={rotateSinglePage}
            />
            <div className="flex flex-col justify-center items-center space-y-3 selecto-ignore">
              <button
                className={`${styles.textBtn} !w-auto`}
                role="tooltip"
                aria-label="Split and download PDF"
                data-microtip-position="top"
                onClick={downloadPdf}
              >
                Download
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

const LoadingComp = () => {
  return (
    <div className="flex justify-center">
      <div className={styles.loader}></div>
    </div>
  );
};

export default RotatePdf;
