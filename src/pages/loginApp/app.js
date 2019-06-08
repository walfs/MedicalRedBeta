import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navegador from '../navegadorPrincial/Navegador';
//import Navegador0 from './pages/navegadorSecundario/Navegador0.js';
import FooterMedicalRed from '../footer/footerMedicalRed';
import { BrowserRouter } from 'react-router-dom';
import ClassicFormPage from './login';

function App() {
  return (
    
    <div className="App">
   
    <header className="App-header">  
    <BrowserRouter>
    <Navegador/>
       </BrowserRouter> 
     
    
     
    </header>
     

     <body className="App-body">
   
    <ClassicFormPage/>
     </body>


    <footer className="App-footer">
<FooterMedicalRed/>
  
   </footer>

   
    </div>
    
  );
}

export default App;
