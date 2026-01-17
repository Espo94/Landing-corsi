export default function App() {
  return (
    <>
      {/* HEADER con LOGO */}
      <header className="header">
        <img
          className="logo"
          src="/logo.png"
          alt="Associazione C.E.I.O"
        />
      </header>

      {/* HERO */}
      <section className="hero fade-in">
        <div className="hero-content">
          <h1>Costruisci il tuo futuro professionale</h1>
          <p>
            Formazione pensata per accompagnarti nella crescita personale
            e professionale.
          </p>
          <button
            className="cta-primary"
            onClick={() =>
              window.location.href = "mailto:associazioneceio@libero.it"
            }
          >
            Contattaci via email
          </button>
        </div>
      </section>

      {/* IMMAGINE */}
      <section className="image-section fade-in">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
          alt="Formazione professionale"
        />
      </section>

      {/* CHI SIAMO */}
      <section className="section fade-in">
        <h2>Chi siamo</h2>
        <p className="section-text">
          <strong>Associazione C.E.I.O</strong> è un’associazione che offre percorsi formativi
          concreti, orientati allo sviluppo delle competenze e alla crescita professionale.
        </p>

        <div className="info-grid">
          <div>📍 Via Brutium 16 – Catanzaro (CZ)</div>
          <div>📄 P. IVA 04039860798</div>
        </div>
      </section>

      {/* PROGRAMMI */}
      <section className="section light fade-in">
        <h2>I nostri programmi</h2>

        <div className="cards">
          <div className="card hover">
            <h3>SFL</h3>
            <p>Percorsi formativi per migliorare le competenze professionali.</p>
          </div>

          <div className="card hover">
            <h3>ADI</h3>
            <p>Supporto alla formazione e all’inclusione sociale.</p>
          </div>

          <div className="card hover">
            <h3>Programma GOL</h3>
            <p>Riqualificazione e aggiornamento professionale.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta fade-in">
        <h2>Inizia oggi il tuo percorso</h2>
        <p>Contattaci e scopri quale programma è più adatto a te</p>
        <button
          className="cta-primary"
          onClick={() =>
            window.location.href = "mailto:associazioneceio@libero.it"
          }
        >
          Scrivi a associazioneceio@libero.it
        </button>
      </section>

      {/* FOOTER */}
      <footer>
        <strong>Associazione C.E.I.O</strong><br />
        Via Brutium 16 – Catanzaro (CZ) 88100<br />
        P. IVA 04039860798
      </footer>
    </>
  )
}