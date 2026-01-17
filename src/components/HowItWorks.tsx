const steps = [
  { title: "1. Contattaci", desc: "Scrivi una mail e ti risponderemo in breve." },
  { title: "2. Valutazione", desc: "Capiremo il percorso più adatto a te." },
  { title: "3. Inizio corso", desc: "Parti subito con formazione pratica e supporto." },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section light">
      <h2>Come funziona</h2>
      <div className="steps">
        {steps.map((s) => (
          <div key={s.title} className="step">
            <div className="step-number">{s.title}</div>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}