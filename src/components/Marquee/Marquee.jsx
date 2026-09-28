import { useMemo } from "react";
import "./Marquee.css";

const Marquee = ({ items, rows, renderItem, secondsPerItem = 4, itemWidth = "18rem", fullRows = false }) => {
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
    <div className="marquee flex flex-col gap-4" style={{ "--marquee-item-width": itemWidth }}>
      {lines.map(({ line, duration, delay }, i) => (
        <div key={i} className="marquee-row">
          <div
            className="marquee-track"
            style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
          >
            {[...line, ...line].map((item, j) => (
              <div key={j} className="marquee-item" aria-hidden={j >= line.length}>
                {renderItem(item)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marquee;
