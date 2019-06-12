import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBContainer,MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactPage = () => {
  return (

    <MDBContainer className="mt-5 p-3" style={{ backgroundColor: "#fff" }}>

    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contáctenos
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Si estas interesado en uno de nuestros planes y aún tienes dudas,
         escríbenos mediante el formulario de contacto o bien puedes escribirnos mediante nuestras redes sociales, Facebook, Instagram, Twitter, las encuentras más abajo.
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Escríbanos:
                </h3>
              </div>
              <p className="dark-grey-text">
             Le responderemos lo antes posible
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Su nombre"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Su correo electrónico"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Asunto"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Mensaje"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Enviar</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.596727175087!2d-70.40437118564921!3d-23.654609084636697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96afd513d23d4f91%3A0x7422bddddc643db8!2sManuel+Antonio+Matta+1839%2C+Antofagasta%2C+Regi%C3%B3n+de+Antofagasta!5e0!3m2!1ses-419!2scl!4v1560140505403!5m2!1ses-419!2scl"
              title="Ubicación MedicalRed Antofagasta"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          
        </MDBCol>
      </MDBRow>
    </section>
    </MDBContainer>
  );
}

export default ContactPage;