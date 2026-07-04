import Icon from '../atoms/Icon';
import './Header.css';

export default function Header() {
  return (
    <header className="o-header">
      <div className="o-header__brand">
        <Icon name="votoSeguro" alt="VotoSeguro Logo" className="o-header__logo" />
      </div>

      <div className="o-header__status">
        <Icon name="alarm" alt="Alarma" className="o-header__icon" />
        <span className="o-header__text">Verificado por CNE</span>
      </div>
    </header>
  );
}
