import GIF from '../../components/imgs/Logotipo(4).svg';
//import value from "../../services/auth";
import'./style.scss';
import { useState } from "react";
import validateRegister from '../../services/errors';
import useForm from '../../services/validation';
import { Link } from 'react-router-dom';


export default function CreateUser() {
    const { handleSubmit, errors} = useForm(validateRegister)
    const [ setErrors] = useState({});
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

    
    /*const HandleSubmit = (e) => {
        console.log('handleSubmit');
        e.preventDefault();
        setErrors(validateRegister(formValues));

        userRegister(formValues)
            .then(response => response.json())
            .then((json) => {
                const token = json.token
                localStorage.setItem("token", token);

                if (json.id !== undefined) {
                    history.push('/login');
                    alert("Cadastro efetuado com sucesso")
                }

                /*if (json.role === "salão") {
                    history.push('/hall');
                } else if
                    (json.role === "cozinha") {
                    history.push('/kitchen');
                }else {
            setErrors()
          }*/
          //  })
            /*.then(alert("Cadastro efetuado com sucesso"))*/

         /*   .catch(errors => {
                console.log(errors)
            });*/
    //};
  
    function register(e) {
       
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
        return token;
        }
            


            /*if (json.role === "salão") {
                history.push('/hall');
            } else if
                (json.role === "cozinha") {
                history.push('/kitchen');
            }else {
        setErrors()
      }

        })
        .catch((code, message)=> {
           
           
        })
    */
    )}
    return (
        <>
        <div className='container'>
                <div className='row'>
                    <div className='co1 align-items-center flex-co1'>
                        <img src={GIF} alt='gif'/>
                    </div>


                    <div className='co1 align-items-center'>
                        <div className='form-wrapper align-items-center'>
                            <div className='form sign-in'>
                                <div className='input-group'>
                                    <i class="far fa-user"></i>
                                    <input type='text' 
                                    placeholder='Digite seu nome'>
                                    </input>
                                    {errors.fname && <p>{errors.fname}  </p>}
                                </div>
                                <div className='input-group'>
                                    <i class="far fa-envelope"></i>
                                    <input type='email' 
                                    autoComplete='OFF'
                                    name="femail"
                                    value={form.email} 
                                    onChange={(e) => handlFormChange(e)}
                                    placeholder='Digite seu e-mail'>
                                    </input>
                                    {errors.femail && <p>{errors.femail}  </p>}
                                </div>
                                <div className='input-group'>
                                    <i class="fas fa-lock"></i>
                                    <input type='password' 
                                    name="fpassword"
                                    value={form.password} 
                                    onChange={(e) => handlFormChange(e)}
                                    placeholder='Digite sua senha'>
                                    </input>
                                    {errors.fpassword && <p>{errors.fpassword}  </p>}
                                </div>
                                <div className='input-group'>
                                    <select className='style-option' onChange={(e)=> setRole(e.target.value)}>
                                        <option className='style-option'>  Escolha sua função </option>
                                        <option className='style-option' value='garçom'>  Garçom/Garçonete  </option>
                                        <option className='style-option' value='cozinheiro'>  Cozinheiro  </option>
                                    </select>
                                </div>
                                <button onClick={register} >
                                    Entrar
                                </button>
                                <p>
                                    <span>
                                        Já tem uma conta?
                                    </span>
                                    <b>
                                        <Link className='link-class' to="/">Clique aqui</Link>
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

/*  <div id='container' className='container'>
                <div className='row'>
                    <div className='co1 align-items-center flex-co1'>
                        <div className='form-wrapper align-items-center'>
                        </div>
                        <div className='form sign-up'>
                            <div className='input-group'>
                                <i class="far fa-user"></i>
                                <input type='text' placeholder='Digite seu nome'></input>
                            </div>
                            <div className='input-group'>
                                <i class="far fa-envelope"></i>
                                <input type='email' placeholder='Digite seu e-mail'></input>
                            </div>
                            <div className='input-group'>
                                <i class="fas fa-lock"></i>
                                <input type='password' placeholder='Digite sua senha'></input>
                            </div>
                            <button>
                                Sign up
                            </button>
                                <p>
                                    <span>
                                        Já tem uma conta?
                                    </span>
                                    <b onClick={toggle}>
                                        Cadastre-se aqui
                                    </b>

                                </p>
                        </div>
                    </div>









                    <header>
                <img className='img-create' src={GIF} alt="Gif"></img>
            </header>    
            <main>
                <div className='main-class'>
                    <div className='inputs-form'>
                        <label className='name-label'> Digite seu nome </label>
                        <input type='text' name="fname" className='name-create' autocomplete="off" value={form.name} onChange={handlFormChange}/><br/> <br/>
                        {errors.fname && <p>{errors.fname}  </p>}
                        
                        
                        <div className='error-name' />
                        <label className='email-label'>Digite seu email </label>
                        <input type='email' name="femail" className='email-create' autocomplete="off" value={form.email} onChange={(e) => handlFormChange(e)}/> <br/> <br/>
                        <div className='error-email'> {errors.femail && <p>{errors.femail} </p>}</div>
                        <label className='password-label'>Digite sua senha </label>
                        <input type='password' name="fpassword" className='password-create' value={form.password} onChange={(e) => handlFormChange(e)}/><br/><br/>
                        {errors.fpassword && <p>{errors.fpassword}  </p>}
                    </div>
                    <div className='class-option'>
                        <select className='option-style' onChange={(e)=> setRole(e.target.value)}>
                        <option >  Escolha sua função </option>
                        <option className='option-style' value='garçom'>  Garçom/Garçonete 🍽️ </option>
                        <option className='option-style' value='cozinheiro'>  Cozinheiro 🧑‍🍳 </option>
                        </select> <br/> <br/>
                        <div className='error-select'> </div>
                    </div>
                    <button className='btn-create' onClick={(e) => handleSubmit(e)}>Entrar</button>
                </div>
            </main>
            
        </>


*/
