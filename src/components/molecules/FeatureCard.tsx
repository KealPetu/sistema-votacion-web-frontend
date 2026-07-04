import Icon, { type IconName } from '../atoms/Icon';
import './FeatureCard.css';

interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="landing-feature">
      <div className="landing-feature__box">
        <Icon name={icon} alt={title} className="landing-feature__icon" />
        <p className="landing-feature__description">
          <strong>{title}</strong>
          {description}
        </p>
      </div>
    </div>
  );
}
