import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

class tuPlanIdeal extends Component {
    render() {
      return (

<Jumbotron>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Descubre tu plan ideal</h1>
    <p class="lead">En MedicalRed contamos con los mejores servicios de salud para ti.</p>
  </div>
  <Button variant="primary">Ver planes</Button>
</div>
</Jumbotron>

);
}
}

export default tuPlanIdeal;