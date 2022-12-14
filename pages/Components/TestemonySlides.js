import React, { Component, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const TestemonySlides = (props) => {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  var data = [
    {
      title: "",
      name: "Omar B",
      description: "je suis trés satisfait de l'expérience ! trés bon service",
      photo: "cc",
      nomEntreprise: "cc",
    },
    {
      title: "",
      name: "Karima M.",
      description:
        "vous êtes professionnels et serviable la voiture était bien soignée et le chauffeur était professionne  merci",
      photo: "cc",
      nomEntreprise: "cc",
    },
    {
      title: "",
      name: "Simohamed B.",
      description:
        "Aeroport casa- rabat agdal RDV respecté et conditions de voyage trés satisfaisantes",
      photo: "cc",
      nomEntreprise: "cc",
    }
  ];
  useEffect(() => {
    console.log(slider);
    slider.slickNext();
  }, [slider]);
  return (
    <div>
      <div className="d-flex justify-content-end">
        <FaArrowCircleLeft
          onClick={previous}

          className="text-yellow-500 mr-2"
          size={34}
        ></FaArrowCircleLeft>
        <FaArrowCircleRight
          onClick={next}

          className="text-yellow-500 ml-2"
          size={34}
        ></FaArrowCircleRight>
      </div>
      <Slider ref={(c) => (slider = c)} {...settings}>
        {data.map((x, i) => (
          <div key={x} className="">
            <Card className="m-2">
              <Card.Body>
                <Card.Title>{x.title}</Card.Title>
                <Card.Text>{x.description}</Card.Text>
                <div className="row">
                  <div className="col-4 pt-3 ">
                    <Card.Img
                      variant="bottom"
                      className="imgTemoignage"
                      src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_182da3c4113%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_182da3c4113%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    />
                  </div>
                  <div className="col-8 pt-4">
                    <h4 className="text-lg font-normal ">{x.name}</h4>
                    <h6 className="text-sm text-gray-400 font-normal ">

                    </h6>
                    <div className="d-flex">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      {i % 2 == 0 && <FaStar className="text-yellow-500" />}
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestemonySlides;
