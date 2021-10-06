import { useState } from "react";



function MenuHamburguer() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }
    return(
        <>
          <div className='App'>
              <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
                <div className='hamburguer hamburguerIcon'></div>
              </div>
              <div className={active ? 'menu menuOpen' : 'menu menuClose'} >
                    <div className='list'>
                        <ul className='listItems'>
                            <li>Home</li>
                            <li>Product</li>
                            <li>Contact</li>
                            <li>About</li>
                        </ul>
                    </div>
              </div>

          </div>
          
        </>
    )
}

export default MenuHamburguer;