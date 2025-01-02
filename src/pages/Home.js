import React from "react";
import "./style.css";

function Home() {
  return (
    <div className="common-background home-container">
      <h1>ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
      <p>สถาบันของเราเปิดโอกาสให้นักเรียนได้เติบโตและเรียนรู้ในสภาพแวดล้อมที่เอื้อต่อความสำเร็จ</p>
      <button className="cta-button">สมัครเรียน</button>
    </div>
  );
}

export default Home;
