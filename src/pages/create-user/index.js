import GIF from '../../components/imgs/Logotipo.gif';
//import value from "../../services/auth";
import'./style.scss';
import { useState } from "react";

export default function CreateUser() {
    const [form, setForm] = useState({'name':'', 'email':'', 'password':''});
    const handlFormChange = (e) => {
        if(e.target.getAttribute('name')=== 'fname'){
            setForm({'name':e.target.value, 'email': form.email, 'password':form.password});
        }
        else if(e.target.getAttribute('name')=== 'femail'){
            setForm({'name':form.name, 'email':e.target.value, 'password':form.password});
        }
        else if(e.target.getAttribute('name')=== 'fpassword'){
            setForm({'name':form.name, 'email': form.email, 'password':e.target.value});
        }
    }
    

    const [role, setRole] = useState('');

   /* const obj = {
        name: form.name,
        email: form.email,
        password: form.password,
        role: role,
        restaurant: 'BOORGIR'
    }*/
    function register() {
        return fetch('https://lab-api-bq.herokuapp.com/users', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                name: form.name,
                email: form.email,
                password: form.password,
                role: role,
                restaurant: 'BOORGIR'
            }),
    
        })
        .then((res) => res.json())
        .then((json) => {
            const token = json
            console.log(json)
            return token

        })
    }
  /*  fetch('https://lab-api-bq.herokuapp.com/auth', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify (obj),

    })*/
  
   

    return (
        <>
            <header>
                <img src={GIF} alt="Gif"></img>
            </header>    
            <main>
                <div className='main-class'>
                    <div className='inputs-form'>
                        <label >Digite seu nome </label>
                        <input type='text' name="fname" value={form.name} onChange={(e) => handlFormChange(e)}/><br/> <br/>
                        <label>Digite seu email </label>
                        <input type='email' name="femail" value={form.email} onChange={(e) => handlFormChange(e)}/> <br/> <br/>
                        <label>Digite sua senha </label>
                        <input type='password' name="fpassword" value={form.password} onChange={(e) => handlFormChange(e)}/><br/><br/>
                    </div>
                    <div className='class-option'>
                        <label>  Escolha sua função  </label>
                        <select onChange={(e)=> setRole(e.target.value)}>
                        <option value='garçom'>  Garçom/Garçonete 🍽️ </option>
                        <option value='cozinheiro'>  Cozinheiro 🧑‍🍳 </option>
                        </select> <br/> <br/>
                    </div>
                    <button onClick={(e) => register(e)}>Entrar</button>
                </div>
            </main>
            
        </>

    );

}
