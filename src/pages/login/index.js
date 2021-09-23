import Button from "../../components/button/button";
import GIF from '../../components/imgs/Logotipo.gif';
import { useState,  } from "react";
import { useHistory } from "react-router";
import './style.css';


export default function Login() {
        const history = useHistory()
        function navigateToSalao() {
            history.push('/salao')
        }
    
    const [form, setForm] = useState({'email':'', 'password':''});
    const handlFormChange = (e) => {
        if(e.target.getAttribute('name')=== 'femail'){
            setForm({'email':e.target.value, 'password':form.password});
        }
        else if(e.target.getAttribute('name')=== 'fpassword'){
            setForm({'email':form.email,  'password':e.target.value});
        }
    }

    function Login() {
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
        .then((json) => {
           console.log('deu bão!')
            console.log(json)
            navigateToSalao()
        })
        .catch((code, message)=> {
            console.log(code)
            console.log(message)
        }

        )
    }
 return (
            <>
                <header>
                    <img src={GIF} alt="Gif"></img>
                </header>
                <main>
                    <div className='login-class'>
                        <label >Digite seu email </label>
                        <input type='text' name="femail" value={form.email} onChange={(e) => handlFormChange(e)}/> <br/> <br/>
                        <label >Digite sua senha </label>
                        <input type='password' name="fpassword" value={form.password} onChange={(e) => handlFormChange(e)}/><br/><br/>
                        <Button>ENTRAR </Button>
                        <button onClick={(e) => Login(e)}>Entrar</button>
                    
                    </div>
                </main>
                
            
            </>
            );
        
}