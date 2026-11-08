import SCREENS from './AppScreens.jsx';
import '../styles/PhoneMockup.css';

export default function PhoneMockup({ screen = 'home', floating = false, delay = 0, className = '' }) {
  const Screen = SCREENS[screen];
  return (
    <div className={`phone ${floating ? 'phone--float' : ''} ${className}`} style={{ animationDelay: `${delay}s` }} role="img" aria-label={`NexoEV app ${screen} screen (sample data)`}>
      <div className="phone__screen"><Screen /></div>
    </div>
  );
}
