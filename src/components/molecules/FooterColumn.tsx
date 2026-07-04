import './FooterColumn.css';

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="landing-footer__column">
      <strong className="landing-footer__column-title">{title}</strong>
      {links.map((link) => (
        <a key={link.label} href={link.href} className="landing-footer__column-link">
          {link.label}
        </a>
      ))}
    </div>
  );
}
