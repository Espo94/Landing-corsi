export default function CTA() {
  return (
    <section className="cta" id="contact">
      <h2>Vuoi saperne di più?</h2>
      <p>Scrivici e ti guideremo nel percorso migliore per te.</p>
      <button
        className="cta-primary"
        onClick={() => (window.location.href = "mailto:associazioneceio@libero.it")}
      >
        Invia una mail
      </button>
    </section>
  )
}