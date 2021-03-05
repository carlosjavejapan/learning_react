import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';
// import ContadorClass from './componentes/ContadorClass';
import ContadorFunctional from './componentes/ContadorFuncional';
import './index.css';
import Boton from './elementos/Boton';
import EjemploUserReducer from './componentes/EjemploUseReducer';
import Blog from './componentes/Blog';




const App = () => {

    const [sesion, cambiaEstadoSesion] = useState(true);

    // let sesion = true;
    return (
        <div className="contenedor">
            {/* si sesion es true entonses <div> <h1 .... de lo contrario (<p>No has iniciado sesion</p>) */}
            {sesion === true ?
            <div>
                <Usuario/>
                <Blog />
                <EjemploUserReducer />
                {/* <ContadorFunctional cantidadAIncrementar={100} cantidadADisminuir={50}/> */}
                {/* <ContadorClass cantidadAIncrementar={10} cantidadADisminuir={5}/> */}
                {/* <button onClick={() => cambiaEstadoSesion(false)}>Cerrar sesion</button> */}
                <Boton largo mt10 onClick={() => cambiaEstadoSesion(false)}>Cerrar Sesion</Boton>
            </div>
            :
            <div>
              <FormularioInicioSesion cambiaEstadoSesion={cambiaEstadoSesion}/>
              
              {/* <button onClick={() => {
                  cambiaEstadoSesion(true)
              }}>Iniciar sesion</button> */}
            </div>
            }
        </div>
    );  
};

// const verificarSesion = (sesion) => {
//     if (secion === true) {
//         return JSX;
//     } else {
//         return <h1>No has iniciado sesion</h1>
//     }
// }

ReactDOM.render(<App />,document.getElementById('root'));
// ReactDOM.render(verificarSesion(sesion),document.getElementById('root'));



