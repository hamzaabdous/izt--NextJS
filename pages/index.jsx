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
import { FaBriefcase ,FaUserAlt ,FaRoad,FaCity,FaShoppingBag} from "react-icons/fa";
import Slides from "./Components/Slider";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import TestemonySlides from "./Components/TestemonySlides";
import Footer from "./Components/Footers";

export default function Home() {
  const funcClick = () => {
    alert("ALERT!!");
  };
  return (
    <>
    <div id="reservation">
      <Header></Header>
    </div>
      <div className="infos">
        <div className="container-fluid position-relative p-5">
          <div className="row">
            <div className="col-md-4">
              <div className="fancy-underline rounded"></div>
              <h1 className=" text-white text-3xl  font-light">
                Faites confiance <br /> <a className="text-yellow-500 btnReservation">à nos</a>
              </h1>
              <h5 className="text-white text-justify font-light mt-4 mb-8">
                Avec plus que 30 véhicules différents, nous vous garantissonsle
                le meilleur voyage que vous pouvez imaginez. Nous vous emmenons
                où vous voulez, quand vous voulez, et avec le véhicule qui vous
                convient le mieux.
              </h5>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <h1 className="text-white text-3xl">6 ans</h1>
                    </div>
                    <div className="col-6">
                      <FaBriefcase
                        className="text-yellow-500"
                        size={40}
                      ></FaBriefcase>
                    </div>
                  </div>
                  <h4 className=" text-white text-uppercase text-lg font-extralight">
                    ANS D'EXISTENCE
                  </h4>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <h1 className="text-white text-3xl">+2160</h1>
                    </div>
                    <div className="col-6">
                      <FaUserAlt
                        className="text-yellow-500"
                        size={40}
                      ></FaUserAlt>
                    </div>
                  </div>
                  <h4 className=" text-white text-uppercase text-lg font-extralight">
                    Clients particuliers
                  </h4>
                </div>

                <div className="col-md-6 my-5">
                  <div className="row">
                    <div className="col-6">
                      <h1 className="text-white text-3xl">+19</h1>
                    </div>
                    <div className="col-6">
                      <FaCity
                        className="text-yellow-500"
                        size={40}
                      ></FaCity>
                    </div>
                  </div>
                  <h4 className=" text-white text-uppercase text-lg font-extralight">
                    sociétés conventionnées
                  </h4>
                </div>
                <div className="col-md-6 my-5">
                  <div className="row">
                    <div className="col-6">
                      <h1 className="text-white text-3xl">+3460</h1>
                    </div>
                    <div className="col-6">
                      <FaRoad
                        className="text-yellow-500"
                        size={40}
                      ></FaRoad>
                    </div>
                  </div>
                  <h4 className=" text-white text-uppercase text-lg font-extralight">
                    Trajets
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="#reservation" className="btnReservation hover:bg-gray-400  font-semibold bg-yellow-600 text-white py-2 px-8 rounded-lg shadow">
              Reserver
            </a>
          </div>
        </div>
      </div>
      <div className="staff">
        <div className="parentView">
          <div className="trapezoid">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 izt-values p-5">
                  <h1 className=" text-white ">
                    Notre <span className="text-yellow-500">staff</span>
                  </h1>
                  <h6 className=" text-white text-uppercase">
                    {" "}
                    <span className="text-yellow-500">7 valeurs</span>{" "}
                    Fondamentales
                  </h6>
                  <ul className="p-0">
                    <li>Des chaufferus professionnels hautement formés</li>
                    <li>La sécurité comme notre priorité la plus élevée</li>
                    <li>Poursuite de l'am"lioration continue</li>
                    <li>Ponctualité et véracité</li>
                    <li>Utlisiation innovante de la technologie</li>
                    <li>Véhicules propres et bien entretenus</li>
                    <li>Service client de premier tarif</li>
                  </ul>
                  <a href="#reservation" className=" hover:bg-gray-100  font-semibold bg-yellow-600 text-white py-2 px-8 rounded-lg shadow btnReservation">
                    Reserver
                  </a>
                </div>
                <div className="col-md-8 p-9 ">
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
          <div className="d-flex justify-content-end">
            <FaArrowCircleLeft
              className="text-yellow-500 mr-2"
              size={34}
            ></FaArrowCircleLeft>
            <FaArrowCircleRight
              className="text-yellow-500 ml-2"
              size={34}
            ></FaArrowCircleRight>
          </div>
          <div>
            <TestemonySlides />
          </div>
          <div className="text-center">
            <a href="#reservation" className="btnReservation hover:bg-gray-400  font-semibold bg-yellow-600 text-white py-2 px-8 rounded-lg shadow">
              Reserver
            </a>
          </div>
        </div>
      </div>
      <div className="characteristic ">
        <div className="parentView ">
          <div className="trapezoid containercharacteristic">
            <div className="container-fluid bg-container p-5">
              <h2 className=" text-white text-center text-uppercase">
                <span className="text-yellow-500 text-uppercase">
                  principales
                </span>{" "}
                Caractéristiques{" "}
              </h2>
              <h1 className=" text-white text-center">
                {" "}
                Faites votre{" "}
                <span className="text-yellow-500 text-uppercase">
                  votre voyage
                </span>{" "}
              </h1>
              <h5 className=" text-white text-center">
                {" "}
                à votre facon avec nous{" "}
              </h5>
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
                    berlines Mercedes <br />
                    vito des limousines <br />
                    des mini bus et des <br />
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
      </div>
      <Footer></Footer>
    </>
  );
}
