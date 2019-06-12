
import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBInput,MDBIcon,MDBCardBody, MDBMask, MDBView, MDBBtn } from "mdbreact";
import './contactoEmail.css';

const InputEmail = () => {
  return (
      
    <MDBCard  className="fondoemail">
      <MDBCardBody>
      
        <MDBRow>
          <MDBCol lg="5" xl="4">
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" xl="8">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Solicita más información <strong className="orangemr-text" >Gratis</strong></strong>
            </h3>
            <p className="dark-grey-text">
              Comienza con tu suscripción de forma segura y clara, para ello si estas interesado ingresa tu correo electronico
              para que recivas más información detallada. Al ingresar tu correo electrónico, aceptas recibir correos electrónicos de marketing por parte de MedicalRed.
            </p>
            {/* <p>
            <MDBInput label="Correo electrónico"  className="w-50 " background icon="envelope" />
            </p>
            <MDBBtn color="primary" size="md">
             Comenzar ahora
            </MDBBtn>
            *Captacha */}
             <form>
           
            <div className="grey-text">
              <MDBInput
                label="Tu nombre"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Dirección de correo electrónico"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <div >
              <MDBBtn outline color="secondary">
                Enviar <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
              *Captacha
            </div>
            </div>
            
          </form>
          </MDBCol>
        </MDBRow>
       
      </MDBCardBody>
    </MDBCard>
  );
}

export default InputEmail;









