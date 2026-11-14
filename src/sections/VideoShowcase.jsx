import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import '../styles/VideoShowcase.css';

export default function VideoShowcase() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:18');

  // Auto-play muted when scrolled into view, pause when scrolled away
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setIsPlaying(true)).catch(() => {});
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const current = video.currentTime;
    const dur = video.duration || 18.85;
    setProgress((current / dur) * 100);
    setCurrentTime(formatTime(current));
    setDuration(formatTime(dur));
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * (video.duration || 18.85);
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <section className="section section--tint video-showcase-section" id="demo">
      {/* Anchor for backward compatibility with #showcase */}
      <span id="showcase" style={{ position: 'absolute', top: -80, visibility: 'hidden' }} />
      <div className="container">
        <Reveal style={{ textAlign: 'center', marginBottom: 44 }}>
          <div className="video-showcase__badge">
            <Sparkles size={14} color="#3b6616" />
            18-Second Product Walkthrough
          </div>
          <h2 style={{ maxWidth: 840, margin: '0 auto 16px' }}>
            Experience NexoEV in Motion.
          </h2>
          <p className="lead" style={{ margin: '0 auto', maxWidth: 640 }}>
            Watch how our companion app simplifies your driving decisions, predicts battery arrival percentages, and guides you to trusted chargers.
          </p>
        </Reveal>

        <Reveal className="video-showcase__player-container" ref={containerRef}>
          <div className="video-showcase__frame" onClick={togglePlay}>
            <video
              ref={videoRef}
              src="/Main_Edit_with_audio.mp4"
              poster="/video-poster.jpg"
              preload="metadata"
              playsInline
              muted={isMuted}
              loop
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="video-showcase__video"
              aria-label="NexoEV Promotional Video Walkthrough"
            />

            {/* Big center play button overlay when paused */}
            {!isPlaying && (
              <div className="video-showcase__overlay">
                <button
                  type="button"
                  className="video-showcase__big-play-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  aria-label="Play Video"
                >
                  <Play size={28} fill="#111111" />
                </button>
                <span className="video-showcase__overlay-text">Click to Play with Sound</span>
              </div>
            )}

            {/* Custom Bottom Controls Bar */}
            <div
              className="video-showcase__controls"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Progress Scrubber */}
              <div
                className="video-showcase__scrubber-track"
                onClick={handleSeek}
                role="slider"
                aria-valuenow={progress}
                aria-label="Video scrubber"
              >
                <div
                  className="video-showcase__scrubber-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="video-showcase__controls-row">
                <div className="video-showcase__controls-left">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="video-showcase__ctrl-btn"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} fill="#ffffff" />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="video-showcase__ctrl-btn"
                    aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>

                  <span className="video-showcase__time">
                    {currentTime} <span style={{ opacity: 0.6 }}>/</span> {duration}
                  </span>
                </div>

                <div className="video-showcase__controls-right">
                  <span className="video-showcase__hd-badge">1080p HD</span>
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="video-showcase__ctrl-btn"
                    aria-label="Toggle Fullscreen"
                  >
                    <Maximize2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Highlights Strip */}
          <div className="video-showcase__highlights">
            <div className="video-showcase__highlight-item">
              <Zap size={18} color="#4a7a1b" />
              <div>
                <strong>Intelligent Telemetry</strong>
                <span>Instant usable capacity &amp; baseline Wh/km</span>
              </div>
            </div>
            <div className="video-showcase__highlight-item">
              <ShieldCheck size={18} color="#4a7a1b" />
              <div>
                <strong>Arrival Buffer</strong>
                <span>Calculated arrival reserve confidence</span>
              </div>
            </div>
            <div className="video-showcase__highlight-item">
              <Sparkles size={18} color="#4a7a1b" />
              <div>
                <strong>Agile Sprints</strong>
                <span>Continuous beta feature testing</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

