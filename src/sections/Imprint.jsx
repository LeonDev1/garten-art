import "../components/css/Imprint.css";

function Imprint() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact">
      <p>Das könnte deine Website sein</p>
      <p className="small-text">Diese Website dient nur zu Übungszwecken.</p>
      <br />
      <p>
        Hole dir jetzt deine professionelle Website zu einem günstigen Preis
      </p>
      <p>
        <a href="https://leondev1.github.io/portfolio/">Leondev</a>
      </p>
      <p className="small-text" id="watermark">
        Copyright © {currentYear}{" "}
        <a
          className="small-text"
          href="https://leondev1.github.io/portfolio"
          style={{
            fontWeight: 300,
            color: "var(--text-color)",
          }}
        >
          Leondev
        </a>
      </p>
    </section>
  );
}

export default Imprint;
