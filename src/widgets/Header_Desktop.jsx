import Nav from "./Nav_Desktop";

export default function HeaderDesktop({ logo }) {
  return (
    <div className="nav-wrapper-for-white">
      <header className="header">
        <a className="logo-wrap" href="/">
          <img className="logo" src={logo} />
        </a>
        <Nav />
      </header>
    </div>
  );
}
