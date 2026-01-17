export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Formazione moderna per il tuo futuro</h1>
          <p>
            Percorsi concreti, orientati alle competenze richieste dal mercato del lavoro.
          </p>
          <button
            className="cta-primary"
            onClick={() => (window.location.href = "mailto:associazioneceio@libero.it")}
          >
            Scrivici ora
          </button>
          <div className="hero-meta">
            <span>📍 Catanzaro</span>
            <span>📄 P.IVA 04039860798</span>
          </div>
        </div>
      </div>
    </section>
  )
}