import type { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
  /** Nombre del administrador autenticado (sessionScope.autorizado.nombre en el original) */
  welcomeName?: string;
}

/** Kept intentionally unstyled — the original admin views have no CSS applied. */
export default function AdminLayout({ children, welcomeName }: AdminLayoutProps) {
  return (
    <>
      <nav>
        <h1>VotoSeguro</h1>
        {welcomeName && <span>Bienvenido, {welcomeName}</span>}
        <a href="#">Cerrar sesión</a>
      </nav>
      {children}
    </>
  );
}
