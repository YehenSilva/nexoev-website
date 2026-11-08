import { useState } from 'react';
import { Play, Apple } from 'lucide-react';
import { STORE_URLS } from '../config.js';
import '../styles/StoreBadges.css';

const BADGES = [
  { key: 'play', Icon: Play, small: 'GET IT ON', name: 'Google Play' },
  { key: 'apple', Icon: Apple, small: 'Download on the', name: 'App Store' },
];

export default function StoreBadges() {
  const [msg, setMsg] = useState('');
  const handle = (e, url) => {
    if (url) return;
    e.preventDefault();
    setMsg('Store link coming soon');
    setTimeout(() => setMsg(''), 2400);
  };
  return (
    <div className="badges">
      {BADGES.map(({ key, Icon, small, name }) => (
        <a key={key} href={STORE_URLS[key] || '#'} className="badge" onClick={(e) => handle(e, STORE_URLS[key])} target={STORE_URLS[key] ? '_blank' : undefined} rel="noreferrer">
          <Icon size={22} />
          <span><small>{small}</small><b>{name}</b></span>
        </a>
      ))}
      <span className="badges__msg" role="status">{msg}</span>
    </div>
  );
}
