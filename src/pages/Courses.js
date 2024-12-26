import React from 'react';
import './style.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300',
      title: 'ช่างยนต์',
      description: 'เรียนรู้ทักษะการซ่อมและบำรุงรักษารถยนต์ด้วยเครื่องมือที่ทันสมัย',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300',
      title: 'ไฟฟ้ากำลัง',
      description: 'ฝึกทักษะเกี่ยวกับระบบไฟฟ้า การติดตั้ง และการแก้ไขปัญหาในงานอุตสาหกรรม',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300',
      title: 'เทคโนโลยีสารสนเทศ',
      description: 'ศึกษาทักษะการเขียนโปรแกรม การพัฒนาเว็บไซต์ และการจัดการฐานข้อมูล',
    },
  ];

  return (
    <div className="page-container">
      <h1>คอร์สเรียนในวิทยาลัย</h1>
      <div className="content-center">
        {courses.map((course) => (
          <div key={course.id} className="card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;