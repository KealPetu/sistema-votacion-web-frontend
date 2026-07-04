import Icon from './Icon';
import './HelpFloatingButton.css';

export default function HelpFloatingButton() {
  return (
    <button className="btn-help-floating" aria-label="Ayuda">
      <Icon name="help" alt="Ayuda" />
    </button>
  );
}
