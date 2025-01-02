import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core'; // PDF Viewer
import '@react-pdf-viewer/core/lib/styles/index.css'; // Add CSS for the PDF viewer
import { pdfjs } from 'react-pdf';

const Courses = () => {
  // PDF file URLs for each course
  const coursePdfs = [
    { id: 1, title: 'การออกแบบเว็บ', pdfUrl: 'https://example.com/web-design.pdf' },
    { id: 2, title: 'การเขียนโปรแกรม', pdfUrl: 'https://example.com/programming.pdf' },
    { id: 3, title: 'การพัฒนาระบบฐานข้อมูล', pdfUrl: 'https://example.com/database.pdf' },
    { id: 4, title: 'การพัฒนาแอปพลิเคชันมือถือ', pdfUrl: 'https://example.com/mobile-app.pdf' },
  ];

  return (
    <div className="common-background courses-container">
      <h1>หลักสูตรของเรา</h1>
      <div className="course-list">
        {coursePdfs.map((course) => (
          <div key={course.id} className="course-item">
            <h2>{course.title}</h2>
            <p>รายละเอียดหลักสูตรสามารถดูได้ในไฟล์ PDF ด้านล่างนี้:</p>
            
            {/* PDF Viewer */}
            <div className="pdf-container">
              <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                <Viewer fileUrl={course.pdfUrl} />
              </Worker>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
