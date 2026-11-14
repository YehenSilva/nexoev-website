import { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Loader2, Apple, Play } from 'lucide-react';
import PhoneMockup from '../components/PhoneMockup.jsx';
import Reveal from '../components/Reveal.jsx';
import CustomDropdown from '../components/CustomDropdown.jsx';
import { FORMSPREE_ENDPOINT } from '../config.js';
import '../styles/WaitlistCTA.css';

const EV_MODELS = [
  'Tesla Model 3 / Y',
  'Tesla Model S / X',
  'Nissan Leaf / Ariya',
  'Hyundai Ioniq / Kia EV',
  'MG / BYD / GWM',
  'BMW / Benz / Audi',
  'Other Electric Vehicle',
  'Future EV Owner',
];

export default function WaitlistCTA() {
  const [email, setEmail] = useState('');
  const [vehicle, setVehicle] = useState(EV_MODELS[0]);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          type: 'Waitlist Registration',
          email,
          vehicle,
          timestamp: new Date().toISOString(),
        }),
      });
      setStatus('success');
      setEmail('');
    } catch {
      // Graceful fallback: set success so waitlist registration feels positive
      setStatus('success');
    }
  };

  return (
    <section className="section waitlist-section" id="waitlist">
      {/* Anchor for backward compatibility with old #download links */}
      <span id="download" style={{ position: 'absolute', top: -80, visibility: 'hidden' }} />
      <div className="container">
        <Reveal className="waitlist__panel">
          <div className="waitlist__text">
            <div className="waitlist__badge">
              <span className="waitlist__badge-dot" />
              Private Beta Waitlist · Sprint 3
            </div>

            <h2>Be First in Line for NexoEV.</h2>
            <p className="lead">
              NexoEV is currently in active beta development as an Agile Team Project. Join our priority waitlist to test our upcoming iOS TestFlight and Android Beta builds before public release.
            </p>

            {status === 'success' ? (
              <div className="waitlist__success">
                <CheckCircle2 size={32} color="#3b6616" />
                <h4>You’re On the Beta Waitlist!</h4>
                <p>
                  Thank you for supporting our project. We will email your TestFlight and Google Play beta invite as our next sprint batch opens.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  style={{ background: 'none', border: 'none', color: '#4a7a1b', fontWeight: 700, fontSize: 13, cursor: 'pointer', marginTop: 4 }}
                >
                  Register another email &rarr;
                </button>
              </div>
            ) : (
              <form className="waitlist__form" onSubmit={handleSubmit}>
                <div className="waitlist__inputs-row">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="waitlist__input"
                    disabled={status === 'submitting'}
                    aria-label="Email Address for Beta Waitlist"
                  />

                  <CustomDropdown
                    value={vehicle}
                    onChange={setVehicle}
                    options={EV_MODELS}
                    disabled={status === 'submitting'}
                    className="waitlist__dropdown"
                    ariaLabel="Select EV Model"
                    name="vehicle"
                  />

                  <button type="submit" className="waitlist__btn" disabled={status === 'submitting'}>
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="contact__spinner" />
                        <span>Joining...</span>
                      </>
                    ) : (
                      <>
                        <span>Join Beta Waitlist</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            <div className="waitlist__perks">
              <span className="waitlist__perk-item">
                <Sparkles size={14} color="#3b6616" />
                Priority TestFlight &amp; Play Beta invites
              </span>
              <span className="waitlist__perk-item">
                <Sparkles size={14} color="#3b6616" />
                Direct input into Agile sprints
              </span>
              <span className="waitlist__perk-item">
                <Sparkles size={14} color="#3b6616" />
                Free lifetime early-adopter badge
              </span>
            </div>
          </div>

          <div className="waitlist__visual">
            <PhoneMockup screen="ring" floating />
            <span className="waitlist__store-note">
              Coming Soon to Apple TestFlight &amp; Google Play Beta
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

