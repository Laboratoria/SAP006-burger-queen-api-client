import styled from "styled-components";

const SignUpBox = styled.div`
    background-color: rgba(244, 244, 244, 0.52);
    background-image: url(./Assets/register.png);
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 100%;
`
const Image = styled.img`
    height: 50vh;
    width: 50vh;
    margin: 0;
`
const TitleRegister = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size:28px;
    font-style: normal;
    font-weight: 1000;
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

const InputRadioBox = styled(Form)`
    display: flex;
    justify-content: center;
`

const LabelRadioInput = styled.label`
    margin: 0 5vh;
    
`

const ErrorsMessage = styled.p`
    color: red;
    font-weight: 500;
`

// const ButtonRegister = styled.button`
//     width: 32vh;
//     height: 20vh;
//     margin: 0;
//     display: flex;
// `

const PhraseRegister = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    line-height: 1em;
    text-align:center;  
    justify-content:center;
    margin: 80px 0px;
        a {
            color:black;
            font-weight:bold;
            text-decoration: none;
        }
`

export { SignUpBox, Image, TitleRegister, Form, InputRadioBox, LabelRadioInput, ErrorsMessage, PhraseRegister };