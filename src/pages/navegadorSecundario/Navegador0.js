import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {faTwitter, faFacebook, faInstagram, faWhatsapp} from '@fortawesome/fontawesome-free-brands';
import {faPhone} from '@fortawesome/free-solid-svg-icons';




class Navegador0 extends Component {
  render() {

    return (
     
    
<Navbar bg="black" variant="light">
<Nav className="mr-auto">
  <Nav  href="#home"> Resolvemos tus dudas: (+56954350693) </Nav> <FontAwesomeIcon className ='font-awesome' icon={faPhone} />
</Nav>
<Nav>
<Nav.Link href="#">Asistencia</Nav.Link>
</Nav>

<Button href="#">Ingreso de clientes</Button>

</Navbar>



    );
  }
}

export default Navegador0;


