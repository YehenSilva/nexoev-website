import Reveal from './Reveal.jsx';
import '../styles/ValidatedBy.css';

const BASE_PARTNERS = [
  {
    id: 'iit',
    name: 'Informatics Institute of Technology',
    shortName: 'IIT Sri Lanka',
    src: '/partners/iit-logo.webp',
    srcSet: '/partners/iit-logo.webp 1x, /partners/iit-logo@2x.webp 2x',
    colorSrc: '/partners/iit-color.webp',
    colorSrcSet: '/partners/iit-color.webp 1x, /partners/iit-color@2x.webp 2x',
    href: 'https://www.iit.ac.lk/',
    width: 195,
    height: 81,
  },
  {
    id: 'westminster',
    name: 'University of Westminster',
    shortName: 'University of Westminster',
    src: '/partners/westminster-logo.webp',
    srcSet: '/partners/westminster-logo.webp 1x, /partners/westminster-logo@2x.webp 2x',
    colorSrc: '/partners/westminster-color.webp',
    colorSrcSet: '/partners/westminster-color.webp 1x, /partners/westminster-color@2x.webp 2x',
    href: 'https://www.westminster.ac.uk/',
    width: 286,
    height: 72,
  },
  {
    id: 'atp',
    name: 'Agile Team Project',
    shortName: 'Agile Team Project',
    src: '/partners/atp-logo.webp',
    srcSet: '/partners/atp-logo.webp 1x, /partners/atp-logo@2x.webp 2x',
    colorSrc: '/partners/atp-color.webp',
    colorSrcSet: '/partners/atp-color.webp 1x, /partners/atp-color@2x.webp 2x',
    href: 'https://www.sdgp.lk/',
    width: 143,
    height: 96,
  },
];

// Duplicate sets to create an unbroken, mathematically seamless infinite marquee loop
const MARQUEE_ITEMS = [
  ...BASE_PARTNERS.map((p) => ({ ...p, key: `${p.id}-1` })),
  ...BASE_PARTNERS.map((p) => ({ ...p, key: `${p.id}-2` })),
  ...BASE_PARTNERS.map((p) => ({ ...p, key: `${p.id}-3` })),
  ...BASE_PARTNERS.map((p) => ({ ...p, key: `${p.id}-4` })),
];

export default function ValidatedBy({ embedded = false, className = '' }) {
  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', window.location.pathname + href);
      }
    }
  };

  const content = (
    <Reveal className={`validated-by__card ${embedded ? 'validated-by--embedded' : ''}`}>
      <div className="validated-by__header">
        <span className="validated-by__label">
          <span className="validated-by__label-dot" />
          Validated and Supported by
        </span>
      </div>

      <div className="validated-by__marquee-wrapper" tabIndex={0} aria-label="Partner institutions carousel, hover to pause and view colors">
        <div className="validated-by__track">
          {MARQUEE_ITEMS.map((partner) => {
            const isExternal = partner.href.startsWith('http');
            return (
              <a
                key={partner.key}
                href={partner.href}
                onClick={(e) => handleClick(e, partner.href)}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={`validated-by__item validated-by__item--${partner.id}`}
                title={`${partner.name} (${partner.shortName}) - Click to explore`}
                aria-label={`${partner.name} (${partner.shortName})`}
              >
                <div className="validated-by__logo-wrapper">
                  {/* Default Muted / Grayscale State */}
                  <img
                    src={partner.src}
                    srcSet={partner.srcSet}
                    alt={partner.name}
                    className="validated-by__img validated-by__img--mono"
                    width={partner.width}
                    height={partner.height}
                    loading="lazy"
                  />
                  {/* Vibrant Full-Color State shown smoothly on hover */}
                  <img
                    src={partner.colorSrc}
                    srcSet={partner.colorSrcSet}
                    alt=""
                    aria-hidden="true"
                    className="validated-by__img validated-by__img--color"
                    width={partner.width}
                    height={partner.height}
                    loading="lazy"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Reveal>
  );

  if (embedded) {
    return content;
  }

  return (
    <section className={`validated-by ${className}`} aria-label="Validated and Supported by">
      <div className="container">
        {content}
      </div>
    </section>
  );
}
