import "../components/css/Header.css";

import header1 from "../assets/img/header-garden-1.jpg";
import header2 from "../assets/img/header-garden-2.jpg";
import header3 from "../assets/img/header-garden-3.jpg";

import Button from "../components/Button.jsx";

function Header() {
  return (
    <section id="home">
      <div className="header-div soft-shadow">
        <h1>
          Garten<span className="green-span">Art</span>
        </h1>
        <p className="header-text">Ihr Traumgarten wird Wirklichkeit</p>
        <div className="header-images">
          <img
            src={header1}
            className="header-image img-shadow"
            alt="Gartenbild"
          />
          <img
            src={header3}
            className="header-image img-shadow"
            alt="Gartenbild"
          />
          <img
            src={header2}
            className="header-image img-shadow"
            alt="Gartenbild"
          />
        </div>
        <Button className="header-button">Unsere Gärten entdecken</Button>
      </div>
    </section>
  );
}

export default Header;
