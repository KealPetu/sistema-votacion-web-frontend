import Icon, { type IconName } from '../atoms/Icon';
import './CandidateCard.css';

interface Position {
  title: string;
  image?: IconName;
  name: string;
}

interface CandidateCardProps {
  radioName: string;
  value: string;
  partyName: string;
  /** Use partyLogo for an icon-based badge (e.g. "SI"), or partyBadgeText for a plain text badge (e.g. "NO") */
  partyLogo?: IconName;
  partyBadgeText?: string;
  positions: Position[];
  defaultChecked?: boolean;
}

export default function CandidateCard({
  radioName,
  value,
  partyName,
  partyLogo,
  partyBadgeText,
  positions,
  defaultChecked,
}: CandidateCardProps) {
  return (
    <label className="candidate-card">
      <input
        type="radio"
        name={radioName}
        value={value}
        className="candidate-card__checkbox"
        defaultChecked={defaultChecked}
      />
      <div className="candidate-card__content">
        <div className="candidate-card__party">
          <p className="candidate-card__party-label">Opción</p>
          {partyLogo ? (
            <Icon name={partyLogo} alt={value} className="candidate-card__party-logo" />
          ) : (
            <div className="candidate-card__party-badge">{partyBadgeText}</div>
          )}
          <p className="candidate-card__party-name">{partyName}</p>
        </div>
        <div className="candidate-card__positions">
          {positions.map((position) => (
            <div className="position" key={position.title}>
              <p className="position__title">{position.title}</p>
              {position.image && (
                <Icon name={position.image} alt={value} className="position__image" />
              )}
              <p className="position__name">{position.name}</p>
            </div>
          ))}
        </div>
      </div>
    </label>
  );
}
