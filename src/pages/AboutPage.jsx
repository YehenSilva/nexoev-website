import { useState } from 'react';
import { ArrowLeft, Users, Linkedin, Github, Mail, Zap, Route, ShieldCheck, HeartHandshake } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';
import ValidatedBy from '../components/ValidatedBy.jsx';

import SocialLinks from '../components/SocialLinks.jsx';
import { TEAM_INFO } from '../data/team.js';
import '../styles/AboutPage.css';

export default function AboutPage({ onNavigate }) {
  const [groupImgError, setGroupImgError] = useState(false);
  const [avatarErrors, setAvatarErrors] = useState({});

  const handleAvatarError = (id) => {
    setAvatarErrors((prev) => ({ ...prev, [id]: true }));
  };

  const getInitials = (name) => {
    if (!name) return 'EV';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return parts[0].slice(0, 2).toUpperCase();
  };

  const handleBack = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/');
    }
  };

  return (
    <div className="about-page">
      <div className="container">
        {/* Top Back Navigation */}
        <div className="about-page__top-nav">
          <a href="/" onClick={handleBack} className="about-page__back-link">
            <ArrowLeft size={16} />
            Back to NexoEV Home
          </a>
        </div>

        {/* Hero Header */}
        <Reveal className="about-page__hero">
          <div className="about-page__badge">
            <Users size={15} />
            {TEAM_INFO.tagline}
          </div>
          <h1>
            Driving The Electric Transition.{' '}
            <span className="hl">Together.</span>
          </h1>
          <p>{TEAM_INFO.mission}</p>
        </Reveal>

        {/* Group Photo Section */}
        <Reveal className="about-page__group-photo-card" delay={100}>
          <div className="about-page__group-photo-wrapper">
            {!groupImgError ? (
              <img
                src={TEAM_INFO.groupPhoto}
                alt={TEAM_INFO.groupPhotoCaption}
                className="about-page__group-img"
                onError={() => setGroupImgError(true)}
              />
            ) : (
              <div className="about-page__photo-fallback">
                <div className="about-page__photo-fallback-icon">
                  <Users size={32} />
                </div>
                <h3>{TEAM_INFO.projectTitle}</h3>
                <p>
                  Our team brings together software engineers, UX designers, and EV enthusiasts dedicated to making range anxiety a thing of the past.
                </p>
              </div>
            )}
          </div>
          <div className="about-page__photo-caption">
            <span className="about-page__caption-text">{TEAM_INFO.groupPhotoCaption}</span>
            <span className="about-page__caption-tag">Core Engineering Team</span>
          </div>
        </Reveal>

        {/* Project Pillars / Values */}
        <div className="about-page__values">
          <Reveal className="about-page__value-card" delay={50}>
            <div className="about-page__value-icon">
              <Zap size={22} />
            </div>
            <h3>Adaptive Range Engine</h3>
            <p>
              Dynamically accounts for individual driving behavior, mountain elevation, passenger load, and air conditioning draw. Rigorously tested on Sri Lankan routes with 97.7% arrival battery accuracy.
            </p>
          </Reveal>

          <Reveal className="about-page__value-card" delay={100}>
            <div className="about-page__value-icon">
              <Route size={22} />
            </div>
            <h3>Central Highland Hazard Intel</h3>
            <p>
              Models steep elevation ascents while proactively monitoring official landslide alerts and weather notices across critical corridors including Kadugannawa, Ramboda, Nuwara Eliya, and Ella.
            </p>
          </Reveal>

          <Reveal className="about-page__value-card" delay={150}>
            <div className="about-page__value-icon">
              <ShieldCheck size={22} />
            </div>
            <h3>Charger Trust &amp; Offline Packs</h3>
            <p>
              Community-verified charging reliability scores with transparent data reporting, paired with offline journey packs for signal dead zones and zero extra hardware dongles required.
            </p>
          </Reveal>
        </div>

        {/* Institutional Backing & Academic Validation */}
        <ValidatedBy embedded />

        {/* Team Members Section */}
        <div className="about-page__team-section">
          <Reveal className="about-page__team-header">
            <h2>The Minds Behind NexoEV.</h2>
            <p>
              Connect with our team members on LinkedIn, check out our project code on GitHub, or drop us an email.
            </p>
          </Reveal>

          <div className="about-page__members-grid">
            {TEAM_INFO.members.map((member, idx) => (
              <Reveal key={member.id} className="about-page__member-card" delay={idx * 80}>
                <div className="about-page__avatar-wrapper">
                  {!avatarErrors[member.id] ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="about-page__avatar-img"
                      onError={() => handleAvatarError(member.id)}
                    />
                  ) : (
                    <div className="about-page__avatar-fallback">
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>

                <h3 className="about-page__member-name">{member.name}</h3>
                <span className="about-page__member-role">{member.role}</span>
                <p className="about-page__member-bio">{member.bio}</p>

                <div className="about-page__socials">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-page__social-btn linkedin"
                      title={`${member.name}'s LinkedIn`}
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}

                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-page__social-btn github"
                      title={`${member.name}'s GitHub`}
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}

                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="about-page__social-btn email"
                      title={`Email ${member.name}`}
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <Reveal className="about-page__cta">
          <div className="contact__badge" style={{ margin: '0 auto' }}>
            <HeartHandshake size={14} />
            Get In Touch
          </div>
          <h3>Interested in Collaborating or Sharing Feedback?</h3>
          <p>
            Whether you have suggestions for our trip estimation features or want to collaborate with our engineering team, we’d love to connect.
          </p>
          <div className="about-page__cta-actions">
            <Button
              href="/#waitlist"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/#waitlist');
                }
              }}
            >
              Join Beta Waitlist &rarr;
            </Button>
            <Button
              href="/#contact"
              variant="ghost"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/#contact');
                }
              }}
            >
              Contact Our Team
            </Button>
          </div>

          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--tx2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Follow the Project
            </span>
            <SocialLinks variant="pills" showHandles />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

