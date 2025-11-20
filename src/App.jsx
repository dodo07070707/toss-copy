import "./styles/AppStyles.css";

import Product from "./widgets/product.jsx";
import data from "./data.js";
import { useState, useRef } from "react";
import Nav from "./nav.jsx";

import bg from "../public/assets/main_background.png";
import logo from "../public/assets/logo1.svg";
import arrow from "../public/assets/arrow.svg";

export default function App() {
  const [shoes] = useState(data);
  const main0Ref = useRef();
  const onMoveToForm = () => {
    main0Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app-container">
      <div className="nav-wrapper-for-white">
        <header className="header">
          <a className="logo-wrap" href="/">
            <img className="logo" src={logo} />
          </a>
          <Nav />
        </header>
      </div>

      <div className="main-bg-items">
        <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}>
          <div className="main-content-wrapper">
            <div className="main-content-text">
              금융의 모든 것
              <br />
              토스에서 쉽고 간편하게
            </div>
            <div className="main-content-icons-wrapper">
              <div className="main-content-icons-items">
                <img
                  className="main-link-image"
                  src="https://static.toss.im/png-icons/timeline/applekorea.png"
                ></img>
                App Store
              </div>
              <div className="main-link-image-between" />
              <div className="main-content-icons-items">
                <img
                  className="main-link-image"
                  src="https://static.toss.im/png-icons/timeline/googleplay.png"
                ></img>
                Google Play
              </div>
            </div>
            <img
              src={arrow}
              className="main-arrow-src"
              onClick={onMoveToForm}
              style={{ cursor: "pointer" }}
            ></img>
          </div>
        </div>
      </div>
      <div className="main0-wrapper" ref={main0Ref}>
        내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.
        <br />
        이제껏 경험 못 했던 쉽고 편리한 금융 서비스,
        <br />
        토스와 함께라면 당신의 일상이 새로워질 거예요.
      </div>
      <main className="main-wrapper">
        <div className="shoe-menu-main">Products</div>

        <div className="shoe-image-row">
          {shoes.slice(0, 3).map((item, i) => (
            <Product
              key={i}
              title={item.title}
              price={
                item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                "₩"
              }
              img={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
            />
          ))}
        </div>
      </main>
      <div className="report-area">
        <div className="report-wrapper">
          <div className="report-left-wrapper">
            <div className="report-left-title">비즈니스 고객 제보</div>
            <div className="report-left-content">
              토스팀과의 협업 중 불편을 느끼셨나요?
              <br />
              지금 바로 알려주세요.
            </div>
            <div className="report-left-button">접수하기</div>
          </div>
          <img
            className="report-image"
            src="https://static.toss.im/3d-emojis/u1F4C4-u26A0.png"
          />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-copname">(주)비바리퍼블리카</div>
        <div className="footer-address">
          사업자 등록번호 : 120-88-01280 | 대표 : 이승건
          <br />
          호스팅 서비스 : 주식회사 비바리퍼블리카 | 통신판매업 신고번호 :
          2014-서울강남-03377 사업자정보확인
          <br />
          06236 서울특별시 강남구 테헤란로 142, 4층, 10층, 11층, 12층, 13층,
          22층, 23층 (역삼동, 아크플레이스)
          <br />
          고객센터 : 서울특별시 강남구 테헤란로 133, 9층 (역삼동,한국타이어빌딩)
        </div>
        <div className="footer-term-wrapper-foralign">
          <div className="footer-term-wrapper">
            <div className="footer-term-wrapper-source">
              서비스 이용약관
              <br />
              개인정보 처리방침
              <br />
              위치기반서비스 이용약관
              <br />
              금융소비자보호
            </div>
            <div className="footer-term-wrapper-source">
              통합 금융정보 서비스 약관
              <br />
              채용팀 개인정보 처리방침
              <br />
              가맹점 고지사항
              <br />
              토스비즈니스 개인정보 처리방침
            </div>
            <div className="footer-term-wrapper-source">
              마이데이터 서비스 이용약관
              <br />
              어드민 서비스 개인정보 처리방침
              <br />
              토스 전자서명인증업무준칙
              <br />
              퀵계좌이체 개인정보 처리방침
            </div>
            <div className="footer-term-wrapper-source">
              이용자의 권리 및 유의사항
              <br />
              고정형 영상정보처리기기 운영 관리 방침
              <br />
              토스 전자인증서비스 약관
              <br />
            </div>
          </div>
        </div>
        <div className="footer-icon-wrapper">
          <img
            className="footer-icon"
            src="https://static.toss.im/assets/homepage/safety/icon-tossfeed.svg"
          />
          <img
            className="footer-icon"
            src="https://static.toss.im/assets/homepage/safety/icn-naver.svg"
          />
          <img
            className="footer-icon"
            src="https://static.toss.im/assets/homepage/safety/icon-x.svg"
          />
          <img
            className="footer-icon"
            src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg"
          />
        </div>
      </footer>
    </div>
  );
}
