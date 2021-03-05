import React from 'react';
import {Titulo} from './Titulo';
import styled from 'styled-components';
import List from './../elementos/List';


const  Usuario = () => {
    const pais = '';
    const amigos = [ 'miguel', 'ever', 'carlos', 'manuel', 'miguel']
    
    return (
        <div>
            <Titulo usuario = 'Carlos' />
            <Titulo usuario = 'Akemi' color = 'pink' />
            
            {/* si existe un pais muestra <p>Tu eres de {pais}</p> de lo contrario nada*/}
            {pais && <p>Tu eres de {pais}</p>}
            <Parrafo>Tu s amigos son:</Parrafo>
            <List flex>
                {amigos.map((persona, index) => {
                    return <li key={index}>{persona}</li>
                })}
                {/* o mas compacta es lo mismo de arriba */}
                {amigos.map((persona, index) =>  <li key={index}>{persona}</li> )}
            </List>
            <Parrafo>Que tengas un buen dia</Parrafo>
        </div>
    );

}

const Parrafo = styled.p`
    margin: 20px 0;
`;
 
export default Usuario;