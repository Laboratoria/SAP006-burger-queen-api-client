import React from "react";
import Input from "../../components/Input";
import LogoImg from "../../Components/Image/Image";

function Login(){
    return(
        <div className='container login'>
            <LogoImg />
            <Input />
            <h1>Arroz logar</h1>
        </div>

    );
};

export default Login;