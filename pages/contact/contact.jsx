import Header from "./Header";
import { FaBriefcase } from "react-icons/fa";
import Slides from "../Components/Slider";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import TestemonySlides from "../Components/TestemonySlides";
import Footer from "../Components/Footers";
import Image from "next/image";
import bg from "../../public/ccccccmen-removebg-preview.png";

export default function apropos() {
  const funcClick = () => {
    alert("ALERT!!");
  };
  return (
    <>
      <Header></Header>
      
      <Footer></Footer>
    </>
  );
}
