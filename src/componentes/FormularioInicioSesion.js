import React, {useState} from 'react';
import styles from './FormularioInicioSesion.module.css';
import Boton from './../elementos/Boton';
import H1 from './../elementos/HGrupos';

const FormularioInicioSesion = (props) => {

    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    // const onChangeUsuario = (event) => {
    //     cambiarUsuario(event.target.value);
    // };
    // const onChangePassword = (event) => {
    //     cambiarPassword(event.target.value);
    // };

    const onChange = (event) => {
        if (event.target.name === 'usuario') {
            cambiarUsuario(event.target.value);
        } else if (event.target.name === 'password') {
            cambiarPassword(event.target.value);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (usuario === 'carlos' && password === '123') {
            props.cambiaEstadoSesion(true);
        } else {
            alert('Datos Incorrectos')
            cambiarUsuario('');
            cambiarPassword('');
        }
    }

    return (
        <form action="" onSubmit={onSubmit} className={styles.formulario}>
            {/* <p>Usuario:{usuario}</p>
            <p>Contrasena:{password}</p> */}
            <H1>No has iniciado sesion</H1>
            <div>
                <label htmlFor="usuario" className={styles.label}>usuario</label>
                <input
                    type="text"
                    name="usuario"
                    id="usuario"
                    value={usuario}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            <div>
                <label htmlFor="password" className={styles.label}>Contrasena</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            {/* <button type="submit" className={styles.boton}>Iniciar Sesion</button> */}
            <div>
                <Boton largo type="submit">Iniciar Sesion</Boton>
            </div>
        </form>
    );
}
 
export default FormularioInicioSesion;