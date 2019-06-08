import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn  } from "mdbreact";

const RedesSociales = () => {
  return (
    <section className="text-center my-5">
   

    <MDBRow>
      <MDBCol md="12" className="mb-4">
        <MDBCard
          className="card-image"
          style={{
            backgroundImage:
              "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
          }}
        >
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="purple-text">
                <MDBIcon icon="plane" />
                <strong> Compartamos</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>Nuestras redes sociales</strong>
              </h3>
              <p className="pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat fugiat, laboriosam, voluptatem, optio vero odio
                nam sit officia accusamus minus error nisi architecto
                nulla ipsum dignissimos. Odit sed qui, dolorum!
              </p>
              <MDBBtn social="fb">
          <MDBIcon fab icon="facebook-f" className="pr-1" /> Facebook
        </MDBBtn>
        <MDBBtn social="tw">
          <MDBIcon fab icon="twitter" className="pr-1" /> Twitter
        </MDBBtn>
        <MDBBtn social="ins">
          <MDBIcon fab icon="instagram" className="pr-1" /> Instagram
        </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
     
     
    </MDBRow>
  </section>
  );
}

export default RedesSociales;