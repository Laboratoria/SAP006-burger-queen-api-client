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

const InputForm = styled.input`
    width:70%;
    height:40px;
    top: 200px;
    border-radius:10px;
    border: 1px solid #008F83;
    margin: 5px;
    padding: 5px;
    font-weight:bold;
    text-transform:uppercase;
    
`
const LoginButton = styled.button`
    justify-content:center;
    text-align:center;    
    width: 252px;
    height: 42px;
    border:none;
    border-radius:10px;
    margin: 80px 0px 50px 50px ;
    text-transform:uppercase;
    background-color:rgb(163, 210, 206);    
        a {
            color:black;
            font-weight:bold;
            text-decoration: none;
            font-size:18px;
        }      
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


export { Image, LoginBox, Title, Form, InputForm , LoginButton, PhraseRegister};