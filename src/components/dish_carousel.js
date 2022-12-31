import Story1 from "../assets/lara1.jpg";
import Story2 from "../assets/lara2.jpg";
import Story3 from "../assets/lara3.jpg";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function DishCarousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container" style={{border:"solid 2px red"}}>
      <h2> Responsive </h2>
      <Slider {...settings}>
        <div>
         <img src={Story1} width={300} alt="...no image"/>
        </div>
        <div>
        <img src={Story2} width={300} alt="...no image"/>
        </div>
        <div>
        <img src={Story3} width={300} alt="...no image"/>
        </div>
        <div>
        <img src={Story1} width={300} alt="...no image"/>
        </div>
        <div>
        <img src={Story3} width={300} alt="...no image"/>
        </div>
        <div>
        <img src={Story3} width={300} alt="...no image"/>
        </div>
        <div>
        <img src={Story2} width={300} alt="...no image"/>
        </div>
        <div>
        <img src={Story1} width={300} alt="...no image"/>
        </div>
        <div>
        <img src={Story1} width={300} alt="...no image"/>
        </div>
        <div>
        <img src={Story3} width={300} alt="...no image"/>
        </div>
        <div>
        <img src={Story3} width={300} alt="...no image"/>
        </div>
        <div>
        <img src={Story1} width={300} alt="...no image"/>
        </div>
        <div>
        <img src={Story3} width={300} alt="...no image"/>
        </div>
        <div>
        <img src={Story3} width={300} alt="...no image"/>
        </div>
      </Slider>
    </div>
  );
}

export default DishCarousel;
