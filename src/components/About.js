import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './About.css';

function About() {
  const trainingList = ["한 번에 끝내는 프론트엔드 개발자 과정"];
  const certificationList = ["웹디자인 기능사"];
  const techStackList = ["HTML", "CSS", "Javascript", "Vue.js", "React.js"];

  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const lines = textElement.innerHTML.split('<br>');

    // 각 줄을 span 요소로 감싸서 처리
    const wrappedLines = lines.map(line => `<span>${line}</span>`);
    textElement.innerHTML = wrappedLines.join('');

    // 각 줄의 span 요소 선택
    const lineElements = textElement.querySelectorAll('span'); 

    // 첫 번째 질문에 대한 애니메이션 추가
    gsap.from(lineElements, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.7,
    });
  }, []);
  
  return (
    <article id="about">
      <div className="aboutFirstPage"> 
        <p ref={textRef} className="gsapText">
          Q. 프론트엔드 개발자로서의 목표는?<br/> A. 읽기 쉬운 코드로<br /> 유연한 협업이 가능하도록! <br /> 사용자의 편의성을 고려해<br /> 직관적인 웹 경험이 가능하도록!<br /> 웹 표준과 웹 접근성을 충족하는 웹 개발을 목표로 합니다.<br /> 업데이트는 필수죠! <br />리팩토링을 통해 코드를 개선하고 <br />더 나은 사용자 경험을 <br />지향합니다.
        </p>
      </div>
      <div className="aboutSecondPage">
        <div className="about-imgWrap">
          <img className="about-img" src={process.env.PUBLIC_URL + 'images/about.jpg'} alt="어바웃 이미지" />
        </div>
        <div className="about-txt">
          <h2>INTRODUCE MYSELF</h2>
          <div>
            <p>
              안녕하세요!<br />
              프론트엔드 개발자 이설화입니다.<br />
            </p>
            <p>
              웹 접근성과 웹 표준을 고려해<br />
              리액트로 웹 페이지 만드는 일에 흥미를 느낍니다.<br />
            </p>
            <p>
              웹 환경에서 <br />
              누구나 편리하고 용이한 경험이 가능하도록<br />
              UX/UI DESIGN도 중요하죠!<br />
            </p>
            <p>
              북 디자이너로 일한 경험을 토대로<br />
              사람들의 눈을 사로잡고<br />
              반응을 이끌어 내는 웹을 만들거예요!<br />
            </p>
          </div>
        </div>
      </div>
      
      <div className="aboutThirdPage">
        <div className="aboutSection">
          <ul>
            <li>이런 훈련을 받았어요
              <ul>
                {trainingList.map((training, index) => (
                  <li key={index}>{training}</li>
                ))}
              </ul>
            </li>
          </ul>
          <ul>
            <li>이런 자격증이 있어요.
              <ul>
                {certificationList.map((certification, index) => (
                  <li key={index}>{certification}</li>
                ))}
              </ul>
            </li>
          </ul>
          <ul>
            <li>이런 기술 스택이 있어요.
              <ul>
                {techStackList.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <p>프로젝트로 이렇게 활용했어요.<span>Scroll down</span></p>
      </div>
    </article>
  );
}

export default About;
