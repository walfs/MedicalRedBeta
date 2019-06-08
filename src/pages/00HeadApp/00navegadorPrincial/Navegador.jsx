
import React from 'react';
import { MDBNavbar, MDBDropdownItem,MDBDropdown,MDBDropdownMenu,MDBDropdownToggle, MDBNavbarBrand,MDBBtn,  MDBNavbarNav,MDBIcon, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './Navegador.css';




class Navegador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand  href="/">
              <img src={logo} width="90" height="30" alt=""/>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem >
                    <MDBNavLink to="#">Sobre Nosotros</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Precios</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Blog</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                {/* DropDown*/}
             <MDBDropdown >
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Tu plan ideal</span>
                </MDBDropdownToggle>
               <MDBDropdownMenu>
               <div className="drop">  <MDBDropdownItem href="#!">Ver todos los planes</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem href="#!">¿Cómo contrato mi plan?</MDBDropdownItem>
                  <MDBDropdownItem href="#!">¿Que beneficios obtengo?</MDBDropdownItem>
                  <MDBDropdownItem href="#!">¿Cúal es mi plan ideal?</MDBDropdownItem></div>
                </MDBDropdownMenu>
              </MDBDropdown>
              
               </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem >
                  
                    <MDBNavLink className="font-weight-bolder"  to="#"><div className="textAccesoClientes"><MDBIcon far icon="user" /> Acceso clientes </div></MDBNavLink>
                   
                  </MDBNavItem>
                  <MDBNavItem> 
                  <MDBBtn variant="primary" color="primary" size="md" active> Únete ahora</MDBBtn>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src="https://live.staticflickr.com/65535/47998712647_e74c398b7d_h.jpg">
            <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
              <h2><strong>¿AÚN NO FORMAS PARTE DE MEDICALRED?</strong></h2>
              <h5><strong>¡LLEGÓ LA ATENCIÓN MÉDICA DOMICILIARIA A TU CIUDAD!</strong></h5>
              <p>Nuestra prioridad es tu salud</p><br />
            <MDBContainer>
              <MDBBtn color="pink">Obtener credencial</MDBBtn>
              <MDBBtn outline color="info" > Más información</MDBBtn>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </header>

      </div>
    );
  }
}

export default Navegador;