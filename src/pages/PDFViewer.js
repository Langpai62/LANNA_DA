import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // styles for the viewer
import { pdfjs } from 'react-pdf';

const PDFViewer = ({ pdfUrl }) => {
  const [fileUrl, setFileUrl] = useState(pdfUrl); // State to hold PDF file URL

  return (
    <div style={{ height: '500px' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.8.335/es5/build/pdf.worker.min.js`}>
        <Viewer fileUrl={fileUrl} />
      </Worker>
    </div>
  );
};

export default PDFViewer;
