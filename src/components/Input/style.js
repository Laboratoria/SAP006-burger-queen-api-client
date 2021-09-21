import styled from "styled-components";
import PropTypes from 'prop-types';

const GeneralInput = styled.input`
    width:70%;
    height: ${(props) => props.secondary ? '40vh' : '5vh'};
    top: 200px;
    border-radius:10px;
    border: 1px solid #008F83;
    margin: 1vh;
    padding: 5px;
    font-weight: 500;
    text-transform: uppercase;

`
GeneralInput.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary'])
}

GeneralInput.defaultProps = {
    variant: 'primary',
}

export default GeneralInput;