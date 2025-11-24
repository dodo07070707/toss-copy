import "./styles/AppStyles.css";

import ProductDesktop from "./widgets/Product_Desktop.jsx";
import ProductMobile from "./widgets/Product_Mobile.jsx";
import { useState, useRef, useEffect } from "react";

import bg from "../public/assets/main_background.png";
import logo from "../public/assets/logo1.svg";
import arrow from "../public/assets/arrow.svg";

import HeaderDesktop from "./widgets/Header_Desktop.jsx";
import HeaderMobile from "./widgets/Header_Mobile.jsx";
import HeaderTablet from "./widgets/Header_tablet.jsx";
import MainMobile from "./widgets/Main_Mobile.jsx";
import MainDesktop from "./widgets/Main_Desktop.jsx";

export default function App() {
  const main0Ref = useRef();

  /* 모바일 */
  const getScreenSize = () => {
    const width = window.innerWidth;
    if (width <= 480) return "mobile";
    if (480 < width && width <= 840) return "tablet";
    return "desktop";
  };

  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* scroll */
  const onMoveToForm = () => {
    main0Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app-container">
      {screenSize === "mobile" ? (
        <HeaderMobile logo={logo} />
      ) : screenSize === "tablet" ? (
        <HeaderTablet logo={logo} />
      ) : (
        <HeaderDesktop logo={logo} />
      )}

      {screenSize === "mobile" ? (
        <MainMobile bg={bg} arrow={arrow} onMoveToForm={onMoveToForm} />
      ) : screenSize === "tablet" ? (
        <MainDesktop bg={bg} arrow={arrow} onMoveToForm={onMoveToForm} />
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
          {screenSize === "mobile" ? (
            <ProductMobile />
          ) : screenSize === "tablet" ? (
            <ProductMobile />
          ) : (
            <ProductDesktop />
          )}
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
