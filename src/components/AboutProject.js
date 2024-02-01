// Project.js
import React from 'react';
import './AboutProject.css'; // Swiper 커스텀 스타일 파일 import

function AboutProject() {
  // Sample data, you should replace this with your actual data
  const projectsData = [
    { 
      id: 1, 
      thumbnailSrc: `${process.env.PUBLIC_URL}/images/project1.png`, 
      description: '포트폴리오 사이트',
      detail: 'React.js 라우트 기능을 활용하여 새로고침할 경우 업데이트 되는 부분만 빠르게 불러올 수 있도록 구성한 사이트이다.'
    },
    { 
      id: 2, 
      thumbnailSrc: `${process.env.PUBLIC_URL}/images/project2.png`, 
      description: 'KMDb 한국영화 데이터베이스 검색 사이트' ,
      detail: 'OPEN API를 활용한 사이트로 전체검색, 영화제목 검색, 감독 검색, 배우 검색이 가능하다. 검색결과를 클릭 할 경우 포스터 이미지가 팝업창으로 뜬다.'
    },
    { 
      id: 3, 
      thumbnailSrc: `${process.env.PUBLIC_URL}/images/project3.png`, 
      description: '북 어드밴트 캘린더',
      detail: 'HTML, CSS, Javascript로 구현한 어드벤트 캘린더로 숫자가 적힌 카드를 클릭할 경우 책에서 발췌한 문장이 팝업창으로 뜬다. 아직 지나지 않은 날짜의 숫자를 클릭할 경우 기한까지 남은 날짜가 뜬다.' },
    { 
      id: 4, 
      thumbnailSrc: `${process.env.PUBLIC_URL}/images/project4.png`, 
      description: '바늘이야기 리뉴얼',
      detail: '리액트로 만들어지지 않은 사이트를 리액트로 구현한 클론 사이트로 Swiper.js를 활용하여 슬라이드 기능을 구현하였다.' },
    { 
      id: 5, 
      thumbnailSrc: `${process.env.PUBLIC_URL}/images/project5.png`, 
      description: 'TEAM PROJECT 애플스토어 리뉴얼',
      detail: '4명으로 구성된 팀원들이 각자 구현 영역을 정하고 코딩한 애플스토어 리뉴얼 사이트이다. HTML, CSS, Javascript로 구현했으며 Swiper.js를 사용했다. 각 페이지마나 스크롤 이벤트가 걸려있으며 웹, 태블릿, 모바일 버전으로 제작한 반응형 사이트이다.'  },
    { 
      id: 6, 
      thumbnailSrc: `${process.env.PUBLIC_URL}/images/project6.png`, 
      description: '좋아하는 장소',
      detail: 'Mango DB, Express, Node.js, API와 React.js를 활용해 만든 웹 어플리케이션이다. 인증을 마친 사용자가 구글맵에 장소를 저장할 수 있도록 한다.' },
  ];

  const projectsList = [
    {
      id: 1,
      title: "PROJECT #1 포트폴리오 사이트",
    },
    {
      id: 2,
      title: "PROJECT #2 KMDb 한국영화 데이터베이스 검색 사이트",
    },
    {
      id: 3,
      title: "PROJECT #3 북 어드밴트 캘린더",
    },
    {
      id: 4,
      title: "PROJECT #4 바늘이야기 리뉴얼",
    },
    {
      id: 5,
      title: "PROJECT #5 TEAM PROJECT 애플스토어 리뉴얼",
    },
    {
      id: 6,
      title: "PROJECT #6 좋아하는 장소",
    },
  ];

  function scrollToProject(projectId) {
    const projectElement = document.getElementById(`project_${projectId}`);
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div id="AboutProjectWrap">
          <div className="AboutProjectList">
            <h2>프로젝트 리스트</h2>
          {projectsList.map((project, index) => (
            <ul key={index} onClick={() => scrollToProject(project.id)}>
              <li>{project.title}</li>
            </ul>
          ))}
          </div>
        {projectsData.map((project) => (
          <div className="AboutProject" key={project.id} id={`project_${project.id}`}>
            <div className="AboutProject_thumbnail">
              <div className="ap_thumbnail_frame">
                <img src={project.thumbnailSrc} alt="프로젝트 이미지" />
              </div>
            </div>
            <div className="AboutProject_description">
              <div className="ap_description_frame">
                <div className="ap_description_frame_txt">
                  <h2><span>Project detail</span>{project.description}</h2>
                  <p>{project.detail}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutProject;
