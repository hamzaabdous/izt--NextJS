import Image from "next/image";
import bg from "../../public/IZT.png";
import SideBar from "./SideBar";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <div className="header-nav position-relative py-5">
      <SideBar></SideBar>
      <div className="overlay">
        <div className="nav-cover"></div>
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
                    className="nav-link text-uppercase active"
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
                  <a className="nav-link text-uppercase " href="#">
                    {" "}
                    <span className="d-none">&gt;</span>A propos
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  {" "}
                  <span className="d-none">&gt;</span>Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="text-center p-5 slogan">
        <h2 className="position-relative font-normal">Trouvons ensemble</h2>
        <h1 className="position-relative text-xl font-light">
          La voiture ideale <span className="text-yellow-500">...</span>
        </h1>
      </div>
      <div className="reservation">
        <div className="row">
          <div className="col-md-1">
            <label>Personne</label>
            <select
              className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
              id="department"
            >
              <option> Engineering</option>
              <option>Design</option>
              <option>Customer Support</option>
            </select>
          </div>
          <div className="col-md-1">
            <label>Bagages</label>
            <select
              className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
              id="department"
            >
              <option> Engineering</option>
              <option>Design</option>
              <option>Customer Support</option>
            </select>
          </div>
          <div className="col-md-2">
            <label>Emplacement de départ</label>
            <select
              className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
              id="department"
            >
              <option> Engineering</option>
              <option>Design</option>
              <option>Customer Support</option>
            </select>
          </div>
          <div className="col-md-2">
            <label>Destination</label>
            <select
              className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
              id="department"
            >
              <option> Engineering</option>
              <option>Design</option>
              <option>Customer Support</option>
            </select>
          </div>
          <div className="col-md-2 mt-4">
            <button className=" hover:bg-gray-100  font-semibold bg-yellow-600 text-white py-2 px-8 rounded-lg shadow">
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
