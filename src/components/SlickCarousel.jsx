import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

const SlickCarousel = ({ people }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slick-container">
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export default SlickCarousel;
