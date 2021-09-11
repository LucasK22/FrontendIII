import React from "react";
import data from './data.json'
import Historial from './Historial'
import Opciones from './Botones'

const arrayHistorial = [];

class Historia extends React.Component {
  constructor() {
    super();
    this.state = {
      opcion: data[0],
      opcionAnterior: "",
      nivel: 2
    }
  }

  shouldComponentUpdate() {
    if (this.state.nivel > 5) {
      alert('Has llegado al final del camino!')
      return false
    } else {
      return true
    }
  }

  handleClick = (opcion) => {
    this.setState({ nivel: this.state.nivel + 1 })
    let id = this.state.nivel + opcion.toLowerCase();
    let nuevaOpcion = data.find(camino => camino.id === id)
    if (this.state.opcionAnterior) {
      arrayHistorial.push(this.state.opcionAnterior)
    }
    this.setState({ opcion: nuevaOpcion, opcionAnterior: opcion })
  }

  render() {
    return (
      <div className="App">
        <div className="layout">
          <h1 className="historia">{this.state.opcion.historia}</h1>
          <Opciones actualizarOpciones={this.handleClick} opcionActual={this.state.opcion} />
          <Historial historial={arrayHistorial} opcionAnterior={this.state.opcionAnterior} />
        </div>
      </div>
    );
  }
}

export default Historia;