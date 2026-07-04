import './LandingNav.css';

export default function LandingNav() {
  return (
    <nav className="landing-nav">
      <div className="landing-nav__logo">VOTOSEGURO</div>
      <div className="landing-nav__links">
        <a href="#about" className="landing-nav__link">Acerca de</a>
        <a href="#services" className="landing-nav__link">Servicios</a>
        <a href="#" className="landing-nav__link">Iniciar Sesión</a>
        <a href="#" className="landing-nav__link">Registrarse</a>
      </div>
    </nav>
  );
}
