'use client';

import React from 'react';
import styles from './rotate.module.scss';

type Props = {
  removePdf: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  onRotateAllPages: () => void;
  pageWidth: number;
};

function PageTools({ removePdf, zoomIn, zoomOut, pageWidth, onRotateAllPages }: Props) {
  return (
    <div className="flex justify-center items-center space-x-3 select-none">
      <button className={`${styles.textBtn} !w-auto`} onClick={onRotateAllPages}>
        Rotate All
      </button>
      <button
        className={`${styles.textBtn} !w-auto !bg-gray-800`}
        role="tooltip"
        aria-label="Remove this PDF and select a new one"
        data-microtip-position="top"
        onClick={removePdf}
      >
        Remove Pdf
      </button>
      <button
        className="bg-[#ff612f] shadow rounded-full p-2 flex items-center justify-center hover:scale-105 grow-0 shrink-0 disabled:opacity-50 !bg-white"
        role="tooltip"
        aria-label="Zoom in"
        data-microtip-position="top"
        disabled={pageWidth === 500}
        onClick={zoomIn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
          ></path>
        </svg>
      </button>
      <button
        className="bg-[#ff612f] shadow rounded-full p-2 flex items-center justify-center hover:scale-105 grow-0 shrink-0 disabled:opacity-50 !bg-white"
        role="tooltip"
        aria-label="Zoom out"
        data-microtip-position="top"
        disabled={pageWidth === 100}
        onClick={zoomOut}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default PageTools;
