import Image from "next/image";
import bg from "../../public/IZT.png";
import SideBar from "../Components/SideBar";
import { useRouter } from "next/router";
import Link from "next/link";
import { Input, useInput, Grid, Checkbox } from "@nextui-org/react";
import React from "react";
import { FiUser, FiPhone ,FiMail } from "react-icons/fi";

export default function Header() {
  const router = useRouter();
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };
  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);
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
                  <a className="nav-link text-uppercase " href="#">
                    {" "}
                    <span className="d-none">&gt;</span>A propos
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact/contact">
                  <a className="nav-link text-uppercase active" href="#">
                    {" "}
                    <span className="d-none">&gt;</span>Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className=" mt-4 contactHeader"></div>
      <div className="p-5 contactHeader2">
        <div className="formContainer">
          <row className="d-flex ">
            <div className="col-4">
              <Input
                bordered
                rounded
                shadow={false}
                onClearClick={reset}
                status={helper.color}
                color="warning"
                helperColor={helper.color}
                helperText={helper.text}
                label="Nom"
                placeholder="prenom nom"
                contentLeft={<FiUser className="" size={34}></FiUser>}
              />
            </div>
            <div className="col-4">
              <Input
                bordered
                rounded
                shadow={false}
                onClearClick={reset}
                status={helper.color}
                color="warning"
                helperColor={helper.color}
                helperText={helper.text}
                label="Telephone"
                placeholder="06......"
                contentLeft={<FiPhone className="" size={34}></FiPhone>}
              />
            </div>
            <div className="col-4">
              <Input
                bordered
                rounded
                shadow={false}
                onClearClick={reset}
                color="warning"
                helperColor={helper.color}
                helperText={helper.text}
                type="email"
                label="Adresse e-mail"
                placeholder="email@gmail.com"
                contentLeft={<FiMail className="" size={34}></FiMail>}
              />
            </div>
          </row>
          <row className="d-flex mt-4">
            <div className="col-8">
              <Input
                bordered
                rounded
                shadow={false}
                onClearClick={reset}
                color="warning"
                helperColor={helper.color}
                helperText={helper.text}
                type="text"
                label="Comments"
                width={580}
                placeholder="Your comments"
              />
            </div>
            <div className="col-4 ">
              <button className=" hover:bg-gray-400 w-56 font-semibold bg-yellow-500 text-white mt-4 py-2 px-8 rounded-3xl ">
                Envoyer -&gt;
              </button>
            </div>
          </row>
          <row className="pl-2 ">
            <Checkbox className="pt-3" size="xs" defaultSelected={false}>
              I accept{" "}
              <span className="text-yellow-500">
                {" "}
                &nbsp; the generate terms of use
              </span>
            </Checkbox>
          </row>
        </div>
      </div>
    </div>
  );
}
