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
    console.log("fuck");
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
    </div>
  );
}
