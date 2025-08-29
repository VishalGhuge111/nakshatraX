import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showHeaderFooter?: boolean;
}

export default function Layout({ children, showHeaderFooter = true }: LayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Starfield Background */}
      <div className="starfield"></div>
      
      {showHeaderFooter && <Header />}
      
      <main className={showHeaderFooter ? 'pt-20' : ''}>
        {children}
      </main>
      
      {showHeaderFooter && <Footer />}
    </div>
  );
}