import React, {useState, useEffect} from 'react';
//import styles from './ContadorFuncional.module.css';
import Boton from './../elementos/Boton';


// Utilizando class functional
const ContadorFunctional = (props) => {

    const [cuenta, cambiarCuenta] = useState(0);

    // componentDidMount y componentDidUpdate
    // Este hook se ejecuta cada ciclo de renderizado
    // useEffect(() => {
    //     console.log('esto se renderizzo')
    // });

    // componentDidMount
    // se ejecuta solamente al primer renderizado
    // useEffect(() => {
    //     console.log('esto se el componente se cargo por primera vez')
    // }, [])

    // Se ejecuta cunado cambia el estado de la dependencia que pasemos, en este caso 'contador'
    // useEffect(() => {
    //     console.log('EL estado del contador cambio')
    // }, [cuenta]);

    useEffect(() => {
        return () => {
            console.log('Adiso Componente!');
        }
    }, [])

    const incrementar = (cantidad) => cambiarCuenta( cuenta + cantidad)
    const disminuir = (cantidad) => cambiarCuenta(cuenta - cantidad)

    return (
        <div>
            <h1>Contador: {cuenta} </h1>
            {/* <button className={styles.boton} onClick={() => {incrementar(props.cantidadAIncrementar)}}>Incrementar</button>
            <button className={styles.boton} onClick={() => {disminuir(props.cantidadADisminuir)}}>Disminuir</button> */}

            {/* Utilizamos Boton de styled components y ponemos propiedad negro */}
            <Boton negro mr10 onClick={() => {incrementar(props.cantidadAIncrementar)}}>Incrementar</Boton>
            <Boton negro onClick={() => {disminuir(props.cantidadADisminuir)}}>Disminuir</Boton>
        </div>
    );
}
 
export default ContadorFunctional;