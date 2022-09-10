import Header from "./Header";
import { FaBriefcase } from "react-icons/fa";
import Slides from "../Components/Slider";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import TestemonySlides from "../Components/TestemonySlides";
import Footer from "../Components/Footers";
import { useRouter } from 'next/router'

export default function Service() {
  const router = useRouter()

  const funcClick = (e) => {
    e.preventDefault()
    router.push('/')  };
  return (
    <>
      <Header></Header>

      <div className="staff">
        <div className="parentView">
          <div className="trapezoid-service">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 izt-values p-5">
                  <h1 className=" text-white ">
                    Notre <span className="text-yellow-500">staff</span>
                  </h1>
                  <h6 className=" text-white text-xl font-light">
                    Nous adressons notre offre à tous ceux qui souhaitent
                    voyager dans des conditions confortables.Nous avons plus de
                    150 véhicules haut de gamme, afin que nos clients puissent
                    être assurés du confort et de la sécurité.
                  </h6>
                  <ul className="p-0 lowercase">
                    <li>VÉHICULES PROPRES ET BIEN ENTRETENUS</li>
                    <li>SERVICE CLIENT DE PREMIER TARIF</li>
                   
                  </ul>
                  <button onClick={funcClick}  className="hover:bg-gray-400  font-semibold bg-yellow-600 text-white py-2 px-8 rounded-lg shadow w-96">
                    Reserver
                  </button>
                </div>
                <div className="col-md-8 p-9 ">
                  <Slides></Slides>
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
