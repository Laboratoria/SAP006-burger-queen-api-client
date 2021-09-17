//import { useHistory } from "react-router-dom";
import Button from './componentes/button';
import TextHome from './componentes/text';
import Logo from './componentes/imgs';
 
function Home(){
    return (
        <>
            <header>
                <div className="logo">
                    <img src={Logo} className='img-class'/>
                </div>
            </header>
            <main>
                <div className="text-class" >
                    <TextHome />
                </div>
                    <Button variant='primary'>
                        Criar conta
                    </Button>
                    <Button variant='secondary'>
                        Login
                    </Button>
            </main>
        </>
    )
}
export default Home;

    

    /*<header>
    <div className="logo">
    <img src={Logo} className='img-class'/>
    </div>
    </header>
    <main>
    <div className="text-class" >
    <TextHome />
    </div>
    <Button variant='primary'>
    Criar conta
    </Button>
    <Button variant='secondary'>
    Login
    </Button>
    </main>*/
    

    /* <div>
      <Button onClick={Login}>Login</Button>
      <Button onClick={Register}>Cadastro</Button>
    </div>*/

    /*<Button variant='primary'>
    Criar conta
    </Button>
    <Button variant='secondary'>
    Login
    </Button> */

    //    <img src={Logo} className='img-class'/>
