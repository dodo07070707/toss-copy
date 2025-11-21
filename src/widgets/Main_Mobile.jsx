import "../styles/AppStyles_Mobile.css";

export default function MainMobile({ bg, arrow, onMoveToForm }) {
  return (
    <div className="main-bg-items">
      <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}>
        <div className="main-content-wrapper">
          <div className="main-content-top-wrapper">
            <div className="main-content-text">
              금융의 모든 것
              <br />
              토스에서 <br />
              쉽고 간편하게
            </div>
            <div className="main-download-icon">앱 다운로드</div>
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
