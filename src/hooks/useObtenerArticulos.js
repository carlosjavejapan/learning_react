import {useState, useEffect} from 'react';

const useObtenerArticulos = () => {

    // crear un estado = 'articulo' que en este vamos a guardar nuestros articulos && y establecer los articulos con : 'establecerArticulo'
    // Y cuando carge el articulo no queremos que cargue eun articulo por eso useState([])lo ponemos vacio
    const [articulo, establecerArticulo] = useState([]);

    // Otro useState para cargar una palabra de duracion 3 segundo hasta que aparescan los Articulos
    const [cargando, establecerCargando] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            establecerArticulo([
                {
                    id: 1,
                    titulo: 'Titulo uno del Articulo'
                },
                {
                    id: 2,
                    titulo: 'Titulo dos del Articulo'
                },
                {
                    id: 3,
                    titulo: 'Titulo tres del Articulo'
                }
            ]);
            establecerCargando(false);
        }, 3000);
    }, []);

    return [articulo,cargando];
}
 
export default useObtenerArticulos;