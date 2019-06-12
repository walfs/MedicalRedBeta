// import React from "react";
// import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
// "mdbreact";

// const Carousel = () => {
//   return (
//     <MDBContainer className="mt-5 p-3" style={{ backgroundColor: "#fff" }}>
//     <MDBCarousel
//       activeItem={1}
//       length={3}
//       showControls={true}
//       showIndicators={true}
//       className="z-depth-1"
//     >
//       <MDBCarouselInner>
//         <MDBCarouselItem itemId="1">
//           <MDBView>
//             <img
//               className="d-block w-100"
//               src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
//               alt="First slide"
//             />
//           <MDBMask overlay="black-light" />
//           </MDBView>
//           <MDBCarouselCaption>
//             <h3 className="h3-responsive">Light mask</h3>
//             <p>First text</p>
//           </MDBCarouselCaption>
//         </MDBCarouselItem>
//         <MDBCarouselItem itemId="2">
//           <MDBView>
//             <img
//               className="d-block w-100"
//               src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
//               alt="Second slide"
//             />
//           <MDBMask overlay="black-strong" />
//           </MDBView>
//           <MDBCarouselCaption>
//             <h3 className="h3-responsive">Strong mask</h3>
//             <p>Second text</p>
//           </MDBCarouselCaption>
//         </MDBCarouselItem>
//         <MDBCarouselItem itemId="3">
//           <MDBView>
//             <img
//               className="d-block w-100"
//               src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
//               alt="Third slide"
//             />
//           <MDBMask overlay="black-slight" />
//           </MDBView>
//           <MDBCarouselCaption>
//             <h3 className="h3-responsive">Slight Mast</h3>
//             <p>Third text</p>
//           </MDBCarouselCaption>
//         </MDBCarouselItem>
//       </MDBCarouselInner>
    
//     </MDBCarousel>
//     </MDBContainer>
  
//   );
// }

// export default Carousel;
import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer } from "mdbreact";

const Carousel = () => {
  
  return (
    <MDBContainer className="mt-5 p-3" style={{ backgroundColor: "#f4f6f8" }} >
       <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Beneficios vigentes que tenemos para ti
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Descubre los beneficios que tenemos para ti, constantemete lanzamos ofertas atractivas para que puedas disfrutar al máximo.
          </p>
      <MDBCarousel activeItem={1} length={3} showControls={true} interval={3000} showIndicators={true} thumbnails className="z-depth-1 ">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg" alt="First slide" />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" alt="Second slide" />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide" />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Carousel;