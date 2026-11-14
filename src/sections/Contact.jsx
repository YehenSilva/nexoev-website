import { useState } from 'react';
import { Mail, Clock, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2, Share2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';
import CustomDropdown from '../components/CustomDropdown.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT } from '../config.js';
import '../styles/Contact.css';

const SUBJECT_OPTIONS = [
  'General Question',
  'Battery & Range Estimation Feedback',
  'Suggest a Charging Station',
  'Partnership or Fleet Inquiry',
  'Technical Support / Bug Report',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: SUBJECT_OPTIONS[0],
    message: '',
    _gotcha: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent bot submission via honeypot
    if (formData._gotcha) {
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: SUBJECT_OPTIONS[0],
          message: '',
          _gotcha: '',
        });
      } else {
        setStatus('error');
        if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err) => err.message).join(', '));
        } else if (data.error) {
          setErrorMessage(data.error);
        } else {
          setErrorMessage('Unable to send your message at this time. Please verify your details or email us directly.');
        }
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network connection error. Please check your internet connection or email us directly.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section className="section section--tint contact" id="contact">
      <div className="container">
        <SectionHeading
          title="Get in Touch With NexoEV."
          text="Have questions about our battery predictions, want to suggest charging locations, or explore EV partnerships? We'd love to hear from you."
        />

        <div className="contact__grid">
          {/* Left Column: Info & Context */}
          <Reveal className="contact__info">
            <div className="contact__badge">
              <span className="contact__badge-pulse" />
              NexoEV Support Team
            </div>

            <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', lineHeight: 1.2 }}>
              Let’s Make Every <span className="hl">EV Journey</span> Smarter.
            </h3>

            <p className="lead" style={{ fontSize: '16px', color: 'var(--tx2)' }}>
              Whether you are an electric vehicle driver testing our beta calculator, an operator with charger data, or an enthusiast with ideas, your feedback directly shapes NexoEV.
            </p>

            <div className="contact__cards">
              <div className="contact__card">
                <div className="contact__card-icon">
                  <Mail size={22} />
                </div>
                <div className="contact__card-body">
                  <h4>Email Us Directly</h4>
                  <p>Send an email anytime for inquiries or support.</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="contact__card-link">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="contact__card">
                <div className="contact__card-icon">
                  <Clock size={22} />
                </div>
                <div className="contact__card-body">
                  <h4>Quick Turnaround</h4>
                  <p>Our team usually reviews and responds to messages within 24–48 hours.</p>
                </div>
              </div>

              <div className="contact__card">
                <div className="contact__card-icon">
                  <MessageSquare size={22} />
                </div>
                <div className="contact__card-body">
                  <h4>Community & Feature Requests</h4>
                  <p>Have an idea for new route optimizations or EV vehicle profiles? We're all ears.</p>
                </div>
              </div>

              <div className="contact__card">
                <div className="contact__card-icon">
                  <Share2 size={22} />
                </div>
                <div className="contact__card-body">
                  <h4>Follow Our Socials</h4>
                  <p>Get instant sneak peeks, beta announcements, and driver discussions.</p>
                  <div style={{ marginTop: 12 }}>
                    <SocialLinks variant="icons" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Formspree Form */}
          <Reveal className="contact__form-panel" delay={120}>
            {status === 'success' ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <CheckCircle2 size={36} />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for reaching out to NexoEV. We have received your message and will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  className="btn btn--dark"
                  onClick={handleReset}
                  style={{ marginTop: 12 }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="contact__form-header">
                  <h3>Send a Message</h3>
                  <p>Fill out the form below and we’ll get back to your inbox.</p>
                </div>

                {status === 'error' && (
                  <div className="contact__alert contact__alert--error">
                    <AlertCircle size={20} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <strong>Failed to send message:</strong> {errorMessage}
                    </div>
                  </div>
                )}

                <form className="contact__form" onSubmit={handleSubmit} noValidate>
                  {/* Spam prevention honeypot */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div className="contact__field-row">
                    <div className="contact__field">
                      <label htmlFor="contact-name" className="contact__label">
                        Your Name <span>*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact__input"
                        disabled={status === 'submitting'}
                      />
                    </div>

                    <div className="contact__field">
                      <label htmlFor="contact-email" className="contact__label">
                        Email Address <span>*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact__input"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="contact__field">
                    <label htmlFor="contact-subject" className="contact__label">
                      Topic / Subject
                    </label>
                    <CustomDropdown
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(val) => setFormData((prev) => ({ ...prev, subject: val }))}
                      options={SUBJECT_OPTIONS}
                      disabled={status === 'submitting'}
                      ariaLabel="Topic / Subject"
                    />
                  </div>

                  <div className="contact__field">
                    <label htmlFor="contact-message" className="contact__label">
                      Message <span>*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us what you're thinking, ask a question, or share suggestions..."
                      value={formData.message}
                      onChange={handleChange}
                      className="contact__textarea"
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn--dark contact__submit"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={18} className="contact__spinner" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="contact__footer-note">
                    Powered by Formspree. Your information is protected and used only to respond to your inquiry.
                  </p>
                </form>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

