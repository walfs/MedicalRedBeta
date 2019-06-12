import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import './sobreNosotros.css';
const SobreNosotros = () => {
  return (
    <MDBCard className="my-5 cardboxshadowoff px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive orangemr-text font-weight-bold text-center my-5">
Sobre Nosotros        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover >
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="user-md" className="pr-2" />
                Médicos 
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Profesionales y especialistas</strong>
            </h3>
            <p>
            Todas las atenciones son realizadas por profesionales
            y especialistas en Salud, con alta experiencia en su cargo.
            </p>
            <p>
              por  {""}
              <a href="#!">
                Williams Luco
              </a>
              , 8/10/2019
            </p>
            <MDBBtn color="success" size="md" className="waves-light ">
              Leer más
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="building" className="pr-2" />
                Compañía
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Somos una compañía regional</strong>
            </h3>
            <p>
            Prestadora de servicios especializados en atención domiciliaria.​
            </p>
            <p>
              por {""}
              <a href="#!">
                Williams Luco
              </a>
              , 08/10/2019
            </p>
            <MDBBtn
              color="pink"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Leer más
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="clinic-medical" className="pr-2" />
                Objetivo
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Uno de nuestros objetivos</strong>
            </h3>
            <p>
            Es otorgar estos servicios dentro de un
             ambiente ético de exigencia y garantía de calidad.​
            </p>
            <p>
              por {""}
              <a href="#!">
                Williams Luco
              </a>
              , 10/12/2019
            </p>
            <MDBBtn color="indigo" size="md" className="waves-light ">
              Leer más
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default SobreNosotros;