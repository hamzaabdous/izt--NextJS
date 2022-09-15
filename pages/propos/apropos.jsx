/* eslint-disable react-hooks/rules-of-hooks */
import Header from "./Header";
import { FaBriefcase } from "react-icons/fa";
import Slides from "../Components/Slider";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import TestemonySlides from "../Components/TestemonySlides";
import Footer from "../Components/Footers";
import Image from "next/image";
import bg from "../../public/ccccccmen-removebg-preview.png";
import { useRouter } from 'next/router'

export default function apropos() {
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
                <div className="col-md-7  p-5">
                  <span className=" ligneyellow"></span>
                  <h1 className=" text-white pt-3">
                    ABDELKARIM ZEROUAL <br />
                    <span className="text-yellow-500">CEO</span>
                  </h1>
                  <h6 className=" text-white text-xl font-light">
                    J’ai fondé cette entreprise en 1995 avec la <br/> vision d’offrir
                    un service de transport de luxe <br/>de la plus haute qualité. Je
                    vous invite à <br/>essayer notre service et je vous garantis<br/>
                    personnellement que vous vivrez une<br/> expérience pleinement
                    satisfaite
                  </h6>
                </div>
                <div className="col-md-5 ">
                  <Image
                    src={bg}
                    className="mr-3  h-6 sm:h-9 img"
                    width={300}
                    height={600}
                    alt="img"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="characteristicPropos">
        <div className="parentViewPropos ">
          <div className="trapezoidPropos ">
            <div className="container-fluid bg-containerPropos p-5 ">
            <div>
                <h2 className=" text-white font-extrabold text-center text-lowercase">
              La parfaite collection {" "}
                <span className="text-yellow-500 text-lowercase">
                de véhicules
                </span>{" "}
               
              </h2>
              <h1 className="font-light text-base  text-white text-center">
              quelle que soit votre <span className="text-yellow-500 text-lowercase">
              occasion
                </span>  choisissez notre service
              </h1>
             
              <row>
                <div className="text-center pt-4">
                  <button onClick={funcClick}  className=" hover:bg-gray-400  font-semibold bg-yellow-600 text-white py-2 px-8 rounded-lg shadow w-72">
                    Reserver
                  </button>
                </div>
              </row>
            </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
