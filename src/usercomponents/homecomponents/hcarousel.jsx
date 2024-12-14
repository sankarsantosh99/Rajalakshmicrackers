import React, { useEffect, useState } from "react";
import "./hcarousel.css";

function Hcarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "/assets/greenleaves.jpg",
    "/assets/greenleaves.jpg",
    "/assets/greenleaves.jpg",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="carousel">
        <div
          className="carousel-slides"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="prev" onClick={handlePrev}>
          ❮
        </button>
        <button className="next" onClick={handleNext}>
          ❯
        </button>

        <div className="indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hcarousel;
