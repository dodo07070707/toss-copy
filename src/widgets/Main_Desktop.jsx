import "../styles/AppStyles.css";

export default function MainDesktop({ bg, arrow, onMoveToForm }) {
  return (
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
  );
}
