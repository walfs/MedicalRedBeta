import React from "react";
import {  MDBRow, MDBCol, MDBCard,  MDBCardBody, MDBIcon } from "mdbreact";
import './nuestrosClientes.css';

const NuestrosClientes= () => {
  return (
    <MDBCard className="my-5 px-5 cardboxshadowoff pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive orangemr-text font-weight-bold my-5">
          Nuestros clientes son nuestra prioridad
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
          Todas las atenciones son realizadas por profesionales y especialistas en Salud, con alta experiencia en su cargo. 
          Uno de los objetivos más importantes es asegurar que adultos mayores, discapacitados y 
          pacientes en general, reciban una atención de calidad, personal y un cuidado compasivo.
          </p>
          <MDBRow center>
            <MDBCol  lg="3" md="3" className="mb-lg-0 mb-5">
            <p className="text-uppercase blue-text">MedicalRed Chile</p>
              
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default NuestrosClientes;