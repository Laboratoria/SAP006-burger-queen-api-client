import styled from "styled-components";

const GeneralButton = styled.button`
    justify-content:center;
    text-align:center;    
    width: ${ props => props.secondary ? '150px': '252px'};
    height: 42px;
    border:none;
    border-radius:10px;
    margin: ${ props => props.secondary ? '10px': '80px 0px 50px 50px'};
    text-transform:uppercase;
    background-color:${ props => props.secondary ? 'white': 'rgb(163, 210, 206)'};    
        a {
            color:black;
            font-weight:bold;
            text-decoration: none;
            font-size:18px;
        }  
`
export default GeneralButton;
