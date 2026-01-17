const programs = [
  {
    title: "SFL",
    desc: "Percorsi formativi per migliorare competenze professionali.",
  },
  {
    title: "ADI",
    desc: "Supporto alla formazione e all’inclusione sociale.",
  },
  {
    title: "Programma GOL",
    desc: "Riqualificazione e aggiornamento professionale.",
  },
]

export default function Programs() {
  return (
    <section id="programs" className="section">
      <h2>Programmi disponibili</h2>
      <div className="p-2">"Sosteniamo la tua formazione per chi usufruisce dei percorsi:" 
        </div>  

      <div className="cards">
        {programs.map((p) => (
          <div key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}