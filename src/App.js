import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navegador from './pages/00HeadApp/00navegadorPrincial/Navegador';
import { BrowserRouter } from 'react-router-dom';
import SobreNosotros from './pages/01BodyApp/04sobreNosotros/ContenedorCuatro';
import NuestrosClientes from './pages/01BodyApp/05nuestroClientes/ContenedorCinco';
import CuidaQuienQuieres from './pages/01BodyApp/06cuidaQuienQuieres/ContenedorSeis';
//import tuPlanIdeal from './pages/01BodyApp/02tuPlanIdeal/tuPlanIdeal';
// import Carousel from './pages/01BodyApp/03nuestrosServiciosCarrusel/ContenedorTres';

// import PlanesMedicalRed from './pages/01BodyApp/07listaDePlanes/ContenedorSiete';
// import WebPayPlus from './pages/01BodyApp/08IntegracionWebPay/ContenedorOcho';
// import CuidadoPersonal from './pages/01BodyApp/09cuidadoPersonal/ContenedorNueve';
// import RedesSociales from './pages/01BodyApp/10RedesSociales/ContenedorDiez';
// import ContactPage from './pages/01BodyApp/11contacto/ContenedorOnce';
import FooterMedicalRed from './pages/03FooterApp/footerMedicalRed';



function App() {
  return (
    
    <div className="App">
   
    <header className="App-header">  
       <BrowserRouter>
    <Navegador/>
       </BrowserRouter> 
    </header>
     

     <body className="App-body">
       
     <SobreNosotros/>
     <NuestrosClientes/>
     <CuidaQuienQuieres/> 



     {/* 
 
     <Carousel/> 
   
    <tuPlanIdeal/>
    
    
  
     */}
   
    
     {/* <PlanesMedicalRed/> */}
     {/* <WebPayPlus/> */}
     {/* <CuidadoPersonal/> */}
     {/* <RedesSociales/> */}
     {/* <ContactPage/> */}
   
    
     </body>


    <footer className="App-footer">
<FooterMedicalRed/>
  
   </footer>

   
    </div>
    
  );
}

export default App;
