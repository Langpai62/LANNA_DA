import React from "react";
import "./style.css";

function About() {
  return (
    <div className="about-container">
      <h1>เกี่ยวกับเรา</h1>
      <p>เรามุ่งเน้นการสร้างนักเรียนที่พร้อมสำหรับโลกอนาคต</p>
      <img src="about-image.jpg" alt="ทีมงานของเรา" className="about-image" />
    </div>
  );
}

export default About;
