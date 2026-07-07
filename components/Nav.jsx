'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav, site } from '../lib/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu mobile à chaque navigation
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="nav__inner container">
        <Link href="/" className="nav__brand">
          Helléborus
        </Link>

        <button
          className="nav__burger"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'is-active' : ''}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding-block: 1.1rem;
          color: #fff;
          transition: background 0.35s ease, color 0.35s ease,
            box-shadow 0.35s ease;
        }
        .nav--solid {
          background: var(--paper);
          color: var(--ink);
          box-shadow: 0 1px 0 var(--line);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav__brand {
          font-family: var(--font-display);
          font-size: 1.5rem;
          letter-spacing: 0.08em;
        }
        .nav__links {
          display: flex;
          gap: 2.2rem;
        }
        .nav__links :global(a) {
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding-bottom: 0.3rem;
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease;
        }
        .nav__links :global(a:hover),
        .nav__links :global(a.is-active) {
          border-bottom-color: currentColor;
        }
        .nav--solid .nav__links :global(a:hover),
        .nav--solid .nav__links :global(a.is-active) {
          color: var(--plum);
          border-bottom-color: var(--plum);
        }
        .nav__burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 32px;
          height: 24px;
          position: relative;
          color: inherit;
        }
        .nav__burger span {
          position: absolute;
          left: 4px;
          right: 4px;
          height: 1px;
          background: currentColor;
          transition: transform 0.3s ease, top 0.3s ease;
        }
        .nav__burger span:nth-child(1) { top: 8px; }
        .nav__burger span:nth-child(2) { top: 16px; }

        @media (max-width: 820px) {
          .nav__burger { display: block; }
          .nav__links {
            display: none;
          }
          .nav__links.is-open {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            gap: 0;
            background: var(--paper);
            color: var(--ink);
            border-bottom: 1px solid var(--line);
          }
          .nav__links.is-open :global(a) {
            padding: 1.1rem var(--gutter);
            border-bottom: 1px solid var(--line);
          }
        }
      `}</style>
    </header>
  );
}
