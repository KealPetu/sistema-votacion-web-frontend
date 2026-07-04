import iconAlarm from '../../assets/icons/icon-alarm.svg';
import iconBandera from '../../assets/icons/icon-bandera.svg';
import iconExit from '../../assets/icons/icon-exit.svg';
import iconEyeBlock from '../../assets/icons/icon-eye-block.svg';
import iconEye from '../../assets/icons/icon-eye.svg';
import iconHelp from '../../assets/icons/icon-help.svg';
import iconHome from '../../assets/icons/icon-home.svg';
import iconHouse2 from '../../assets/icons/icon-house2.svg';
import iconLeft from '../../assets/icons/icon-left.svg';
import iconPerson from '../../assets/icons/icon-person.svg';
import iconRegistro from '../../assets/icons/icon-registro.svg';
import iconReset from '../../assets/icons/icon-reset.svg';
import iconRight from '../../assets/icons/icon-right.svg';
import iconVotar from '../../assets/icons/icon-votar.svg';
import iconVotoSeguro from '../../assets/icons/icon-votoSeguro.svg';

const ICONS = {
  alarm: iconAlarm,
  bandera: iconBandera,
  exit: iconExit,
  'eye-block': iconEyeBlock,
  eye: iconEye,
  help: iconHelp,
  home: iconHome,
  house2: iconHouse2,
  left: iconLeft,
  person: iconPerson,
  registro: iconRegistro,
  reset: iconReset,
  right: iconRight,
  votar: iconVotar,
  votoSeguro: iconVotoSeguro,
} as const;

export type IconName = keyof typeof ICONS;

interface IconProps {
  name: IconName;
  size?: number;
  alt?: string;
  className?: string;
}

export default function Icon({ name, size, alt = '', className = '' }: IconProps) {
  return (
    <img
      src={ICONS[name]}
      alt={alt}
      className={className}
      style={size ? { width: size, height: size } : undefined}
    />
  );
}
