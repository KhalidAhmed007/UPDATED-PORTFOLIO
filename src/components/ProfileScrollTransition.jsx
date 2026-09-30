import React, { useEffect, useRef } from 'react';

const PHOTO_SRC = '/khaleed.jpg';
const PHOTO_ALT = 'Mohammed Khaleed Ahmed';
const TRANSITION_PX = 320;

function clamp(v, lo, hi) { return Math.min(Math.max(v, lo), hi); }
function lerp(a, b, t) { return a + (b - a) * t; }
// Ease-in-out cubic for smooth feel
function ease(t) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2; }

/**
 * TravellingPhoto
 *
 * The ONE profile image for the entire portfolio.
 * Mounted once at App root level.
 * Travels between two invisible anchor divs:
 *   #profile-hero-anchor  (in the hero, reserves the hero slot)
 *   #profile-nav-anchor   (in the navbar, marks the destination slot)
 *
 * Everything is done with direct DOM manipulation inside a rAF loop —
 * zero React state updates per frame, zero re-renders.
 */
export function TravellingPhoto() {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Just show it statically in hero position
      const heroEl = document.getElementById('profile-hero-anchor');
      if (heroEl) {
        const r = heroEl.getBoundingClientRect();
        img.style.width = r.width + 'px';
        img.style.height = r.height + 'px';
        img.style.transform = `translate3d(${r.left}px, ${r.top + window.scrollY}px, 0)`;
        img.style.position = 'absolute';
        img.style.opacity = '1';
      }
      return;
    }

    let rafId = null;

    function frame() {
      const heroEl = document.getElementById('profile-hero-anchor');
      const navEl  = document.getElementById('profile-nav-anchor');
      if (!heroEl || !navEl) {
        rafId = requestAnimationFrame(frame);
        return;
      }

      const scrollY = window.scrollY;
      const rawP = clamp(scrollY / TRANSITION_PX, 0, 1);
      const p    = ease(rawP);

      // Both anchors are in-flow elements. getBoundingClientRect gives viewport coords.
      const hR = heroEl.getBoundingClientRect();
      const nR = navEl.getBoundingClientRect();

      // Interpolate size
      const size = lerp(hR.width, nR.width, p);

      // Interpolate center position (viewport-relative)
      const hCX = hR.left + hR.width  / 2;
      const hCY = hR.top  + hR.height / 2;
      const nCX = nR.left + nR.width  / 2;
      const nCY = nR.top  + nR.height / 2;

      const cx = lerp(hCX, nCX, p);
      const cy = lerp(hCY, nCY, p);

      // position: fixed element, so viewport coords are what we want for translate
      img.style.width     = size + 'px';
      img.style.height    = size + 'px';
      img.style.transform = `translate3d(${cx - size/2}px, ${cy - size/2}px, 0)`;
      img.style.opacity   = '1';
      img.style.zIndex    = rawP > 0.85 ? '51' : '45';

      // Glow + border — large and indigo-glowing in hero, compact in navbar
      const glow   = lerp(0.45, 0,    p);
      const shadow = lerp(0.20, 0.06, p);
      const bAlpha = lerp(0.30, 0.65, p);
      const bWidth = lerp(3,    2,    p);
      img.style.boxShadow = [
        `0 0 ${lerp(60, 0,  p)}px rgba(99,102,241,${glow.toFixed(2)})`,
        `0 ${lerp(12,2,p).toFixed(1)}px ${lerp(32,8,p).toFixed(1)}px rgba(0,0,0,${shadow.toFixed(2)})`,
      ].join(', ');
      img.style.outline = `${bWidth}px solid rgba(99,102,241,${bAlpha.toFixed(2)})`;

      // KA box: fade it out as the photo arrives
      const kaEl = document.getElementById('navbar-ka-box');
      if (kaEl) kaEl.style.opacity = String(1 - rawP);

      rafId = requestAnimationFrame(frame);
    }

    // Small delay so DOM is settled on first paint
    const t = setTimeout(() => { rafId = requestAnimationFrame(frame); }, 60);

    return () => {
      clearTimeout(t);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={imgRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        borderRadius: '50%',
        overflow: 'hidden',
        pointerEvents: 'none',
        willChange: 'transform, width, height',
        opacity: 0,           // invisible until first rAF fires
        zIndex: 45,
        outlineOffset: '-1px',
      }}
    >
      <img
        src={PHOTO_SRC}
        alt={PHOTO_ALT}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
          userSelect: 'none',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
        draggable={false}
      />
    </div>
  );
}

/**
 * HeroPhotoAnchor
 *
 * Invisible placeholder in the hero section.
 * Reserves the correct layout space so hero text is never disrupted.
 * The TravellingPhoto sits exactly on top of this at scrollY=0.
 *
 * On prefers-reduced-motion: renders the actual visible photo (no animation).
 */
export function HeroPhotoAnchor({ size = 200 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    // On reduced motion, make this placeholder visible so user still sees the photo
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ref.current.style.visibility = 'visible';
      ref.current.innerHTML = `
        <img
          src="${PHOTO_SRC}"
          alt="${PHOTO_ALT}"
          style="width:100%;height:100%;object-fit:cover;object-position:center top;border-radius:50%;display:block;"
          draggable="false"
        />
      `;
    }
  }, []);

  return (
    <div
      id="profile-hero-anchor"
      ref={ref}
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        flexShrink: 0,
        // Invisible — TravellingPhoto covers it exactly
        visibility: 'hidden',
      }}
    />
  );
}
