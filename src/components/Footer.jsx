import { useState, useEffect } from 'react';
import { Mail, ArrowUp, X, ShieldCheck, FileText, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import Logo from './Logo.jsx';
import SocialLinks from './SocialLinks.jsx';
import { CONTACT_EMAIL } from '../config.js';
import '../styles/Footer.css';

export default function Footer({ currentPath = '/', onNavigate }) {
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | null

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && legalModal) {
        setLegalModal(null);
      }
    };
    if (legalModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [legalModal]);

  const handleLinkClick = (e, href) => {
    if (onNavigate) {
      if (href === '/about') {
        e.preventDefault();
        onNavigate('/about');
        return;
      }
      if (href === '/') {
        e.preventDefault();
        onNavigate('/');
        return;
      }
      if (href.startsWith('#') && currentPath !== '/') {
        e.preventDefault();
        onNavigate('/' + href);
        return;
      }
    }

    if (href === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer__grid">
          {/* Brand Identity & Social Channels (Single unified place, no duplicates) */}
          <div className="footer__col footer__col--brand">
            <Logo onNavigate={onNavigate} />
            <p className="footer__bio">
              An EV companion for planning journeys, estimating arrival battery and exploring charging options across Sri Lanka.
            </p>
            <div className="footer__badge-pill">
              <Sparkles size={13} />
              <span>Built for Sri Lankan Driving Realities</span>
            </div>
            <div className="footer__socials-section">
              <span className="footer__socials-label">Follow @nexo.ev</span>
              <SocialLinks variant="icons" />
            </div>
          </div>

          {/* Explore Navigation */}
          <div className="footer__col">
            <h4 className="footer__heading">Explore</h4>
            <ul className="footer__links">
              <li>
                <a href="/" onClick={(e) => handleLinkClick(e, '/')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#platform" onClick={(e) => handleLinkClick(e, '#platform')}>
                  Platform
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleLinkClick(e, '#features')}>
                  Features
                </a>
              </li>
              <li>
                <a href="#video" onClick={(e) => handleLinkClick(e, '#video')}>
                  Video Demo
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleLinkClick(e, '#how-it-works')}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleLinkClick(e, '/about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="footer__col">
            <h4 className="footer__heading">Legal &amp; Trust</h4>
            <ul className="footer__links">
              <li>
                <button
                  type="button"
                  className="footer__link-btn"
                  onClick={() => setLegalModal('privacy')}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer__link-btn"
                  onClick={() => setLegalModal('terms')}
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <a href="#benefits" onClick={(e) => handleLinkClick(e, '#benefits')}>
                  Driver Protection
                </a>
              </li>
              <li>
                <a href="#waitlist" onClick={(e) => handleLinkClick(e, '#waitlist')}>
                  Beta Waitlist Access
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Community */}
          <div className="footer__col footer__col--contact">
            <h4 className="footer__heading">Contact &amp; Community</h4>
            <p className="footer__contact-intro">
              Have questions, feedback, or suggestions for our Sri Lanka EV platform?
            </p>

            <a href={`mailto:${CONTACT_EMAIL}`} className="footer__email-card" title="Email NexoEV">
              <div className="footer__email-icon">
                <Mail size={16} />
              </div>
              <div className="footer__email-info">
                <span className="footer__email-label">Direct Inquiries</span>
                <span className="footer__email-address">{CONTACT_EMAIL}</span>
              </div>
            </a>

            <div className="footer__actions-wrap">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="footer__action-btn"
              >
                <MessageSquare size={14} />
                <span>Send a Message</span>
              </a>
              <a
                href="#waitlist"
                onClick={(e) => handleLinkClick(e, '#waitlist')}
                className="footer__action-btn footer__action-btn--primary"
              >
                <span>Join Waitlist &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p className="footer__copyright">
              © {new Date().getFullYear()} NexoEV. Predictions are estimates, not guarantees. Figures shown are sample data.
            </p>
          </div>

          <div className="footer__bottom-right">
            <button
              type="button"
              className="footer__legal-btn"
              onClick={() => setLegalModal('privacy')}
            >
              Privacy Policy
            </button>
            <span className="footer__dot-sep" aria-hidden="true">·</span>
            <button
              type="button"
              className="footer__legal-btn"
              onClick={() => setLegalModal('terms')}
            >
              Terms &amp; Conditions
            </button>
            <span className="footer__dot-sep" aria-hidden="true">·</span>
            <button
              type="button"
              className="footer__back-btn"
              onClick={scrollToTop}
              title="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Modern Legal Modal */}
      {legalModal && (
        <div
          className="legal-modal-backdrop"
          onClick={() => setLegalModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
        >
          <div
            className="legal-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="legal-modal-header">
              <div className="legal-modal-title-group">
                {legalModal === 'privacy' ? (
                  <ShieldCheck size={22} className="legal-modal-icon" />
                ) : (
                  <FileText size={22} className="legal-modal-icon" />
                )}
                <div>
                  <h3 id="legal-modal-title">
                    {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                  </h3>
                  <span className="legal-modal-meta">NexoEV Beta · Updated November 2026</span>
                </div>
              </div>
              <button
                type="button"
                className="legal-modal-close"
                onClick={() => setLegalModal(null)}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            <div className="legal-modal-body">
              {legalModal === 'privacy' ? (
                <>
                  <section>
                    <h4>1. Overview &amp; Scope</h4>
                    <p>
                      NexoEV provides intelligent EV route planning, battery estimation, and charging network discovery. This policy describes how we handle information submitted through our platform.
                    </p>
                  </section>
                  <section>
                    <h4>2. Data Collection &amp; Usage</h4>
                    <p>
                      When you submit our Beta Waitlist or Contact form, we collect your email address, selected EV model, and optional feedback. We only use this information to notify you of pre-release availability, product updates, and beta access.
                    </p>
                  </section>
                  <section>
                    <h4>3. Zero Commercial Monetization</h4>
                    <p>
                      We do not sell, rent, or trade your personal data to any third parties or advertisers. All submitted data remains strictly within the NexoEV team.
                    </p>
                  </section>
                  <section>
                    <h4>4. Data Removal</h4>
                    <p>
                      You may request the full deletion of your contact information at any time by emailing us at{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                    </p>
                  </section>
                </>
              ) : (
                <>
                  <section>
                    <h4>1. Beta Prototype &amp; Availability</h4>
                    <p>
                      NexoEV is currently in public beta. Features, mockups, and prediction metrics are subject to continuous updates and enhancements.
                    </p>
                  </section>
                  <section>
                    <h4>2. Estimation Disclaimer</h4>
                    <p>
                      Arrival battery percentages, charging speed estimates, and range calculations are generated by computational models based on standard driving cycles. Real-world EV range will vary depending on driving behavior, weather, battery health, and payload.
                    </p>
                  </section>
                  <section>
                    <h4>3. Intellectual Property</h4>
                    <p>
                      All logos, visual mockups, interface designs, and codebase assets are intellectual property of NexoEV.
                    </p>
                  </section>
                  <section>
                    <h4>4. Support &amp; Feedback</h4>
                    <p>
                      If you have feedback or inquiries regarding the platform, please reach out to our team at{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                    </p>
                  </section>
                </>
              )}
            </div>

            <div className="legal-modal-footer">
              <span className="legal-modal-status">
                <CheckCircle2 size={15} /> Verified Beta Standard
              </span>
              <button
                type="button"
                className="btn btn--dark btn--sm"
                onClick={() => setLegalModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
