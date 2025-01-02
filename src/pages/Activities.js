import React, { useState } from 'react';
import './style.css';

const Activities = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Initially no image is selected

  const activities = [
    {
      id: 1,
      image: 'https://www.lannapoly.ac.th/web/gallery/20241121-100726.jpg',
      title: 'แสดงความยินดีต้อนรับผู้อำนวยการ นางสาวนารีรัตน์ ธจิตธรรม',
      description: 'อาจารย์วุฒิพงศ์ พวงไม้มิ่ง ผู้ช่วยรองผู้อำนวยการฝ่ายกิจการนักศึกษา พร้อมทีมงานแนะแนวการศึกษา เข้าร่วมแสดงความยินดีต้อนรับผู้อำนวยการ นางสาวนารีรัตน์ ธจิตธรรม เข้ารับตำแหน่งผู้อำนวยการโรงเรียนแม่ออนวิทยาลัย ณ หอประชุมโรงเรียนแม่ออนวิทยาลัย',
    },
    {
      id: 2,
      image: 'https://www.lannapoly.ac.th/web/gallery/20241119-112909.jpg',
      title: 'ร่วมพิธีเปิดการฝึกภาคปกตินักศึกษาวิชาทหารชั้นปีที่ 4 และ ปีที่ 5 ประจำปีการศึกษา 2567',
      description: 'ผกท.พ.ประสิทธิ์ ชูดวง รองผู้อำนวยการฝ่ายกิจการนักศึกษาและ ผกท. วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนาเชียงใหม่ เข้าร่วมพิธีเปิดการฝึกภาคปกตินักศึกษาวิชาทหารชั้นปีที่ 4 และ ปีที่ 5 ประจำปีการศึกษา 2567 ณ ศูนย์การฝึกนักศึกษาวิชาทหารมณฑลทหารบกที่ 33',
    },
    {
      id: 3,
      image: 'https://www.lannapoly.ac.th/web/gallery/20241119-112515.jpg',
      title: 'โปลิฯ ลุยต่อ! จัดประชุมชี้แจงและมอบผลการเรียนให้กับผู้ปกครองนักศึกษา ปวช.3 ปวส.2',
      description: 'วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ จัดกิจกรรมประชุมผู้ปกครอง และรับผลการเรียน ของนักศึกษาระดับชั้น ปวช.3 และ ปวส.2 (ช่วงเช้า) เพื่อชี้แจงให้ผู้ปกครองถึงแนวทางการดูแลนักศึกษาในวิทยาลัย โดยมีอาจารย์ประสิทธิ์ ชูดวง รองผู้อำนวยการฝ่ายกิจการนักศึกษา และอาจารย์ครรชิต เมฆขลา รองผู้อำนวยการฝ่ายวิชาการ ร่วมพบปะผู้ปกครองและนักเรียนในวันนี้ ณ อาคารนิกรพันธุ์ วันอาทิตย์ ที่ 17 พฤศจิกายน 2567',
    },
  ];

  const handleClick = (id) => {
    setSelectedImage(id); // Set selected image when clicked
  };

  return (
    <div className="page-container">
      <h1>กิจกรรมของวิทยาลัยโปลิเทคนิคลานนา เชียงใหม่</h1>
      <div className="content-center">
        {/* Large Image Section */}
        {selectedImage ? (
          <div className="large-image">
            <img
              src={activities.find((activity) => activity.id === selectedImage).image}
              alt="Selected"
            />
            <div className="image-details">
              <h3>{activities.find((activity) => activity.id === selectedImage).title}</h3>
              <p>{activities.find((activity) => activity.id === selectedImage).description}</p>
            </div>
          </div>
        ) : (
          <div className="large-image-placeholder">
            <p>คลิกที่ภาพเพื่อดูรายละเอียด</p>
          </div>
        )}

        {/* Small Image Thumbnails */}
        <div className="small-images">
          {activities.map((activity) => (
            <div key={activity.id} className="card" onClick={() => handleClick(activity.id)}>
              <img
                src={activity.image}
                alt={activity.title}
                className="small-image"
              />
              <div className="card-details">
                <h4>{activity.title}</h4>
                {/* Initially showing only title, description appears on large image click */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
