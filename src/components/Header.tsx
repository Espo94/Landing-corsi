export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <img className="logo" src="/logo.png" alt="Associazione C.E.I.O" />
        <nav className="nav">
          <a href="#programs">Programmi</a>
          <a href="#how">Come funziona</a>
          <a href="#contact">Contatti</a>
        </nav>
      </div>
    </header>
  )
}