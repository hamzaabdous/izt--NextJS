/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import bg from "../../public/IZT.png";
import SideBar from "../Components/SideBar";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <div className="header-nav position-relative py-5">
      <SideBar></SideBar>
      <div className="overlay">
        <div className="nav-cover-service"></div>
      </div>
      <div className="nav-logo text-center">
        <Image
          src={bg}
          className="mr-3 h-6 sm:h-9"
          width={100}
          height={100}
          alt="img"
        />
      </div>
      <nav className="navbar navbar-expand-lg bg-light rounded mx-auto">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav justify-content-center">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className="nav-link text-uppercase "
                    aria-current="page"
                    href="#"
                  >
                    {" "}
                    <span className="d-none">&gt;</span>Acceuil
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services/services">
                  <a
                    className="nav-link text-uppercase active"
                    href="services.jsx"
                  >
                    {" "}
                    <span className="d-none">&gt;</span> Services
                  </a>
                </Link>
              </li>
              <li className="nav-item">
              <Link href="/propos/apropos">

                <a className="nav-link text-uppercase" href="#">
                  {" "}
                  <span className="d-none">&gt;</span>A propos
                </a>
                </Link>
              </li>
              <li className="nav-item">
              <Link href="/contact/contact">

                <a className="nav-link text-uppercase" href="#">
                  {" "}
                  <span className="d-none">&gt;</span>Contact
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid bg-container p-5 position-relative">
              <h2 className=" text-white text-center text-uppercase">
                <span className="text-yellow-500 text-uppercase">
                IZT
                </span>{" "}
              </h2>
              <h1 className=" text-white text-center">
                {" "}
                votre partenaire , {" "}
                <span className="text-yellow-500 text-uppercase">
                routier de confiance
                </span>{" "}
              </h1>
              <div className="row mt-5">
                <div className="col-md-3">
                  <h6 className=" text-yellow-500 text-center">
                    {" "}
                    IZT- Events{" "}
                  </h6>
                  <p className="text-white text-center">
                  Nous vous accompagnons pour l'ensemble de vos déplacements événementiels, 
                    <br />
                    , vous et vos invités.
Quel que soit le nombre, la destination, ou l'horaire, nos       
              <br />
              nos véhicules serons à votre disposition H24 
                    <br />
                    professionnels ou personnels.
                  </p>
                </div>
                <div className="col-md-3">
                  <h6 className=" text-yellow-500 text-center">
                    {" "}
                    IZT- Voyages{" "}
                  </h6>
                  <p className="text-white text-center">
                  Tracez votre trajet, personnalisez-le, et laissez nous vous emmenez !
                    <br />
                    Des voitures berlines ou SUV, des voitures H1, ou même des bus à grande charge,  <br />
                    berlines, SUV, VITO, limousines,  <br />
                    , mobilisés par des chauffeurs de confiance <br />
                    , pour passer les meilleurs séjours touristiques ou professionnels.
                  </p>
                </div>
                <div className="col-md-3">
                  <h6 className="text-yellow-500 text-center">
                    IZT-Aéroport
                  </h6>
                  <p className="text-white text-center">
                  INTERVILLE ZEROUAL, vous assure le voyage Aller -Retour, 
                    <br />
                    de chez-vous, à l'ensemble des aéroports du territoire marocain, et vice versa.
                    <br />
                    Une voiture avec chauffeur expérimenté, à votre disposition, 
                    <br />
                    , vous et votre famille, amis ou partenaires pro !
                  </p>
                </div>
                <div className="col-md-3">
                  <h6 className=" text-yellow-500 text-center">
                    {" "}
                    IZT- VIP
                  </h6>
                  <p className="text-white text-center">
                  Des voitures limousines à votre disposition, 
                    <br />
                    de chez-vous, à l'ensemble des aéroports du territoire marocain, et vice versa.
                    <br />
                    , un service de luxe pour des moments spéciaux.
                  </p>
                </div>
              </div>
            </div>
    </div>
  );
}
