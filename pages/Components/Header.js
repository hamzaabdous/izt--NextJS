import Image from "next/image";
import bg from "../../public/IZT.png";
import SideBar from "./SideBar";
import { useRouter } from "next/router";
import Link from "next/link";
import { get, post } from "../api/ApiCall";
import { useEffect } from "react";
import useState from "react-usestateref";
import Card from "react-bootstrap/Card";
import { FaBriefcase, FaUserAlt, FaRoad, FaShoppingBag } from "react-icons/fa";
import img from "../../public/IZT.png";
import { tuple } from "@nextui-org/react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

function MydModalWithGrid(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Les informations personnel
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicnom">
                <Form.Label>Nom et prenom</Form.Label>
                <Form.Control
                  onChange={(e) => props.setNomEtPrenom(e.target.value)}
                  type="text"
                  placeholder="Nom et prenom"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => props.setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ville</Form.Label>
                <Form.Control
                  onChange={(e) => props.setVille(e.target.value)}
                  type="email"
                  placeholder="Rabat"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tele</Form.Label>
                <Form.Control
                  onChange={(e) => props.setTele(e.target.value)}
                  type="email"
                  placeholder="06...."
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="warning" onClick={props.validerReservation}>
          Valider
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Header() {
  const router = useRouter();
  var [data, setData, Dataref] = useState([]);
  var [Destination, setDestination, Destinationref] = useState(0);
  var [Depart, setDepart, Departref] = useState(0);
  var [Bagages, setBagages, Bagagesref] = useState(1);
  var [Personne, setPersonne, Personneref] = useState(1);
  var [chearchOffre, setchearchOffre, chearchOffreref] = useState([]);
  var [hideOffre, sethideOffre, hideOffreref] = useState(true);
  var [modalShow, setModalShow, showref] = useState(false);

  var [
    IdDestinationCarRange,
    setIdDestinationCarRange,
    IdDestinationCarRangeref,
  ] = useState(0);
  var [NomEtPrenom, setNomEtPrenom, NomEtPrenomref] = useState("");
  var [Email, setEmail, emailref] = useState("");
  var [Ville, setVille, Villeref] = useState("");
  var [Tele, setTele, Teleref] = useState("");

  var numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
  ];
  useEffect(() => {
    get("destination").then((r) => {
      setData(r);
      setDestination(r[0].id);
      setDepart(r[0].id);
    });
  }, []);

  function getDestination(e) {
    var value = e.target.value;
    setDestination(value);
    console.log("destination", Destinationref.current);
  }
  function getDepart(e) {
    var value = e.target.value;
    setDepart(value);
    console.log("depart", Departref.current);
  }
  function getBagages(e) {
    var value = e.target.value;
    setBagages(value);
    console.log("Bagages", Bagagesref.current);
  }
  function getPersonne(e) {
    var value = e.target.value;
    setPersonne(value);
    console.log("Personne", Personneref.current);
  }
  function SearchOffre() {
    console.log(Departref.current);
    var model = {
      NbrPersons: Personneref.current,
      IdDepart: Departref.current,
      destination_id: Destinationref.current,
    };
    if (Destinationref.current != Departref.current) {
      post("reservation", "SearchOffre", model).then((r) => {
        if (r[0] == null) {
          swal("Erreur", "Se traget ne trouve pas", "error");
        }
        setchearchOffre(r[0]);
        sethideOffre(false);
        console.log(r);
        setIdDestinationCarRange(r[0]?.IdDestinationCarRange);
      });
    } else {
      swal(
        "Erreur",
        "Le trajet de depart doit étre different de trajet d'arrive",
        "error"
      );
    }
  }
  function validerReservation() {
    let tmpArray = NomEtPrenomref.current.split(" "); //split the name to an array

    const lastname = tmpArray.pop(); // pop the last element of the aray and store it in "lastname" variable
    const firstname = tmpArray.join(" "); // join the array to make first and middlename and store it in "firstname" variale

    var model = {
      NbrPersons: Personneref.current,
      NbrLuggage: Bagagesref.current,
      FirstName: firstname,
      LastName: lastname,
      Email: emailref.current,
      PhoneNumber: Teleref.current,
      Ville: Villeref.current,
      IdDestinationCarRange: IdDestinationCarRangeref.current,
    };
    console.log("model", model);

    post("reservation", "create", model).then((r) => {
      console.log(r);
      swal("Good job!", "success", "success");
      setModalShow(false);
    });
  }

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
      <div className="text-center p-5 slogan">
        <h1 className="position-relative font-normal ">Trouvons ensemble</h1>
        <h2 className="position-relative text-xl font-light pt-2">
          La voiture ideale
        </h2>
      </div>
      <div className="reservation">
        <div className="row">
          <div className="col-md-1">
            <label>Personne</label>
            <select
              className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
              id="department"
              onChange={getPersonne}
            >
              {numbers.map((i) => (
                <option key={i} value={i}>
                  {" "}
                  {i}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-1">
            <label>Bagages</label>
            <select
              className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
              id="department"
              onChange={getBagages}
            >
              {numbers.map((i) => (
                <option key={i} value={i}>
                  {" "}
                  {i}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-2">
            <label>Emplacement de départ</label>
            <select
              className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
              id="department"
              onChange={getDepart}
            >
              {data.map((d, i) => (
                <option key={i} value={d.id}>
                  {" "}
                  {d.Label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-2">
            <label>Destination</label>
            <select
              className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
              id="department"
              onChange={getDestination}
            >
              {data.map((d, i) => (
                <option key={i} value={d.id}>
                  {" "}
                  {d.Label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-2 mt-4">
            <button
              onClick={SearchOffre}
              className=" hover:bg-gray-100  font-semibold bg-yellow-600 text-white py-2 px-8 rounded-lg shadow"
            >
              Rechercher
            </button>
          </div>
        </div>
        <div className=" offre " hidden={hideOffreref.current}>
          <div className="offreimg">
            <Image src={img} width={300} height={300} />
          </div>
          <Card className="cardOffre" style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title className="text-6xl">
                <h1>{chearchOffreref.current?.Label}</h1>
              </Card.Title>
              <Card.Text className="text-yellow-500 text-4xl">
                {chearchOffreref.current?.Prix}MAD
              </Card.Text>
              <div className="row">
                <div className="col-6 d-flex ">
                  <FaUserAlt className="" size={30}></FaUserAlt>
                  <h1 className="text-white text-2xl pl-4">
                    {Personneref.current}
                  </h1>
                </div>
                <div className="col-6 d-flex">
                  <FaShoppingBag className="" size={30}></FaShoppingBag>
                  <h1 className="text-white text-2xl pl-4">
                    {Bagagesref.current}
                  </h1>
                </div>
              </div>
              <Card.Text>
                <span className="text-gray-400  text-xs">
                  Deplacement de départ :{" "}
                </span>{" "}
                <br />
                {chearchOffreref.current?.Depart}
              </Card.Text>
              <Card.Text>
                <span className="text-gray-400  text-xs">Destination :</span>
                <br />
                {chearchOffreref.current?.Destination}
              </Card.Text>
              <button
                onClick={() => setModalShow(true)}
                className=" hover:bg-gray-100  font-semibold bg-yellow-600 text-white py-2 px-8 rounded-lg shadow"
              >
                Réserver
              </button>
              <MydModalWithGrid
                show={modalShow}
                onHide={() => setModalShow(false)}
                validerReservation={validerReservation}
                setVille={setVille}
                setEmail={setEmail}
                setTele={setTele}
                setNomEtPrenom={setNomEtPrenom}
              />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
