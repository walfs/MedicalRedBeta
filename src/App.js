import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navegador from './pages/00HeadApp/00navegadorPrincial/Navegador';
import { BrowserRouter } from 'react-router-dom';
import Carousel from './pages/01BodyApp/03nuestrosServiciosCarrusel/nuestrosServiciosCarrusel';
import SobreNosotros from './pages/01BodyApp/04sobreNosotros/sobreNosotros';
import NuestrosClientes from './pages/01BodyApp/05nuestrosClientes/nuestrosClientes';
import CuidaQuienQuieres from './pages/01BodyApp/06cuidaQuienQuieres/cuidaQuienQuieres';
import PlanesMedicalRed from './pages/01BodyApp/07listaDePlanes/listaDePlanes.jsx';
import WebPayPlus from './pages/01BodyApp/08IntegracionWebPay/integracionWebPay';
import CuidadoPersonal from './pages/01BodyApp/09cuidadoPersonal/cuidadoPersonal';
import ContactPage from './pages/01BodyApp/11contacto/contactoMedicalRed';
import InputEmail from './pages/01BodyApp/contactoEmail/contactoEmail';
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
     <Carousel/> 
     <SobreNosotros/>
     <NuestrosClientes/>
     <CuidaQuienQuieres/> 
     <InputEmail/>
     <PlanesMedicalRed/>
     <CuidadoPersonal/>
     <WebPayPlus/> 
     <ContactPage/>

     {/* 
 
    
   
    <tuPlanIdeal/>
    
     */}
   
    
     {/*  */}
     {/**/}
     {/* */}
     {/* <RedesSociales/> */}
     {/*  */}
   
    
     </body>


    <footer className="App-footer">
<FooterMedicalRed/>
  
   </footer>

   
    </div>
    
  );
}

export default App;
