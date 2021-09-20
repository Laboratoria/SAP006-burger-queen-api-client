import styled from "styled-components";

const SignUpBox = styled.div`
    background: rgba(244, 244, 244, 0.52);
`
const Image = styled.img`
    height: 252px;
    width: 268px;
    margin: 10px 20px 0px 50px;
`
const TitleRegister = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size:28px;
    font-style: normal;
    font-weight: 800;
    color: #008F83;
    font-weight:bold;
    justify-content:center;
    text-align:center;
    text-transform:uppercase;
`
const Form = styled.form`
    justify-content:center;
    text-align:center;
`

const InputRadio = styled(Form)`
    color: red;
    background-color: #000000;
`

const ErrorsMessage = styled.p`
    color: red;
    font-weight: 600;

`

const PhraseRegister = styled.p`
    font-family:Montserrat;
    justify-content:center;
    text-align:center;  
    font-size: 16px;
    margin: 80px 0px;
        a {
            color:black;
            font-weight:bold;
            text-decoration: none;
            hover
        }
`

export { SignUpBox, Image, TitleRegister, Form, InputRadio, ErrorsMessage, PhraseRegister };