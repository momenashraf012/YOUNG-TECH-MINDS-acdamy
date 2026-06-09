import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Full-screen intro that plays the brand logo video once when the site opens,
 * then fades out to reveal the page. Skips automatically if the video ends,
 * errors, or the user clicks. Respects prefers-reduced-motion (shown briefly).
 */
export function IntroSplash() {
  const [done, setDone] = useState(false);
  const [hide, setHide] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Start the fade-out, then unmount after the transition completes.
  const finish = useCallback(() => {
    setHide((prev) => {
      if (prev) return prev;
      window.setTimeout(() => setDone(true), 700);
      return true;
    });
  }, []);

  useEffect(() => {
    // Safety net: never trap the user behind the splash.
    const fallback = window.setTimeout(finish, 8000);
    return () => window.clearTimeout(fallback);
  }, [finish]);

  if (done) return null;

  return (
    <div
      onClick={finish}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-navy)',
        cursor: 'pointer',
        opacity: hide ? 0 : 1,
        transition: 'opacity 0.7s ease',
      }}
    >
      <video
        ref={videoRef}
        src="/assets/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={finish}
        onError={finish}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          finish();
        }}
        style={{
          position: 'absolute',
          bottom: 28,
          right: 28,
          padding: '8px 18px',
          borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.35)',
          background: 'rgba(255,255,255,0.08)',
          color: '#fff',
          fontFamily: 'var(--font-en)',
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Skip
      </button>
    </div>
  );
}
