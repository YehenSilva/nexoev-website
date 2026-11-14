import { Instagram, Facebook } from 'lucide-react';
import { SOCIAL_LINKS } from '../config.js';
import '../styles/SocialLinks.css';

// Crisp, pixel-perfect TikTok vector icon
export const TikTokIcon = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.11V9.92a6.34 6.34 0 0 0-.79-.05A6.34 6.34 0 0 0 3 16.21 6.34 6.34 0 0 0 9.34 22.56a6.34 6.34 0 0 0 6.34-6.35V8.71a8.28 8.28 0 0 0 3.91 1.25V6.69Z" />
  </svg>
);

const PLATFORMS = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@nexo.ev',
    href: SOCIAL_LINKS.instagram,
    Icon: Instagram,
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    handle: '@nexo.ev',
    href: SOCIAL_LINKS.tiktok,
    Icon: TikTokIcon,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    handle: 'NexoEV',
    href: SOCIAL_LINKS.facebook,
    Icon: Facebook,
  },
];

export default function SocialLinks({ variant = 'icons', className = '', showHandles = false }) {
  return (
    <div className={`social-links social-links--${variant} ${className}`} aria-label="NexoEV Social Media Channels">
      {PLATFORMS.map(({ id, label, handle, href, Icon }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-link social-link--${id}`}
          title={`Follow NexoEV on ${label} (${handle})`}
          aria-label={`Follow NexoEV on ${label}`}
        >
          <span className="social-link__icon-wrap">
            <Icon size={18} />
          </span>
          {showHandles && (
            <span className="social-link__info">
              <span className="social-link__label">{label}</span>
              <span className="social-link__handle">{handle}</span>
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

