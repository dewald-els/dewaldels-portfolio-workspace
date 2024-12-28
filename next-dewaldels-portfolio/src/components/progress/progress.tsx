"use client";

import { useCallback, useEffect, useState } from "react";

const getProgressClass = (percentage: number) => {
  if (percentage >= 98) {
    return "is-success";
  } else if (percentage > 45) {
    return "is-primary";
  } else if (percentage > 15) {
    return "is-warning";
  } else {
    return "is-error";
  }
};

const Progress = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateScrollPercentage(lastKnownScrollPosition);
          ticking = false;
        });

        ticking = true;
      }
    };

    function calculateScrollPercentage(scrollPos: number) {
      const value = Math.ceil(scrollPos);
      const total = document.body.clientHeight - window.innerHeight;
      const percentage = Math.round((value / total) * 100);
      console.log("%", percentage);
      setPercentage(Math.max(5, percentage));
    }

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const progressClass = getProgressClass(percentage);

  return (
    <div className="fixed bottom-0 w-full left-0 right-0 p-4">
      {percentage >= 100 && (
        <section className="message-list">
          <section className="message -left">
            <i className="nes-icon trophy is-large top-6"></i>
            <div className="nes-balloon from-left">
              <p>
                <span className="nes-text is-success font-bold">Wow!</span> You
                made it to the bottom!
              </p>
            </div>
          </section>
        </section>
      )}
      <progress
        className={`nes-progress ${progressClass}`}
        style={{
          width: "calc(100% - 8px)",
        }}
        value={percentage}
        max="100"
      ></progress>
    </div>
  );
};

export default Progress;
