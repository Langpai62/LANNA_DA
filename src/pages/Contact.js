import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="common-background contact-container">
      <h1>ติดต่อเรา</h1>
      <p>หากคุณมีคำถามหรือข้อสงสัย สามารถติดต่อเราผ่านช่องทางต่อไปนี้:</p>
      <ul className="contact-list">
        <li>โทร: 053-213-061</li>
        <li>อีเมล: lannapoly@lannapoly.ac.th</li>
        <li>ที่อยู่: 123 ถนนลานนา, เชียงใหม่</li>
      </ul>
    </div>
  );
}

export default Contact;
