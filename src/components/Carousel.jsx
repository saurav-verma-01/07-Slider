import React from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ people }) => {
  return (
    <div className="carousel">
      {people.map((person) => {
        const { id, image, name, quote, title } = person;
        return (
          <div className="slide" key={id}>
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

      <button className="prev">
        <FaChevronLeft />
      </button>
      <button className="next">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
