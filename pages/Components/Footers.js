/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { FaPhoneAlt, FaMailBulk, FaMapMarker, FaTiktok } from "react-icons/fa";
import bg from "../../public/IZT.png";

const Footer = () => (
  <footer className="page-footer font-small blue pt-8 ">
    <div className="container-fluid text-md-left pt-16">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4  mt-md-0 ml-md-0 px-5 mt-3 ">
          <div className="text-left">
            <Image
              src={bg}
              className="mr-3 h-6 sm:h-9"
              width={150}
              height={150}
              alt="img"
            />
          </div>
          <p className="text-white text-justify">
            Interville ZEROUAL TRANSPORT Votre partenaire de voyage sur
            l'ensemble du territoire Marocain Avec plus que 30 véhicules
            différents et un staff expérimenté, nous vous accompagnons sur les
            longs comme les les déplacements courts trajets, pour assurer votre
            confort et votre sécurité. Nous vous emmenons où vous voulez, quand
            vous voulez, et avec le véhicule qui vous convient le mieux.{" "}
          </p>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 px-5 mt-5 pt-14">
          <div className="widget no-box">
            <h5 className="widget-title ">
              Nous contacter<span></span>
            </h5>

            <ul className="social-footer2">
              <li className="">
                <a
                  className="d-flex "
                  rel="noreferrer"
                >
                  <span
                    className="bg-white rounded-full d-flex justify-content-center items-center mr-4"
                    style={{ height: "35px", width: "35px" }}
                  >
                    {" "}
                    <FaPhoneAlt
                      style={{ fontSize: "20px", color: "rgb(255, 215, 96)" }}
                    />
                  </span>{" "}
                  +212 661 372 567{" "}
                </a>
              </li>
              <li className="">
                <a
                  className="d-flex "
                >
                  {" "}
                  <span
                    className="bg-white rounded-full d-flex justify-content-center items-center mr-4"
                    style={{ height: "35px", width: "35px" }}
                  >
                    {" "}
                    <FaMailBulk
                      style={{ fontSize: "20px", color: "rgb(255, 215, 96)" }}
                    />
                  </span>{" "}
                  izt@navette.Com{" "}
                </a>
              </li>
              <li className="">
                <a
                  className="d-flex "
                >
                  {" "}
                  <span
                    className="bg-white rounded-full d-flex justify-content-center items-center mr-4"
                    style={{ height: "35px", width: "35px" }}
                  >
                    {" "}
                    <FaMapMarker
                      style={{ fontSize: "20px", color: "rgb(255, 215, 96)" }}
                    />{" "}
                  </span>
                  Centre commercial Al Mamoune , 22 Rue <br />
                  Abdelmoumen, Hassan, Rabat
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 mb-md-0 mb-3 mt-5 pt-14">
          <h5 className="text-uppercase">Lien rapide</h5>
          <ul>
            <li>
              {" "}
              <a href="#">Legal notice</a>
            </li>
            <li>
              {" "}
              <a href="#">Terms of use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright bg-yellow-500 text-center py-3">
      © 2022 Copyright:
      <a href="https://izt.com/"> izt.com</a>
    </div>
  </footer>
);

export default Footer;
