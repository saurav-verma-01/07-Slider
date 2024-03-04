import React, { useEffect, useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ people }) => {
  const [showIndex, setShowIndex] = useState(3);

  const nextSlide = () => {
    setShowIndex((prev) => (prev + 1) % people.length);
  };

  const prevSlide = () => {
    setShowIndex((old) => (old - 1 + people.length) % people.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [showIndex]);
  return (
    <div className="carousel">
      {people.map((person, personIndex) => {
        const { id, image, name, quote, title } = person;
        return (
          <div
            className="slide"
            key={id}
            style={{
              transform: `translateX(${100 * (personIndex - showIndex)}%)`,
              opacity: personIndex === showIndex ? 1 : 0,
              visibility: personIndex === showIndex ? "visible" : "hidden",
            }}
          >
            <div className="slider-img-container">
              <img src={image} alt={name} className="slider-img" />
            </div>
            <p className="slider-name">{name}</p>
            <p className="slider-title">{title}</p>
            <p className="slider-quote">{quote}</p>
            <FaQuoteRight className="quote-icon" />
          </div>
        );
      })}

      <button className="prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
