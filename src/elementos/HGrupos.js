import styled, {css} from 'styled-components';

const H1 = styled.h1`
    text-align: center;
    font-weight: bolder;
    ${props => props.iniciada && css`
        color: #00d1f7;
    `}
`;

export default H1; 