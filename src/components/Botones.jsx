import React from 'react';

class Botones extends React.Component {

    render() {
        const { actualizarOpciones, opcionActual: opcionSeleccionada } = this.props;

        return (
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className="botones" onClick={(e) => actualizarOpciones(e.target.id)}>A</button>
                    <h2>{opcionSeleccionada.opciones.a}</h2>
                </div>
                <div className="opcion">
                    <button id="B" className="botones" onClick={(e) => actualizarOpciones(e.target.id)}>B</button>
                    <h2>{opcionSeleccionada.opciones.b}</h2>
                </div>
            </div>
        )
    }
}

export default Botones;