//import Button from "../../components/button/button";
import GIF from '../../components/imgs/novologo.png';
import { useState,  } from "react";
import { useHistory } from "react-router";
import './style.css';
import {Link} from 'react-router-dom';


 export default function Login() {
    const history = useHistory()
       
    const [form, setForm] = useState({'email':'', 'password':''});
    const handlFormChange = (e) => {
        if(e.target.getAttribute('name')=== 'femail'){
            setForm({'email':e.target.value, 'password':form.password});
        }
        else if(e.target.getAttribute('name')=== 'fpassword'){
            setForm({'email':form.email,  'password':e.target.value});
        }
    }

  function SingIn() {
        return fetch('https://lab-api-bq.herokuapp.com/auth', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                email: form.email,
                password: form.password,
 
            }),
    
        })
        .then((res) => res.json())
        //.then((json) => {
        .then((json) => {
            const token = json
            //localStorage.setItem("token", token);
            console.log(json)
            if (json.role === "garçom") {
                history.push('/salão');
            } else if (json.role === "cozinheiro") {
                history.push('/cozinha');
            }else {
                return token
            }
        
            
        })
        .catch((error)=> {
            console.log({
                "code": "",
                "message": ""
              }              
              )
        })
        
        
    }
 return (
            <>

            <div className='container'>
                <div className='row'>
                    <div className='co1 align-items-center flex-co1' style={{'backgroundColor':'#0B090A'}}>
                        <img src={GIF} alt='gif'/>
                    </div>


                    <div className='co1 align-items-center'>
                        <div className='form-wrapper align-items-center'>
                            <div className='form sign-in'>
                            <p className='p-login'> Best Burger in town</p>
                                <div className='input-group'>
                                    <i class="far fa-envelope"></i>
                                    <input type='email' 
                                    name="femail"
                                    value={form.email} 
                                    onChange={(e) => handlFormChange(e)}
                                    placeholder='Digite seu e-mail'>
                                    </input>
                                </div>
                                <div className='input-group'>
                                    <i class="fas fa-lock"></i>
                                    <input type='password' 
                                    name="fpassword"
                                    value={form.password} 
                                    onChange={(e) => handlFormChange(e)}
                                    placeholder='Digite sua senha'>
                                    </input>
                                </div>
                                <button onClick={SingIn}>
                                    Entrar
                                </button>
                                <p>
                                    <span>
                                        Não tem conta?
                                    </span>
                                    <b>
                                    <Link className='link-class' to="/cadastrar">Cadastre-se aqui</Link>
                                    </b>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='footer'> BOORGIR &#169;</footer>
            </div>
            </>
            );
        
}

/* <p>
                                    <b>
                                        Forgot password?
                                    </b>
                                </p>
                                <p>
                                    <span>
                                        Don't have an account?
                                    </span>
                                    <b onClick={toggle}>
                                        Sign up here
                                    </b>  */
/*   <header>
                    <img className='img-login' src={GIF} alt="Gif"></img>
                </header>
                <main>
                    <div className='login-class'>
                        <label className='label-email' >Digite seu e-mail </label>
                        <input type='text' name="femail" className='input-email' autocomplete="off" value={form.email} onChange={(e) => handlFormChange(e)}/> <br/> <br/>
                        <label className='label-password'>Digite sua senha </label>
                        <input type='password' name="fpassword" className='input-password' value={form.password} onChange={(e) => handlFormChange(e)}/><br/><br/>
                        <Button>ENTRAR </Button>
                        <button className='btn-login' onClick={(e) => SingIn(e)}>Entrar</button>
                    
                    </div>
                </main>  */