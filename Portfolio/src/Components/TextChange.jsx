import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Heelo, I'm Senthilnayagan",
    "Hello, I'm Senthilnayagan",
    "Hello, I'm Senthilnayagan",
  ];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  useEffect(() => {
    if (currentText.includes("Senthilnayagan")) {
      const interval = setInterval(() => {
        setCurrentLetterIndex((prev) => {
          if (prev < "Senthilnayagan".length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 100); // Adjust the interval time as needed
      return () => clearInterval(interval);
    }
  }, [currentText]);

  const getStyledText = (text) => {
    const parts = text.split("Senthilnayagan");
    const targetWord = "Senthilnayagan";

    return (
      <>
        {parts[0]}
        <span>
          {targetWord.split("").map((char, index) => (
            <span
              key={index}
              style={{ color: index < currentLetterIndex ? "white" : "green" }}
            >
              {char}
            </span>
          ))}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="transition ease duration-100">
      {getStyledText(currentText)}
    </div>
  );
};

export default TextChange;
