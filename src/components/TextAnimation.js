import React, { useState, useEffect } from "react";
import '../styles/TextAnimation.css';

const TextAnimation = (par) => {
  const words = ["Hi I'm Favour", "I'm from Ghana", 'Skills...', 'ReactJS', 'Java'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const wordFlick = setInterval(() => {
      if (forwards) {
        if (offset >= words[currentWordIndex].length) {
          setSkipCount(prevCount => prevCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
          setOffset(0);
        }
      }
      if (skipCount === 0) {
        if (forwards) {
          setOffset(prevOffset => prevOffset + 1);
        } else {
          setOffset(prevOffset => prevOffset - 1);
        }
      }
    }, speed);

    return () => clearInterval(wordFlick);
  }, [currentWordIndex, offset, forwards, skipCount, words]);

  let smallScreen;

  if(par === "text-animation"){
    smallScreen = false;
  }else{
    smallScreen = true;
  }
  return (
    <div className={!smallScreen ? "header-heading-container" : "header-heading-container-small"}>
        <div className={!smallScreen ? "header-heading" : "header-heading-small"}>{words[currentWordIndex].substr(0, offset)}</div>
    </div>
  );
};

export default TextAnimation;
