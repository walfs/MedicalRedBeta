import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon } from "mdbreact";


const FooterMedicalRed = () => {
  return (
    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "#6351ce" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 text-center white-text">
              ¡Únete a la conversación! particípa y comparte  </h6>
            </MDBCol>
            <MDBCol md="6" lg="6" className="text-center text-md-right">
              <a href="https://www.facebook.com/medicalredchile" className="fb-ic ml-0">
              <MDBIcon size="2x" fab icon="facebook-square" />  &nbsp;
              </a>&nbsp;&nbsp;
              <a href="https://www.twitter.com/medicalredchile" className="tw-ic">
              <MDBIcon size="2x" fab icon="twitter-square" /> </a>&nbsp;&nbsp;
              <a href="https://www.instagram.com/medicalredchile" className="ins-ic">
              <MDBIcon size="2x" fab icon="instagram" /> </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>MedicalRed</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "100px" }} />
            <p>
              Nuestra misión es otorgar atención médica dentro de un ambiente ético de exigencia y garantía de calidad para satisfacer oportunamente las necesidades de nuestros clientes.
            </p>
           
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Planes</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!" >Platinum</a>
            </p>
            <p>
              <a href="#!" >Gold</a>
            </p>
            <p>
              <a href="#!" >Bronce</a>
            </p>
            
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Enlaces</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "70px" }} />
            <p>
              <a href="#!"  >Tú cuenta</a>
            </p>
            <p>
              <a href="#!"  >Registrarse</a>
            </p>
            <p>
              <a href="#!"  >Blog</a>
            </p>
            <p>
              <a href="#!"  >Ayuda</a>
            </p>
            <p>
              <a href="#!"  >Mapa del sitio</a>
            </p>
            
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contacto</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "80px" }} />
            <p>
              <i className="fa fa-home mr-2"  />Antofagasta, Edificio Obelisco, oficina 1904
            </p>
            <p>
              <i className="fa fa-home mr-2" /> Tocopilla, Consulmed, Sucre #1789
            </p>
            <p>
              <i className="fa fa-envelope mr-2" /> contacto@medicalredchile.cl
            </p>
            <p>
              <i className="fa fa-phone mr-2" /> +(56)9 54350693 
            </p>
  
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    <MDBContainer>
     <p align = 'right'>
     &nbsp; <a href="#!"  >Politica de Privacidad </a> 
     &nbsp; <a href="#!"  >  Término de Servicio</a>
     &nbsp; <a href="#!"  >  Politica de Cookies</a>
      </p>
    </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#!"> Medicalredchile.cl </a>
        </MDBContainer>
      </div>
    </MDBFooter>
   
  );
}

export default FooterMedicalRed;