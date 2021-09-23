import { useHistory } from "react-router-dom";
//import { useState } from "react";
import Button from '../../components/button/button';
import Logo from '../../components/imgs/Logotipo.png';
import {Link} from 'react-router-dom';
import'./style.scss';


function Home(){
   const history = useHistory()
  // const [isModalVisible, setIsModalVisible] = useState(false)

    function navigateToNewRegister() {
        history.push('/login')
    }

    return (
        <>
            <header>
                <div className="logo">
                    <img src={Logo} alt="Logo"></img>
                </div>
            </header>
            <main>
                <div className="text-class" >
                    <h1><p> Best Burger in Town </p> </h1>
                </div>
                <Button variant='primary' onClick={navigateToNewRegister} className='button-home'>
                            Login
                </Button>
                <p className='class-p'>Funcionario novo? <Link to='/cadastrar'>Cadastre-se</Link> </p>
            </main>
        </>
    )
}
export default Home;

    

    /*  <Button variant='primary'>
                        Criar conta
                    </Button>
                    <Button variant='secondary'>
                        Login
                    </Button>*/

                    //                   <img src={Logo} alt="Logo"></img>
 
                    /*<Button variant='primary' onClick={navigateToNewRegister}>
                            Login
                        </Button>*/