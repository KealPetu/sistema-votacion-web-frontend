import FeatureCard from '../molecules/FeatureCard';
import './LandingServices.css';

const FEATURES = [
  {
    icon: 'votar' as const,
    title: 'Voto Electrónico Seguro',
    description: 'Cifrado de extremo a extremo para proteger tu decisión.',
  },
  {
    icon: 'registro' as const,
    title: 'Identidad Verificada',
    description: 'Integración directa con los padrones del CNE.',
  },
  {
    icon: 'alarm' as const,
    title: 'Resultados Inmediatos',
    description: 'Transmisión de actas en tiempo real al cierre de urnas.',
  },
];

export default function LandingServices() {
  return (
    <div id="services" className="landing-services">
      <h2 className="landing-services__title">Nuestros Servicios</h2>
      <p className="landing-services__description">
        Ofrecemos herramientas tecnológicas de última generación para garantizar elecciones
        transparentes, accesibles y 100% auditables.
      </p>
      <section className="landing-features">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>
    </div>
  );
}
