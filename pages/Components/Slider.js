import React, { Component, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaBriefcase,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import { faL } from "@fortawesome/free-solid-svg-icons";
import s2 from "../../public/slide2.png";
import s3 from "../../public/slide3.png";

import Image from "next/image";

const Slides = (props) => {
  const slider = useRef({});
  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
  };
  useEffect(() => {
    console.log(slider);
    slider.slickNext();
  }, []);
  return (
    <div>
      <Slider ref={(c) => (slider = c)} {...settings}>
        <div className="imgSlideContiner" key={1}>
          <Image src={s3} width="400px" height="550px"   className="mx-2 imgslide" alt="img" />
        </div>
        <div className="imgSlideContiner"  key={2}>
          <Image src={s2} className="px-2 imgslide" width="400px" height="550px" alt="img" />
        </div>
      </Slider>
      <div className="d-flex justify-content-center pt-4 pl-96">
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

export default Slides;
