export default function App() {
  return (
    <>
      {/* HERO */}
      <section className="hero fade-in">
        <div className="hero-content">
          <span className="badge">Ente riconosciuto Regione Calabria</span>
          <h1>Costruisci il tuo futuro professionale</h1>
          <p>
            Formazione pensata per accompagnarti nella crescita personale
            e professionale.
          </p>
          <button
            className="cta-primary"
            onClick={() =>
              document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Richiedi informazioni
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
          <strong>Associazione C.E.I.O</strong> è un ente di formazione riconosciuto
          dalla Regione Calabria. Offriamo percorsi formativi accessibili,
          concreti e orientati allo sviluppo delle competenze.
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
      </section>

      {/* FORM */}
      <section id="contatti" className="section fade-in">
        <h2>Contattaci</h2>

        <form
          className="form"
          action="mailto:info@associazioneceio.it"
          method="post"
          encType="text/plain"
        >
          <input type="text" name="Nome" placeholder="Nome e Cognome" required />
          <input type="email" name="Email" placeholder="Email" required />
          <textarea
            name="Messaggio"
            placeholder="Scrivi qui la tua richiesta"
            rows={5}
            required
          />
          <button type="submit" className="cta-primary">
            Invia richiesta
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <strong>Associazione C.E.I.O</strong><br />
        Ente di formazione riconosciuto dalla Regione Calabria<br />
        Via Brutium 16 – Catanzaro (CZ) 88100<br />
        P. IVA 04039860798
      </footer>
    </>
  )
}