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
                  <a className="nav-link text-uppercase " href="services.jsx">
                    {" "}
                    <span className="d-none">&gt;</span> Services
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/propos/apropos">
                  <a className="nav-link text-uppercase active" href="#">
                    {" "}
                    <span className="d-none">&gt;</span>A propos
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact/contact">

                  <a className="nav-link text-uppercase " href="#">
                    {" "}
                    <span className="d-none">&gt;</span>Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="text-center p-10 slogan">
        <h1 className="position-relative text-lg font-normal lowercase">
          <span className="text-yellow-300 uppercase">INTERVILLE ZEROUAL </span>{" "}
          <span className="uppercase"> T</span>ransport SARL
        </h1>
        <p className="position-relative text-white text-3xl font-normal p-4">
          La soci??t?? a vue le jour, dans le but de fructifier l???exp??rience de son fondateur Mr ZEROUAL ABDELKRIM, ayant cumul?? plus que 20 ans d???exp??rience dans le domaine du transport touristique, ainsi pour fonder un organisme qui donnera un nouveau souffle au secteur, mais sur tout qui confirmera le principe de ?? la qualit?? ?? comme premier pilier.
          Avec plus que 30 v??hicules diff??rents, r??pondons ?? l???ensemble des besoins de nos clients, particuliers et professionnels, afin de rester leur premier choix de partenaires.
         <br></br>
         <br></br>
         <br></br>
         <br></br>

          <h3 className="uppercase text-yellow-300 text-3xl">IZT
            Chiffres cl??s</h3>
          <ul className="p-0 text-xl">
            <li>+19 soci??t??s Conventionn??es</li>
            <li>6 ANS D'EXISTENCE</li>
            <li>+2160 Clients particuliers </li>
            <li>+3460 Trajets travers??s</li>
          </ul>
          <br></br>

          <h3 className="uppercase text-yellow-300 text-3xl">NOS VALEURS :</h3>
          <ul className="p-0 text-xl">
            <li>La qualit?? </li>
            <li>L???engagement </li>
            <li>La convivialit?? </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
