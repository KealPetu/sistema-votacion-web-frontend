import type { ReactNode } from 'react';
import Sidebar from '../organisms/Sidebar';
import Header from '../organisms/Header';
import HelpFloatingButton from '../atoms/HelpFloatingButton';
import './VotanteLayout.css';

interface VotanteLayoutProps {
  children: ReactNode;
  seccionActiva?: 'votaciones';
}

export default function VotanteLayout({ children, seccionActiva = 'votaciones' }: VotanteLayoutProps) {
  return (
    <>
      <Sidebar seccionActiva={seccionActiva} />
      <Header />

      <div className="main-layout-container">
        <main className="page-content">{children}</main>
        <HelpFloatingButton />
      </div>
    </>
  );
}
