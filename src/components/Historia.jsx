import React from "react";
import data from './data.json'
import Historial from './Historial'
import Botones from './Botones'

let historialOpcionesElegidas = [];

class Historia extends React.Component {
  constructor() {
    super();
    this.state = {
      opcion: data[0],
      seleccionAnterior: "",
      nivel: 2
    }
  }

  shouldComponentUpdate() {
    if (this.state.nivel > 5) {
      alert('¡Has finalizado tu historia!')
      return false
    } else {
      return true
    }
  }

  handleClick = (opcionSeleccionada) => {
    this.setState({ nivel: this.state.nivel + 1 })

    let id = this.state.nivel + opcionSeleccionada.toLowerCase();
    let nuevaOpcion = data.find(caminoActual => caminoActual.id === id)

    if (this.state.seleccionAnterior) {
      historialOpcionesElegidas= [...historialOpcionesElegidas, this.state.seleccionAnterior]
    }

    this.setState({ opcion: nuevaOpcion, seleccionAnterior: opcionSeleccionada })
  }

  render() {
    return (
      <div className="App">
        <div className="layout">
          <h1 className="historia">{this.state.opcion.historia}</h1>
          <Botones actualizarOpciones={this.handleClick} opcionActual={this.state.opcion} />
          <Historial historial={historialOpcionesElegidas} opcionAnterior={this.state.seleccionAnterior} />
        </div>
      </div>
    );
  }
}

export default Historia;