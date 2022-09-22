/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import bgImg from "../public/izt.jpg";
import bg from "../public/IZT.png";
import lg from "../public/tél.jpg";
import po from "../public/po.png";
import pe from "../public/personne.png";
import tr from "../public/tra.png";
import pho from "../public/phone.png";
import inst from "../public/insta.png";
import f from "../public/f.png";
import reactslick from "./reactslick.js";
import Header from "./Components/Header";
import React, { Component, useEffect, useRef } from "react";

import {
  FaBriefcase,
  FaUserAlt,
  FaRoad,
  FaCity,
  FaShoppingBag,
} from "react-icons/fa";
import Slides from "./Components/Slider";
import Slider from "react-slick";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import TestemonySlides from "./Components/TestemonySlides";
import Footer from "./Components/Footers";
import { Row } from "react-bootstrap";

export default function Home(props) {
  var slider = useRef({});

  const funcClick = () => {
    alert("ALERT!!");
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
    //slider.slickNext();
  }, []);
  const next = () => {
    console.log("slickNext");
    slider.slickNext();
  };
  const previous = () => {
    console.log("slickPrev");

    slider.slickPrev();
  };

  return (
    <>
      <div id="reservation">
        <Header></Header>
      </div>
      <div className="infos">
        <div className="container-fluid position-relative p-5">
          <div className="row">
            <div className="col-md-5">
              <div className="fancy-underline rounded"></div>
              <h1 className=" text-white text-3xl  font-light">
                Faites-nous  <br /> <a className="text-yellow-500 btnReservation">confiance</a>
              </h1>
              <h5 className="text-white text-justify font-light mt-4 mb-8">
                Avec plus que 30 véhicules différents, nous vous garantissons le meilleur voyage que vous pouvez imaginer.
                Nous vous emmenons où vous voulez, quand vous voulez, et avec le véhicule qui vous convient le mieux.

              </h5>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 col-12">
              <div
                id="test2"
                className="scrolltest  flex flex-row  inline-flex     "
              >
                <div className="row px-8">
                  <div className="col-6">
                    <h1 className="text-white text-3xl">6 ans</h1>
                    <h4 className=" text-white text-uppercase text-lg font-extralight">
                      ANS D'EXISTENCE
                    </h4>
                  </div>
                  <div className="col-6">
                    <FaBriefcase
                      className="text-yellow-500"
                      size={40}
                    ></FaBriefcase>
                  </div>
                </div>
                <div className="row px-8">
                  <div className="col-6">
                    <h1 className="text-white text-3xl">+2160</h1>
                    <h4 className=" text-white text-uppercase text-lg font-extralight">
                      Clients particuliers
                    </h4>
                  </div>
                  <div className="col-6">
                    <FaUserAlt
                      className="text-yellow-500"
                      size={40}
                    ></FaUserAlt>
                  </div>
                </div>
                <div className="row px-8">
                  <div className="col-6">
                    <h1 className="text-white text-3xl">+19</h1>
                    <h4 className=" text-white text-uppercase text-lg font-extralight">
                      sociétés conventionnées
                    </h4>
                  </div>
                  <div className="col-6">
                    <FaCity
                      sociétés
                      conventionnées
                      className="text-yellow-500"
                      size={40}
                    ></FaCity>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h1 className="text-white text-2xl">+3460</h1>
                    <h4 className=" text-white text-uppercase text-lg font-extralight">
                      Trajets{" "}
                    </h4>
                  </div>
                  <div className="col-6">
                    <FaRoad className="text-yellow-500" size={40}></FaRoad>
                  </div>
                </div>
              </div>

              <div id="test">
                <div className="row ">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6">
                        <h1 className="text-white text-2xl">6 ans</h1>
                        <h4 className=" text-white text-uppercase text-lg font-extralight">
                          ANS D'EXISTENCE
                        </h4>
                      </div>
                      <div className="col-6">
                        <FaBriefcase
                          className="text-yellow-500"
                          size={40}
                        ></FaBriefcase>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6">
                        <h1 className="text-white text-2xl">+2160</h1>
                        <h4 className=" text-white text-uppercase text-lg font-extralight">
                          Clients particuliers
                        </h4>
                      </div>
                      <div className="col-6">
                        <FaUserAlt
                          className="text-yellow-500"
                          size={40}
                        ></FaUserAlt>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6">
                        <h1 className="text-white text-2xl">+19</h1>
                        <h4 className=" text-white text-uppercase text-lg font-extralight">
                          sociétés conventionnées
                        </h4>
                      </div>
                      <div className="col-6">
                        <FaCity className="text-yellow-500" size={40}></FaCity>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6">
                        <h1 className="text-white text-2xl">+3460</h1>
                        <h4 className=" text-white text-uppercase text-lg font-extralight">
                          Trajets
                        </h4>
                      </div>
                      <div className="col-6">
                        <FaRoad
                          sociétés
                          conventionnées
                          className="text-yellow-500"
                          size={40}
                        ></FaRoad>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#reservation"
              className="btnReservation hover:bg-gray-400  font-semibold bg-yellow-600 text-white py-2 px-8 rounded-lg shadow"
            >
              Réserver
            </a>
          </div>
        </div>
      </div>
      <div className="staff">
        <div className="parentView">
          <div className="trapezoid">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-7 col-sm-12 izt-values p-5">
                  <h1 className=" text-white ">
                    Notre <span className="text-yellow-500">staff</span>
                  </h1>
                  <h6 className=" text-white text-uppercase">
                    {" "}
                    <span className="text-yellow-500">7 valeurs</span>{" "}
                    Fondamentales
                  </h6>
                  <ul className="p-0">
                    <li>Des Chauffeurs Professionnels Hautement Formés</li>
                    <li>La Sécurité Comme Une Priorité</li>
                    <li>Poursuite de l'amélioration continue</li>
                    <li>Ponctualité et véracité</li>
                    <li>Utilisation Innovante De La Technologie</li>
                    <li>Véhicules propres et bien entretenus</li>
                  </ul>
                  <a href="#reservation" className=" hover:bg-gray-100  font-semibold bg-yellow-600 text-white py-2 px-8 rounded-lg shadow btnReservation">
                    Réserver
                  </a>
                </div>
                <div className="col-md-5 col-sm-12 p-9 ">
                  <Slides></Slides>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonies">
        <div className="container-fluid p-5">
          <h1 className=" text-white text-3xl font-bold title">Témoignage</h1>
          <div className="fancy-underline rounded"></div>

          <div>
            <TestemonySlides />
          </div>
          <div className="text-center pt-8">
            <a
              href="#reservation"
              className="btnReservation hover:bg-gray-400  font-semibold bg-yellow-600 text-white py-2 px-8 rounded-lg shadow"
            >
              Réserver
            </a>
          </div>
        </div>
      </div>
      <div className="characteristic ">
        <div className="parentView ">
          <div className="trapezoid containercharacteristic ">
            <div className="container-fluid bg-container p-5 ">
              <h2 className=" text-white text-center text-uppercase">
                <span className="text-yellow-500 text-uppercase">
                  principales
                </span>{" "}
                Caractéristiques{" "}
              </h2>
              <h1 className=" text-white text-center">
                {" "}
                Voyagez avec nous, {" "}
                <span className="text-yellow-500 text-uppercase">
                  à votre goût
                </span>{" "}
              </h1>
             
              <div className="row mt-5">
                <div className="col-md-3">
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
                <div className="col-md-3">
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
                <div className="col-md-3">
                  <h6 className=" text-yellow-500 text-center">
                    {" "}
                    La plus grande flotte
                  </h6>
                  <p className="text-white text-center">
                    Nous proposons une
                    <br />
                    vaste flotte de
                    <br />
                    véhicule <br />
                    comprenant des
                    <br />
                     mini bus et des <br />
                    autocars <br />
                  </p>
                </div>
                <div className="col-md-3">
                  <h6 className=" text-yellow-500 text-center">
                    {" "}
                    Service à l'échelle nationale{" "}
                  </h6>
                  <p className="text-white text-center">
                    Nous offrons nos services
                    <br />
                    de transport à l'échelle <br />
                    nationale pour vos affaires <br />
                    au loisirs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="test2" className="arrowScroll d-flex absolute justify-content-center ">
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
      <Footer></Footer>
    </>
  );
}
