import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import Button from './Button.jsx';
import '../styles/Navbar.css';

const LINKS = [
  ['Home', '/'],
  ['Platform', '#platform'],
  ['Features', '#features'],
  ['How It Works', '#how-it-works'],
  ['About', '/about'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
];

export default function Navbar({ currentPath = '/', onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    setOpen(false);

    if (onNavigate) {
      if (href === '/about') {
        e.preventDefault();
        onNavigate('/about');
        return;
      }

      if (href === '/' || href === '#home') {
        e.preventDefault();
        onNavigate('/');
        return;
      }

      if (href.startsWith('#')) {
        if (currentPath !== '/') {
          e.preventDefault();
          onNavigate('/' + href);
          return;
        }
      }
    }

    if (href === '/' || href === '#home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
  };

  const handleCtaClick = (e) => {
    setOpen(false);
    if (onNavigate && currentPath !== '/') {
      e.preventDefault();
      onNavigate('/#waitlist');
      return;
    }
    const waitlist = document.querySelector('#waitlist');
    if (waitlist) {
      e.preventDefault();
      waitlist.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__bar">
        <Logo onNavigate={onNavigate} />
        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
          {LINKS.map(([label, href]) => {
            const isActive = currentPath === href || (href === '/' && currentPath === '/');
            return (
              <a
                key={href}
                href={href}
                className={isActive && href === '/about' ? 'nav__link--active' : ''}
                style={isActive && href === '/about' ? { color: 'var(--lime2)', fontWeight: 700 } : undefined}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            );
          })}
          <Button href="#waitlist" small className="nav__cta-mobile" onClick={handleCtaClick}>
            Join Waitlist
          </Button>
        </nav>
        <div className="nav__right">
          <Button href="#waitlist" small onClick={handleCtaClick}>
            Join Waitlist
          </Button>
          <button
            className="nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
