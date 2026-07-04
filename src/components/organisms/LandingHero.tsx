import Icon from '../atoms/Icon';
import './LandingHero.css';

export default function LandingHero() {
  return (
    <section className="landing-hero">
      <div className="landing-hero__content">
        <h1 className="landing-hero__title">
          Voto Seguro
          <br />
          para todos los ecuatorianos
        </h1>
        <p className="landing-hero__description">
          Sistema de votación electrónica seguro, transparente y confiable. Participa en
          procesos electorales desde cualquier lugar con total garantía.
        </p>
      </div>
      <div className="landing-hero__box">
        <div className="landing-hero__box-dots">●●●</div>
        <div className="landing-hero__box-content">
          <Icon name="votoSeguro" alt="Voto Seguro" className="landing-hero__box-icon" />
          <p>
            Elecciones Seguras
            <br />
            Resultados Transparentes
          </p>
        </div>
      </div>
    </section>
  );
}
