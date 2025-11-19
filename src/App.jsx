import "./styles/AppStyles.css";

import Product from "./widgets/product.jsx";
import data from "./data.js";
import { useState } from "react";
import Nav from "./nav.jsx";

import bg from "../public/assets/main_background.png";
import logo from "../public/assets/logo1.svg";

export default function App() {
  const [shoes] = useState(data);

  return (
    <div className="app-container">
      <div className="header-temp">
        <header className="header">
          <a className="logo-wrap" href="/">
            <img className="logo" src={logo} />
          </a>
          <Nav />
        </header>
      </div>

      <div className="main-bg" style={{ backgroundImage: `url(${bg})` }} />

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
