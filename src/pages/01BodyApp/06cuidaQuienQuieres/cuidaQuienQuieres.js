import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";

class CuidaQuienQuieres extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(135).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(128).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(133).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(131).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(130).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(132).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(134).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(1).jpg',
  ]
}

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;

  return images.map(imageSrc => {
    photoIndex++;
    const privateKey = photoIndex;
    return (
      <MDBCol md="3" key={photoIndex}>
        <figure>
          <img
            src={imageSrc}
            alt="Gallery"
            className="img-fluid z-depth-1"
            onClick={() =>
              this.setState({ photoIndex: privateKey, isOpen: true })
            }
          />
        </figure>
      </MDBCol>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
    <MDBContainer className="mt-5 p-3" style={{ backgroundColor: "#fff" }}>
      <h2 class="h1 text-center text-uppercase orangemr-text font-weight-bold pt-5 mb-3 mt-5">Cuida a quien más quieres</h2>
      <p class="text-center text-uppercase font-weight-bold">no descuides tu salud</p>
      <p class="section-description text-center mt-5 pt-2">MedicalRed Chile ofrece distintos tipos de servicios para 
      brindarte una atención como la mereces, a tiempo y de calidad. No descuides la salud de los que más quieres.</p>
      <div className="mdb-lightbox p-3">
        <MDBRow>
          {this.renderImages()}
        </MDBRow>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
          }
        />
      )}
     
    </MDBContainer>
    );
  }
}

export default CuidaQuienQuieres;