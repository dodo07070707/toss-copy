import { Link } from "react-router-dom";
import NavDetail from "../NavDetail";
import "../styles/AppStyles.css";

export default function Nav() {
  return (
    <nav className="nav-wrapper">
      {NavDetail.map((item) => (
        <div className="nav-desc-wrapper">
          <Link key={item.idx} to={`/${item.link}`} className="nav-link">
            {item.name}
          </Link>
        </div>
      ))}
      <div className="nav-innermargin"></div>
      <div className="nav-desc-wrapper">
        <div className="nav-lang-on">KOR</div>
        <div className="nav-lang-split">|</div>
        <div className="nav-lang-off">ENG</div>
      </div>
    </nav>
  );
}
