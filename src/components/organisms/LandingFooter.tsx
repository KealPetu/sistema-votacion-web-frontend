import FooterColumn from '../molecules/FooterColumn';
import './LandingFooter.css';

export default function LandingFooter() {
  return (
    <footer className="landing-footer">
      <div className="landing-footer__brand">
        <div className="landing-footer__brand-title">VOTOSEGURO</div>
        <p className="landing-footer__brand-description">
          Sistema de votación electrónica
          <br />
          seguro y transparente para Ecuador
        </p>
      </div>
      <div className="landing-footer__links">
        <FooterColumn
          title="Plataforma"
          links={[
            { label: 'Características', href: '#services' },
            { label: 'Seguridad', href: '#' },
            { label: 'Soporte', href: '#' },
          ]}
        />
        <FooterColumn
          title="Institución"
          links={[
            { label: 'Acerca de', href: '#about' },
            { label: 'Contacto', href: '#' },
            { label: 'Noticias', href: '#' },
          ]}
        />
      </div>
      <div className="landing-footer__legal">
        <p>© 2024 — 2026 VotoSeguro Ecuador</p>
        <p>Privacidad — Términos</p>
      </div>
    </footer>
  );
}
