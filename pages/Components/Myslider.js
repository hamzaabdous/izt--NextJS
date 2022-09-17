import React, { Component, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaBriefcase,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";

const Myslider = (props) => {
  const slider = useRef({});
  const next = () => {
    console.log("slickNext");
    slider.slickNext();
  };
  const previous = () => {
    console.log("slickPrev");

    slider.slickPrev();
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  useEffect(() => {
    console.log(slider);
    slider.slickNext();
  }, []);
  return (
    <div className="">
      <Slider ref={(c) => (slider = c)} {...settings}>
        <div className="col-md-3" key={1}>
          <h6 className=" text-yellow-500 text-center">
            {" "}
            La sécurité d'abord{" "}
          </h6>
          <p className="text-white text-center">
            Personnel
            <br />
            expérimenté et
            <br />
            chaufferus <br />
            professionnels
          </p>
        </div>
        <div className="col-md-3" key={2}>
          <h6 className=" text-yellow-500 text-center">
            {" "}
            Tarifs raisonnables{" "}
          </h6>
          <p className="text-white text-center">
            Nous pouvons
            <br />
            vous offrir le bon <br />
            véhicule au bon <br />
            prix pour s'adapter <br />à votre budget
          </p>
        </div>
        <div className="col-md-3" key={3}>
          <h6 className=" text-yellow-500 text-center">
            {" "}
            Tarifs raisonnables{" "}
          </h6>
          <p className="text-white text-center">
            Nous pouvons
            <br />
            vous offrir le bon <br />
            véhicule au bon <br />
            prix pour s'adapter <br />à votre budget
          </p>
        </div>
        <div className="col-md-3" key={4}>
          <h6 className=" text-yellow-500 text-center">
            {" "}
            Tarifs raisonnables{" "}
          </h6>
          <p className="text-white text-center">
            Nous pouvons
            <br />
            vous offrir le bon <br />
            véhicule au bon <br />
            prix pour s'adapter <br />à votre budget
          </p>
        </div>
      </Slider>
      <div className=" d-flex absolute justify-content-center  ">
        <FaArrowCircleLeft
          onClick={previous}
          className="text-yellow-500 mx-2"
          size={34}
        ></FaArrowCircleLeft>
        <FaArrowCircleRight
          onClick={next}
          className="text-yellow-500 mx-2"
          size={34}
        ></FaArrowCircleRight>
      </div>
    </div>
  );
};

export default Myslider;
