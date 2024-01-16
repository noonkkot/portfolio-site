import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function GsapText() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const lines = textElement.innerHTML.split('<br>');

    // 각 줄을 span 요소로 감싸서 처리
    const wrappedLines = lines.map(line => `<span>${line}</span>`);
    textElement.innerHTML = wrappedLines.join('');

    const lineElements = textElement.querySelectorAll('span'); // 각 줄의 span 요소 선택

    gsap.from(lineElements, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: textElement,
        start: 'top 10vh',
        end: 'bottom 150vh',
        scrub: 1,
        onLeave: () => {
          // 스크롤 범위를 떠나면 실행되는 콜백
          gsap.to(textElement, { backgroundColor: '#ddd', color: '#fff', duration: 0.5 });
        },
      },
    });
  }, []);

  return (
    <>
      <p ref={textRef} className="gsapText">
        Q. 프론트엔드 개발자로서의 목표는?<br/> A. 읽기 쉬운 코드로 원활하고<br /> 빠른 웹 서핑이 가능하도록<br /> 유저의 편의성을 우선으로하는<br /> 웹 개발을 목표로 합니다.<br /> 업데이트는 필수죠! <br />리팩토링을 통해 코드를 개선하고 <br />더 나은 경험을 지향합니다.
      </p>
    </>
  );
}

export default GsapText;
