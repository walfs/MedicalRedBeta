import React from "react";
import {  MDBRow, MDBCol,MDBContainer, MDBIcon } from "mdbreact";

const WebPayPlus = () => {
  return (
<MDBContainer className="mt-5 p-3" style={{ backgroundColor: "#fff" }}>
        <section className="my-5">
            <h2 className="h1-responsive orangemr-text font-weight-bold text-center my-5">
              Obtén tu suscripción de forma rápida y segura
            </h2>
            <p className="lead grey-text w-responsive text-center mx-auto mb-5">
            Al obtener tu suscripción obtendrás una credencial exclusiva de MedicalRed, se te notificarán 
            tus próxima fecha de pago para que disfrutes de todos los servicios que ofrecemos, además 
            podrás cancelar tu suscripción online cuando quieras.
            </p>
    
            <MDBRow>
              <MDBCol lg="5" className="text-center text-lg-left">
                <img
                  className="img-fluid"
                  src="https://live.staticflickr.com/65535/48033765983_a9fc2fa7cb_b.jpg"
                  alt=""
                />
              </MDBCol>
              <MDBCol lg="7">
                <MDBRow className="mb-3">
                  <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" className="indigo-text" />
                  </MDBCol>
                  <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Cómodo</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      enim ad minima veniam, quis nostrum exercitationem ullam.
                      Reprehenderit maiores aperiam assumenda deleniti hic.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" className="indigo-text" />
                  </MDBCol>
                  <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Rápido</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      enim ad minima veniam, quis nostrum exercitationem ullam.
                      Reprehenderit maiores aperiam assumenda deleniti hic.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" className="indigo-text" />
                  </MDBCol>
                  <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Efectivo</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      enim ad minima veniam, quis nostrum exercitationem ullam.
                      Reprehenderit maiores aperiam assumenda deleniti hic.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </section>
</MDBContainer>


    // <MDBContainer className="mt-5 p-3" style={{ backgroundColor: "#fff" }}>

    // <section className="my-5">
    //     <h2 className="h1-responsive font-weight-bold text-center my-5">
    //       WebPayPlus
    //     </h2>
    //     <p className="lead grey-text w-responsive text-center mx-auto mb-5">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    //       ad minim veniam.
    //     </p>

    //     <MDBRow>
    //       <MDBCol md="4">
    //         <MDBRow className="mb-3">
    //           <MDBCol size="2">
    //             <MDBIcon
    //               icon="flag-checkered"
    //               size="2x"
    //               className="deep-purple-text"
    //             />
    //           </MDBCol>
    //           <MDBCol size="10">
    //             <h5 className="font-weight-bold mb-3">Cómodo</h5>
    //             <p className="grey-text">
    //               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //               Reprehenderit maiores nam, aperiam minima assumenda deleniti
    //               hic.
    //             </p>
    //           </MDBCol>
    //         </MDBRow>
    //         <MDBRow className="mb-3">
    //           <MDBCol size="2">
    //             <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
    //           </MDBCol>
    //           <MDBCol size="10">
    //             <h5 className="font-weight-bold mb-3">Rápido</h5>
    //             <p className="grey-text">
    //               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //               Reprehenderit maiores nam, aperiam minima assumenda deleniti
    //               hic.
    //             </p>
    //           </MDBCol>
    //         </MDBRow>
    //         <MDBRow className="mb-3">
    //           <MDBCol size="2">
    //             <MDBIcon icon="glass-martini" size="2x" className="deep-purple-text" />
    //           </MDBCol>
    //           <MDBCol size="10">
    //             <h5 className="font-weight-bold mb-3">Efectivo</h5>
    //             <p className="grey-text">
    //               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //               Reprehenderit maiores nam, aperiam minima assumenda deleniti
    //               hic.
    //             </p>
    //           </MDBCol>
    //         </MDBRow>
    //       </MDBCol>
    //       <MDBCol md="4" className="text-name">
    //         <img
    //           className="img-fluid"
    //           src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
    //           alt=""
    //         />
    //       </MDBCol>
    //       <MDBCol md="4">
    //         <MDBRow className="mb-3">
    //           <MDBCol size="2">
    //             <MDBIcon icon="heart" size="2x" className="deep-purple-text" />
    //           </MDBCol>
    //           <MDBCol size="10">
    //             <h5 className="font-weight-bold mb-3">Beloved</h5>
    //             <p className="grey-text">
    //               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //               Reprehenderit maiores nam, aperiam minima assumenda deleniti
    //               hic.
    //             </p>
    //           </MDBCol>
    //         </MDBRow>
    //         <MDBRow className="mb-3">
    //           <MDBCol size="2">
    //             <MDBIcon icon="bolt" size="2x" className="deep-purple-text" />
    //           </MDBCol>
    //           <MDBCol size="10">
    //             <h5 className="font-weight-bold mb-3">Rapid</h5>
    //             <p className="grey-text">
    //               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //               Reprehenderit maiores nam, aperiam minima assumenda deleniti
    //               hic.
    //             </p>
    //           </MDBCol>
    //         </MDBRow>
    //         <MDBRow className="mb-3">
    //           <MDBCol size="2">
    //             <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
    //           </MDBCol>
    //           <MDBCol size="10">
    //             <h5 className="font-weight-bold mb-3">Magical</h5>
    //             <p className="grey-text">
    //               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //               Reprehenderit maiores nam, aperiam minima assumenda deleniti
    //               hic.
    //             </p>
    //           </MDBCol>
    //         </MDBRow>
    //       </MDBCol>
    //     </MDBRow>
    //   </section>
    //   </MDBContainer>
  );
}

export default WebPayPlus;