import { useEffect, useMemo, useState } from "react";
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

// renderItem(item, { isClone }): clones are aria-hidden, cards should set tabIndex -1
const Marquee = ({ items, rows, renderItem, secondsPerItem = 4, itemWidth = "18rem", fullRows = false }) => {
  const reduced = useReducedMotion();

  const lines = useMemo(() => {
    const start = Math.floor(Math.random() * items.length);
    const rotated = [...items.slice(start), ...items.slice(0, start)];
    const result = Array.from({ length: rows }, () => []);
    if (fullRows) {
      const shift = Math.floor(items.length / rows);
      result.forEach((line, r) => line.push(...rotated.slice(r * shift), ...rotated.slice(0, r * shift)));
    } else {
      rotated.forEach((item, i) => result[i % rows].push(item));
    }
    const sharedPhase = Math.random();
    return result
      .filter((line) => line.length > 0)
      .map((line) => {
        const duration = Math.max(line.length, 4) * secondsPerItem;
        return { line, duration, delay: -(fullRows ? sharedPhase : Math.random()) * duration };
      });
  }, [items, rows, secondsPerItem, fullRows]);

  return (
    <div className="marquee" style={{ "--marquee-item-width": `min(${itemWidth}, 82vw)` }}>
      {lines.map(({ line, duration, delay }, i) => {
        const track = reduced ? line : [...line, ...line];
        return (
          <div key={i} className={`marquee-row ${reduced ? "is-static" : ""}`}>
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
