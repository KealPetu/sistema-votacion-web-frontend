import type { ReactNode } from 'react';
import Header from '../organisms/Header';
import '../organisms/AuthCard.css';

interface AuthLayoutProps {
  children: ReactNode;
  showHeader?: boolean;
}

export default function AuthLayout({ children, showHeader = false }: AuthLayoutProps) {
  return (
    <div className="login-screen-container">
      {showHeader && <Header />}
      <main className={`login-main-content ${showHeader ? 'registro-main' : ''}`.trim()}>
        {children}
      </main>
    </div>
  );
}
