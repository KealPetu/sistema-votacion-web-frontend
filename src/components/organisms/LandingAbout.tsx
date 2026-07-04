import './LandingAbout.css';

export default function LandingAbout() {
  return (
    <section id="about" className="landing-bottom">
      <div className="landing-bottom__text-wrapper">
        <h2 className="landing-bottom__title">Acerca de Voto Seguro</h2>
        <p className="landing-bottom__description">
          <strong>Voto Seguro</strong> nace como una iniciativa pionera para modernizar y
          democratizar el proceso electoral en el Ecuador. Nuestro objetivo principal es
          erradicar las ineficiencias y vulnerabilidades de los métodos de votación
          tradicionales.
          <br />
          <br />
          A través de nuestra plataforma web, garantizamos que cada ciudadano pueda ejercer su
          derecho al voto de manera remota, accesible y completamente confiable. Utilizamos
          algoritmos avanzados de cifrado que aseguran que{' '}
          <strong>tu voto sea inalterable, secreto y sumado correctamente</strong> al escrutinio
          final.
          <br />
          <br />
          <b className="landing-bottom__highlight">
            Plataforma auditada y certificada por el Consejo Nacional Electoral (CNE).
          </b>
          <br />
        </p>
      </div>
      <div className="landing-bottom__image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Acerca de Voto Seguro"
          className="landing-bottom__image"
        />
      </div>
    </section>
  );
}
