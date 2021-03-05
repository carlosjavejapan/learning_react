import styled, {css} from 'styled-components';

const Boton = styled.button`
    background: #83d394;
    display: inline-block;
    padding: 20px;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: .3s ease all;

    //Queremos que el ancho sea dinamico, acceder a las propiedades y si tiene la propiedad largo 100% si no auto
    width: ${props => props.largo ? '100%' : 'auto' };
    &:hover {
        background: #44a559;
        color: #fff;
    };

    // queremos acceder a las propiedeades, si tiene la propiedad negro entonces quiero que me ejecutes el codigo css
    ${props => props.negro && css`
        background: #444;
        color: #fff;
    `}

    ${props => props.mt10 && css`margin-top: 10px;`}
    ${props => props.mr10 && css`margin-right: 10px;`}
`;

export default Boton;