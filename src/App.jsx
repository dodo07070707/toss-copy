import "./styles/AppStyles.css";

import Product from "./widgets/product.jsx";
import data from "./data.js";
import { useState, useRef, useEffect } from "react";

import bg from "../public/assets/main_background.png";
import logo from "../public/assets/logo1.svg";
import arrow from "../public/assets/arrow.svg";

import HeaderDesktop from "./widgets/Header_Desktop.jsx";
import HeaderMobile from "./widgets/Header_Mobile.jsx";
import MainMobile from "./widgets/Main_Mobile.jsx";
import MainDesktop from "./widgets/Main_Desktop.jsx";

export default function App() {
  const [shoes] = useState(data);
  const main0Ref = useRef();

  /* 모바일 호환 */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 480px)");

    setIsMobile(mediaQuery.matches);

    const handleChange = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  /* scroll */
  const onMoveToForm = () => {
    main0Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app-container">
      {isMobile ? <HeaderMobile logo={logo} /> : <HeaderDesktop logo={logo} />}
      {isMobile ? (
        <MainMobile bg={bg} arrow={arrow} onMoveToForm={onMoveToForm} />
      ) : (
        <MainDesktop bg={bg} arrow={arrow} onMoveToForm={onMoveToForm} />
      )}
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
    </div>
  );
}
