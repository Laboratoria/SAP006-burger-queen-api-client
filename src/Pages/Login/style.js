import styled from "styled-components";

const LoginBox = styled.div`
    background: rgba(244, 244, 244, 0.52);
    height: 100%
    width: 100%
`
const Image = styled.img`
    height: 43vh;
    // width: 268px; 
    margin: 0vh 15vh;
`
const Title = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6em;
    font-style: normal;
    font-weight: 1000;
    text-align:center;
    text-transform: uppercase;
    color: #008F83;
    justify-content:center;
    margin: 8vh 0 5vh;
`
const Form = styled.form`
    justify-content:center;
    text-align:center;
`

const ButtonLogin = styled.button`
    width: 32vh;
    height: 20vh;
    margin: 0;
    display: flex;
`

const PhraseLogin = styled.p`
    font-family: 'Montserrat', sans-serif;
    justify-content: center;
    text-align: center;  
    font-size: 1.1em;
    margin: 4vh 3vh;
        a {
            color: black;
            font-weight: bold;
            text-decoration: none;
        }
`

export { Image, LoginBox, Title, Form, ButtonLogin, PhraseLogin};