import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // ใช้ไฟล์ CSS ที่จะตกแต่งเมนู

function Navbar() {
  return (
    <nav className="navbar-container">
      <ul className="navbar">
        <li><Link to="/">หน้าแรก</Link></li>
        
        <li><Link to="/courses">หลักสูตร</Link></li>
        <li><Link to="/activities">กิจกรรม</Link></li>
        <li><Link to="/contact">ติดต่อเรา</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
