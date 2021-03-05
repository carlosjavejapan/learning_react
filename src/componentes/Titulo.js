import React from 'react';
import H1 from './../elementos/HGrupos';

const Titulo = ({usuario = 'usuario', color = 'grey'}) => {
    // const nombre = 'carlos';
    // const color = 'red';
    // style={{color: color}}
    return ( <H1 iniciada className="titulo">Hola {usuario}</H1>);
}
// const TituloAzul = () => {
//     const nombre = 'carlos';
//     const color = 'blue';
//     return ( 
//         <h1 className="titulo" style={{color: color}}>Hola {nombre}</h1>
//      );
// }
 
export {Titulo};
