import "../components/css/Why.css";

function Why() {
  return (
    <section id="why-gartenart" className="soft-shadow">
      <h2>
        Warum Garten<span className="green-span">Art</span>
      </h2>
      <div>
        <div className="cards">
          <div
            className="why-card"
            id="why-card-1"
            onClick={console.log("Hello World")}
            style={{ gridArea: "card-1" }}
          >
            <p>Über 15 Jahre Erfahrung</p>
          </div>

          <div
            className="why-card"
            id="why-card-2"
            style={{ gridArea: "card-2" }}
          >
            <p>Alles aus einer Hand</p>
          </div>

          <div
            className="why-card"
            id="why-card-2"
            style={{ gridArea: "card-3" }}
          >
            <p>Individuelle Beratung</p>
          </div>

          {/*  */}

          <div className="why-description" style={{ gridArea: "description" }}>
            <p>Handwerkliches Können und gärtnerisches Wissen seit 2005.</p>
          </div>
          <img
            className="why-image"
            src="src/assets/img/why-image-1.jpg"
            style={{ gridArea: "img" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Why;
