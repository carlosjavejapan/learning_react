import styled from 'styled-components';

const UL = styled.ul`
    list-style: none;
    display: ${props => props.flex ? 'flex' : 'block' };
    flex-wrap: wrap;
    li {
        margin-top: 10px;
        padding: 5px 10px;
        background: #f5f5f5;
        margin-right: 5px;
        border-radius: 10px;
        box-shadow: 2px 1px 1px rgba(0,0,0, 0.3);
    }
`;

export default UL;