"use client";
import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type Props = {
  file: File | string;
};

export default function PdfViewer({ file }: Props) {
  const [numPages, setNumPages] = useState<number>();
  const [objectUrl, setObjectUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    let url: string | undefined;
    if (file && typeof file !== 'string') {
      url = URL.createObjectURL(file);
      setObjectUrl(url);
    } else {
      setObjectUrl(undefined);
    }
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [file]);

  const source = objectUrl ?? (typeof file === 'string' ? file : undefined);

  if (!source) return null;

  return (
    <Document
      file={source}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      loading="Loading PDF..."
    >
      {Array.from({ length: numPages || 0 }, (_, i) => (
        <Page
          key={i}
          pageNumber={i + 1}
          scale={1.2}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      ))}
    </Document>
  );
}
