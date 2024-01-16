import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'message' && value.length > 300) {
      // 300자를 넘는 경우 글자를 빨간색으로 처리
      e.target.classList.add('text-limit-exceeded');
      return;
    } else {
      // 300자 이하인 경우 스타일 제거
      e.target.classList.remove('text-limit-exceeded');
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 이메일 전송
    emailjs.sendForm('service_as6dpsd', 'template_1qudd4a', formRef.current, '0PLAQtDFPjQ7FZWnC')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    // 폼 초기화
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div id="contact">
      <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
        <h2>Contact me!</h2>
        <div>
          <label>
            <span>이름 Name</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            <span>이메일 Email</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            <span>메세지 Message</span>
            <textarea name="message" value={formData.message} onChange={handleChange} />
            <p>{formData.message.length}/300</p>
          </label>
          <button type="submit">보내기 Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
