import "../styles/AppStyles_Tablet.css";
import hamburger from "../../public/assets/hamburger.svg";

export default function HeaderTablet({ logo }) {
  return (
    <div className="nav-wrapper-for-white">
      <header className="header">
        <a className="logo-wrap" href="/">
          <img className="logo" src={logo} />
        </a>
        <div className="header-right-wrapper">
          <div className="header-download-icon">앱 다운로드</div>
          <img className="header-hamburger-icon" src={hamburger} />
        </div>
      </header>
    </div>
  );
}
