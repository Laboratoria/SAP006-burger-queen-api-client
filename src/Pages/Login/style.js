import styled from "styled-components";


const LoginBox = styled.div`
    background: rgba(255, 255, 255, 0.52);
`
const Image = styled.img`
    height: 252px;
    width: 268px;
    margin: 10px 20px 0px 50px;
`
const Title = styled.p`
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
        }
`


export { Image, LoginBox, Title, Form, PhraseRegister};