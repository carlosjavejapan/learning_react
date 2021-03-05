import React, {Component} from 'react';

// Utilizando CLass
class Contador extends Component {

    constructor(props){
        super(props);
        this.state = { contador: 0}
    }

    componentDidMount(){
        console.log('El componente se cargo en el DOM');
        // con esto podemos llamar a API ejemplo
    }

    componentDidUpdate(propiedadAnterior, estadoAnterio){
        console.log('El componente se Actualizo');
        console.log('La propiedad anterior del conponente', propiedadAnterior);
        console.log('El estado anterior del componente', estadoAnterio);
    }

    componentWillUnmount(){
        console.log('adios componente')
        // con esto podemos acabar a API ejemplo
    }

    incrementar(cantidad){
        // console.log('+1');
        this.setState((estadoAnterior) => {
            return {
                contador : estadoAnterior.contador + cantidad
            }
        });
    }
    disminuir(cantidad){
        // console.log('-1');
        this.setState((estadoAnterior) => {
            return {
                contador : estadoAnterior.contador - cantidad
            }
        });
    }
    render(){
        return(
            <div>
                <h1>Contador: {this.state.contador} </h1>
                <button onClick={() => {this.incrementar(this.props.cantidadAIncrementar)}}>Incrementar</button>
                <button onClick={() => {this.disminuir(this.props.cantidadADisminuir)}}>Disminuir</button>
            </div>
            
        );
    }
}

export default Contador;
