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

  const handleScroll = useCallback(() => {
    console.log("scollY", Math.ceil(window.scrollY));
    console.log("value", document.body.clientHeight - window.innerHeight);
    const value = Math.ceil(window.scrollY);
    const total = document.body.clientHeight - window.innerHeight;
    const percentage = (value / total) * 100;
    console.log("%", percentage);
    setPercentage(Math.max(5, percentage));
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
