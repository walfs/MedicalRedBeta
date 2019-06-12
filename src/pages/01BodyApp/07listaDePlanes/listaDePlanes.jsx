import React from "react";
import './listaDePlanes.css';


import {MDBContainer} from 'mdbreact';


const PlanesMedicalRed = () => {
  return (
   <MDBContainer className="mt-5 p-3" style={{ backgroundColor: "#fff" }}>


<h2 className="h1-responsive orangemr-text text-center font-weight-bold my-5"> Tenemos el plan ideal para ti</h2> 
<blockquote className="blockquote- text-center">
    <p className="mb-0">Hemos creado los planes pensando en darte una mayor flexibilidad, comodidad y privacidad.</p>
    <footer className="blockquote-footer mb-3">Descubre <cite title="Source Title">tu plan ideal</cite></footer>
  </blockquote>

 <div class="pricing-box-container">
	<div class="pricing-box p-3 mt-5 text-center">
		<h5>Bronce</h5>
		<p class="price"><sup>$</sup>30.000<sub>/mes</sub></p>
		<ul class="features-list">
			<li><strong> Atención mensaul sin costo de médico general</strong></li>
			<li>Atención con especialista <strong>$10.000</strong> </li>
			<li><strong>Hasta 60% dcto</strong> En clinica dental, centro kinesiológico, laboratorio médico, farmacia local y óptica</li>
		<li>Diseñado para las familias cotizantes que necesitan atención domiciliaria.</li>
		</ul>
		<button class="btn-pricemr">Comenzar ahora</button>
	</div>

	<div class="pricing-box  p-3 mt-5  pricing-box-bg-image text-center">
		<h5>Platinum</h5>
		<p class="price"><sup>$</sup>30.000<sub>/mes</sub></p>
		<ul class="features-list">
			<li> Atención mensaul <strong>sin costo </strong> de médico general</li>
			<li><strong>Atención médica domiciliaria</strong> </li>
			<li>Atención con especialista <strong>$8.000</strong> </li>
			<li><strong>Hasta 60% dcto</strong> En clinica dental, centro kinesiológico, laboratorio médico, farmacia local y óptica</li>
			<li>Diseñado para las familias cotizantes que necesitan atención domiciliaria.</li>
		
		</ul>
		<button class="btn-pricemr">Comenzar ahora</button>
	</div>

	<div class="pricing-box  p-3 mt-5  text-center">
		<h5>Gold</h5>
		<p class="price"><sup>$</sup>20.000<sub>/mes</sub></p>
		<ul class="features-list">
		<li> Atención mensaul <strong>sin costo </strong> de médico general</li>
		<li>Atención con especialista <strong>$8.000</strong> </li>
		<li><strong>Hasta 60% dcto</strong> En clinica dental, centro kinesiológico, laboratorio médico, farmacia local y óptica</li>
			<li>Diseñado para las familias cotizantes que no necesitan atención domiciliaria.</li>
		</ul>
		<button class="btn-pricemr">Comenzar ahora</button>
	</div>
</div>  

  </MDBContainer>
  
  );
}

export default PlanesMedicalRed;