// Project.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "PROJECT #1 포트폴리오 사이트",
    techStack: ["#React.js", "#CSS", "#Javascript", "#Swiper.js"],
    description: "인트로 페이지로 시작한다. 자기소개를 담은 어바웃 페이지, 프로젝트 썸네일을 담아 Swiper.js로 구현한 프로젝트 페이지 그리고 이메일, 깃허브 등의 내용을 담은 컨텍트 페이지를 포함하고 있다.",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project1.png`,
    deployedUrl: "https://papaya-entremet-96eed9.netlify.app"
  },
  {
    title: "PROJECT #2 KMDb 한국영화 데이터베이스 검색 사이트",
    techStack: ["#React.js", "#CSS", "#RestAPI"],
    description: "KMDb Open API를 활용한 검색 사이트이다. 전체검색을 기본값으로하며 영화제목, 감독, 배우를 엔드포인트로 한 상세검색이 가능하다.",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project2.png`,
    deployedUrl: "https://verdant-torte-dbfc1d.netlify.app/"
  },
  {
    title: "PROJECT #3 북 어드밴트 캘린더",
    techStack: ["#HTML", "#CSS", "#Javascript"],
    description: "클릭할 경우 책 표지를 확인할 수 있으며 책 속 글귀가 플립되며 나타난다. 날짜가 지나지 않은 경우 공개일까지 남은 일자를 알려준다.",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project3.png`,
    deployedUrl: "https://noonkkot.github.io/book-advent-calendar/"
  },
  {
    title: "PROJECT #4 바늘이야기 리뉴얼",
    techStack: ["#React.js", "#CSS", "#Swiper.js"],
    description: "바늘이야기 쇼핑몰 리뉴얼 프로젝트이다. 구현 목표는 리액트를 사용한 사용자 친화적인 UI 설계이다.",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project4.png`,
    deployedUrl: "https://playful-tulumba-cc37c6.netlify.app"
  },
  {
    title: "PROJECT #5 TEAM PROJECT 애플스토어 리뉴얼",
    techStack: ["#HTML", "#CSS", "#Javascript", "#Swiper.js"],
    description: "기존 애플스토어 리뉴얼 프로젝트이다. 팀 프로젝트로 메인 히어로 영역과 스페셜리트 영역을 맡았다.",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project5.png`,
    deployedUrl: "https://noonkkot.github.io/team-project-complete/"
  },
  {
    title: "PROJECT #6 틱택토 게임",
    techStack: ["#HTML", "#CSS", "#Javascript"],
    description: "플레이명을 입력하고 게임 결과를 확인하고 재시작할 수 있다.",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project6.png`,
    deployedUrl: "https://noonkkot.github.io/tictactoe-game/"
  },
  {
    title: "PROJECT #7 좋아하는 장소",
    techStack: ["#React.js", "#Node.js", "#Mongodb"],
    description: "React.js로 프론트엔드 구축 후 Node.js와 Express.js로 REST API를 구축한 후 MongoDB와 연결 한 후 React.js 프론트 엔드를 백엔드에 연결하고 로그인 기능을 넣어 인증과 권한 부여하는 기능을 추가해 배포까지 마친다.",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project7.png`,
    deployedUrl: "https://example.com/project1"
  },
  // 다른 프로젝트들도 유사한 구조로 추가
];


const ProjectItem = ({ project }) => {
  const projectRef = useRef(null);

  useEffect(() => {
    const { current } = projectRef;

    // ScrollTrigger에 대한 트리거 설정
    const trigger = ScrollTrigger.create({
      trigger: current,
      pin: true,
      scrub: 1,
      start: 'left',
      end: 'right',
      horizontal: true,
    });

    // ScrollTrigger는 동적인 변화에 대응하기 위해 refresh 필요
    ScrollTrigger.refresh();

    // 컴포넌트 언마운트 시에 트리거 제거
    return () => {
      trigger.kill();
      ScrollTrigger.refresh();
    };
  }, []); // 한 번만 실행되도록 빈 의존성 배열 사용

  const handleClick = () => {
    window.open(project.deployedUrl, '_blank');
  };

    return (
      <div id="project" ref={projectRef}>
        <div className="project">
          <div className="thumbnail">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="description">
            <h3><span>{project.title}</span></h3>
            <h4>기술스택</h4>
            {project.techStack.map((tech, techIndex) => (
              <span key={techIndex} className="skill">{tech}</span>
            ))}
            <h4>프로젝트 소개</h4>
            <p>{project.description}</p>
            <button onClick={handleClick} >페이지로 이동하기</button>
          </div>
        </div>
      </div>
      );
    }

const Project = () => (
  <div id="project">
    {projects.map((project, index) => (
      <ProjectItem key={index} project={project} />
    ))}
  </div>
);

export default Project;