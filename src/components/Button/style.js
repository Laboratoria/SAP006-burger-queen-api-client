import styled from "styled-components";
import PropTypes from 'prop-types';

const GeneralButton = styled.button`
    background-color:${ props => props.secondary ? 'white': 'rgb(163, 210, 206)'};    
    width: ${ props => props.secondary ? '150px': '252px'};
    height: 42px;
    font-size: ${(props) => props.primary ? '1.3em' : '1em'};
    font-weight: 600;
    text-align:center;    
    text-transform:uppercase;
    justify-content:center;
    border:none;
    border-radius:10px;
    cursor: pointer;
    a {
        color:black;
        font-weight:bold;
        text-decoration: none;
        margin: ${ props => props.primary ? '1vh': '20vh'};
        /* font-size: ${(props) => props.secondary ? '1.3em' : '1.5em'}; */
        }  
`

GeneralButton.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary'])
}

GeneralButton.defaultProps = {
    variant: 'primary',
}

export default GeneralButton;
