import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false); // 팝업 상태를 관리하기 위한 상태
  const [showEnvelopeBtn, setShowEnvelopeBtn] = useState(true); // envelopBtn 보이기 여부를 관리하기 위한 상태

  // 팝업 열기 핸들러
  const handleOpenPopup = () => {
    setShowPopup(true);
    setShowEnvelopeBtn(false); // envelopBtn 숨기기
  };

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
        // 이메일 보내기 성공 후 처리
        setShowPopup(false); // 팝업 닫기
        setShowEnvelopeBtn(true); // envelopBtn 보이기
        // 폼 초기화
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };


  return (
    <div id="contact">
      <div className="memoticon"></div>
      {showEnvelopeBtn && (
        <button className="envelopeBtn" onClick={handleOpenPopup}>
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      )}
      {showPopup && (
        <div className="popup">
          <form id="contactForm" onSubmit={handleSubmit} ref={formRef}>
            <div className="formInputData">
              <label>
                <span>이름</span>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </label>
              <label>
                <span>이메일</span>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>
              <label>
                <span>메세지</span>
                <textarea name="message" value={formData.message} onChange={handleChange} />
                <p>{formData.message.length}/300</p>
              </label>
              <button type="submit">보내기</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;