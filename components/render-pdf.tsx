// Try to match the Worker version to the pdf.js API version at runtime.
// This uses the CDN worker that matches `pdfjs.version` so versions don't mismatch.
// If your environment disallows CDN fetches, consider installing a matching `pdfjs-dist`
// version and copying its `pdf.worker.min.js` into `public/`.

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function RenderPdf() {
	const [numPages, setNumPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState<number>(1);

	function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
		setNumPages(numPages);
	}

	return (
		<div>
			<Document file={"psgurav.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
			<p>
				Page {pageNumber} of {numPages}
			</p>
		</div>
	);
}
