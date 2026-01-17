const reasons = [
  "Percorsi orientati al lavoro reale",
  "Tutor dedicato",
  "Formazione moderna e aggiornata",
  "Supporto continuo",
]

export default function WhyUs() {
  return (
    <section className="section">
      <h2>Perché scegliere C.E.I.O</h2>
      <div className="features">
        {reasons.map((r) => (
          <div key={r} className="feature">
            <span>✓</span>
            <p>{r}</p>
          </div>
        ))}
      </div>
    </section>
  )
}