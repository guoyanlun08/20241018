type Props = {};

function FooterInfo({}: Props) {
  return (
    <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-8">
        <div>
          <h3 className="text-sm font-semibold leading-6 text-gray-900">Products</h3>
          <ul role="list" className="mt-6 space-y-4 list-none p-0">
            <li className="p-0 m-0">
              <a href="/use-cases" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Use cases
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="/chrome-extension" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Chrome extension
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="https://api.pdf.ai/" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                API docs
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="https://pdf.ai/pricing" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Pricing
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="https://pdf.ai/tutorials" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Video tutorials
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="https://pdf.ai/resources" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Resources
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="https://pdf.ai/blog" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Blog
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="/faq" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-10 md:mt-0">
          <h3 className="text-sm font-semibold leading-6 text-gray-900">We also built</h3>
          <ul role="list" className="mt-6 space-y-4 list-none p-0">
            <li className="p-0 m-0">
              <a
                href="https://pdf.ai/tools/resume-ai-scanner"
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                Resume AI Scanner
              </a>
            </li>
            <li className="p-0 m-0">
              <a
                href="https://pdf.ai/tools/invoice-ai-scanner"
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                Invoice AI Scanner
              </a>
            </li>
            <li className="p-0 m-0">
              <a
                href="https://pdf.ai/tools/quiz-ai-generator"
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                AI Quiz Generator
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="https://quickyai.com" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                QuickyAI
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="https://docsium.com" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Docsium
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="https://pdf.ai/gpts" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                PDF GPTs
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="https://pdfgen.com" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                PDF AI generator
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="https://pdf.ai/tools" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Other PDF tools
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-10 md:mt-0">
          <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
          <ul role="list" className="mt-6 space-y-4 list-none p-0">
            <li className="p-0 m-0">
              <a href="/compare/chatpdf-alternative" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                PDF.ai vs ChatPDF
              </a>
            </li>
            <li className="p-0 m-0">
              <a
                href="/compare/adobe-acrobat-reader-alternative"
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                PDF.ai vs Acrobat Reader
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="/privacy-policy" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Legal
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="/affiliate-program" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Affiliate program 💵
              </a>
            </li>
            <li className="p-0 m-0">
              <a href="/investor" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                Investor
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterInfo;
