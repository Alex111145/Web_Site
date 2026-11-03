import { useEffect, useMemo, useRef, useState } from "react";
import "./Marquee.css";

// True when the user prefers reduced motion (rows become scrollable strips)
const useReducedMotion = () => {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
};

const DRAG_START_PX = 8; // horizontal movement before a press becomes a swipe
const MAX_FLING = 3; // px/ms

// Lets the user drag a row sideways (finger or mouse). The CSS animation keeps
// running: dragging just moves its currentTime, so the loop stays seamless.
// dir: -1 for rows moving left, 1 for rows moving right.
const attachSwipe = (row, durationMs, dir) => {
  const track = row.firstElementChild;
  let pointerId = null;
  let startX = 0, startY = 0, lastX = 0, lastT = 0, velocity = 0;
  let dragging = false, dragged = false, glideFrame = 0;

  // move the row content by dx pixels (positive = to the right)
  const shift = (dx) => {
    const anim = track.getAnimations?.()[0];
    const half = track.offsetWidth / 2;
    if (!anim || !half || anim.currentTime == null) return;
    const dt = ((dir < 0 ? -dx : dx) / half) * durationMs;
    anim.currentTime = (((anim.currentTime + dt) % durationMs) + durationMs) % durationMs;
  };

  const stopGlide = () => {
    cancelAnimationFrame(glideFrame);
    glideFrame = 0;
  };

  const endDrag = () => {
    pointerId = null;
    dragging = false;
    row.classList.remove("is-dragging");
  };

  const onDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    stopGlide();
    pointerId = e.pointerId;
    startX = lastX = e.clientX;
    startY = e.clientY;
    lastT = e.timeStamp;
    velocity = 0;
    dragging = false;
    dragged = false;
  };

  const onMove = (e) => {
    if (e.pointerId !== pointerId) return;
    if (!dragging) {
      const dx = Math.abs(e.clientX - startX);
      const dy = Math.abs(e.clientY - startY);
      if (dy > DRAG_START_PX && dy > dx) return endDrag(); // vertical: let the page scroll
      if (dx < DRAG_START_PX || dx < dy) return;
      dragging = dragged = true;
      row.setPointerCapture(pointerId);
      row.classList.add("is-dragging");
    }
    const dx = e.clientX - lastX;
    const dt = Math.max(e.timeStamp - lastT, 1);
    velocity = 0.8 * (dx / dt) + 0.2 * velocity;
    shift(dx);
    lastX = e.clientX;
    lastT = e.timeStamp;
  };

  const onUp = (e) => {
    if (e.pointerId !== pointerId) return;
    const wasDragging = dragging;
    endDrag();
    if (!wasDragging || e.timeStamp - lastT > 80) return; // finger held still: no fling
    let v = Math.max(-MAX_FLING, Math.min(MAX_FLING, velocity));
    let prev = performance.now();
    const glide = (now) => {
      const dt = now - prev;
      prev = now;
      shift(v * dt);
      v *= Math.pow(0.94, dt / 16);
      glideFrame = Math.abs(v) > 0.02 ? requestAnimationFrame(glide) : 0;
    };
    if (Math.abs(v) > 0.05) glideFrame = requestAnimationFrame(glide);
  };

  const onCancel = (e) => {
    if (e.pointerId === pointerId) endDrag();
  };

  // a swipe that ends on a card must not open it
  const onClick = (e) => {
    if (!dragged) return;
    dragged = false;
    e.preventDefault();
    e.stopPropagation();
  };

  const onDragStart = (e) => e.preventDefault(); // no native image drag with the mouse

  row.addEventListener("pointerdown", onDown);
  row.addEventListener("pointermove", onMove);
  row.addEventListener("pointerup", onUp);
  row.addEventListener("pointercancel", onCancel);
  row.addEventListener("click", onClick, true);
  row.addEventListener("dragstart", onDragStart);
  return () => {
    stopGlide();
    row.removeEventListener("pointerdown", onDown);
    row.removeEventListener("pointermove", onMove);
    row.removeEventListener("pointerup", onUp);
    row.removeEventListener("pointercancel", onCancel);
    row.removeEventListener("click", onClick, true);
    row.removeEventListener("dragstart", onDragStart);
  };
};

// renderItem(item, { isClone }): clones are aria-hidden, cards should set tabIndex -1
// swipe: rows can be dragged sideways with a finger or the mouse
const Marquee = ({ items, rows, renderItem, secondsPerItem = 4, itemWidth = "18rem", fullRows = false, swipe = false }) => {
  const reduced = useReducedMotion();
  const rowRefs = useRef([]);

  const lines = useMemo(() => {
    const start = Math.floor(Math.random() * items.length);
    const rotated = [...items.slice(start), ...items.slice(0, start)];
    const result = Array.from({ length: rows }, () => []);
    if (fullRows) {
      // every row holds all items, each row in a different order (step through
      // the list with a different stride coprime to its length), so rows never
      // show the same sequence side by side
      const n = rotated.length;
      const gcd = (a, b) => (b ? gcd(b, a % b) : a);
      const strides = [];
      for (let k = 1; k < Math.max(n, 2) && strides.length < rows; k++) if (gcd(k, n) === 1) strides.push(k);
      result.forEach((line, r) => {
        const stride = strides[r % strides.length] || 1;
        for (let j = 0; j < n; j++) line.push(rotated[(r * 2 + j * stride) % n]);
      });
    } else {
      rotated.forEach((item, i) => result[i % rows].push(item));
    }
    return result
      .filter((line) => line.length > 0)
      .map((line) => {
        const duration = Math.max(line.length, 4) * secondsPerItem;
        return { line, duration, delay: -Math.random() * duration };
      });
  }, [items, rows, secondsPerItem, fullRows]);

  useEffect(() => {
    if (!swipe || reduced) return;
    const cleanups = lines.map(({ duration }, i) => {
      const row = rowRefs.current[i];
      return row ? attachSwipe(row, duration * 1000, i % 2 ? 1 : -1) : null;
    });
    return () => cleanups.forEach((cleanup) => cleanup?.());
  }, [swipe, reduced, lines]);

  return (
    <div className="marquee" style={{ "--marquee-item-width": `min(${itemWidth}, 82vw)` }}>
      {lines.map(({ line, duration, delay }, i) => {
        const track = reduced ? line : [...line, ...line];
        return (
          <div
            key={i}
            ref={(el) => (rowRefs.current[i] = el)}
            className={`marquee-row ${reduced ? "is-static" : ""} ${swipe && !reduced ? "is-swipe" : ""}`}
          >
            <div
              className={`marquee-track ${i % 2 ? "to-right" : "to-left"}`}
              style={reduced ? undefined : { animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
            >
              {track.map((item, j) => {
                const isClone = j >= line.length;
                return (
                  <div key={j} className="marquee-item" aria-hidden={isClone || undefined}>
                    {renderItem(item, { isClone })}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Marquee;
