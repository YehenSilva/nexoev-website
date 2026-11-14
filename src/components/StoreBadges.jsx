import { useState } from 'react';
import { Play, Apple } from 'lucide-react';
import { STORE_URLS } from '../config.js';
import '../styles/StoreBadges.css';

const BADGES = [
  { key: 'apple', Icon: Apple, small: 'COMING SOON TO', name: 'Apple TestFlight' },
  { key: 'play', Icon: Play, small: 'COMING SOON TO', name: 'Google Play Beta' },
];

export default function StoreBadges() {
  const [msg, setMsg] = useState('');

  const handle = (e) => {
    e.preventDefault();
    const waitlist = document.querySelector('#waitlist');
    if (waitlist) {
      waitlist.scrollIntoView({ behavior: 'smooth' });
    }
    setMsg('⚡ Beta releasing soon — Join the waitlist below!');
    setTimeout(() => setMsg(''), 3000);
  };

  return (
    <div className="badges">
      {BADGES.map(({ key, Icon, small, name }) => (
        <a key={key} href="#waitlist" className="badge" onClick={handle}>
          <Icon size={20} />
          <span>
            <small>{small}</small>
            <b>{name}</b>
          </span>
        </a>
      ))}
      <span className="badges__msg" role="status">
        {msg}
      </span>
    </div>
  );
}
