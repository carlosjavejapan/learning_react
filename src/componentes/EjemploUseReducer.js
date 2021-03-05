import React, {useReducer} from 'react';
import Boton from './../elementos/Boton'

// Accion
// {tipo: 'INCREMENTAR'}

// Estado Inicial (contadorInicial)
const contadorInicial = {contador: 0};

// Function Reducer (reducer) / accion es el tipo
const reducer = (estado, accion) => {
    switch (accion.tipo) {
        case 'INCREMENTAR':
            return {contador: estado.contador + 1}
        case 'DESMINUIR':
            return {contador: estado.contador - 1}
        case 'REINICIAR':
            return {contador: 0}
        default:
            return estado;
    }
}

const EjemploUseReducer = () => {

    // Llamamos a useReducer nos da [estado y una funcion dispach]
    const [estado, dispach] = useReducer(reducer, contadorInicial);

    return ( 

        <div>
            <h1>Contador: {estado.contador} </h1>

            <Boton 
                negro
                mr10
                onClick={() => dispach({tipo: 'INCREMENTAR'})}
            >
                Incrementar
            </Boton>
            
            <Boton
                negro
                mr10
                onClick={() => dispach({tipo: 'DESMINUIR'})}
            >
                Disminuir
            </Boton>

            <Boton
                negro
                onClick={() => dispach({tipo: 'REINICIAR'})}
            >
                Reiniciar
            </Boton>
        </div>

    );
}
 
export default EjemploUseReducer;