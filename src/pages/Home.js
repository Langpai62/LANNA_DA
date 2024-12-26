import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1>วิทยาลัยโปลิเทคนิคลานนา เชียงใหม่</h1>
        <p>พัฒนาทักษะ สร้างอนาคต เพื่อก้าวสู่ความสำเร็จในยุคดิจิทัล</p>
        <img 
          src="https://uat-backend.thaisisterhood.com/public/uploads/place/13/original/654c65f35a0a11699505651.jpg" 
          alt="โปลิลานนา" 
          className="home-image"
        />
        <button className="btn-primary">สำรวจเพิ่มเติม</button>
      </div>
    </div>
  );
};

export default Home;
