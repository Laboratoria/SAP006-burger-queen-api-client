/* eslint-disable object-curly-newline */
import React, {useState, useEffect} from 'react';
import ListAllOrders from '../ListAllOrders'
import Header from '../Header'
import ButtonDefault from '../ButtonDefault';



export default function OrdersPanel() {

  const [navClass, setNavClass] = useState({
    pending:"selected",
    loading:"",
    done:"",
    delivered:"",
    all:"",
  })

  const lastStatus =  localStorage.getItem('lastOrderStatus');
  const [status, setStatus] = useState("pending")

  useEffect(() => {
		if(lastStatus){
			setNavClass({[lastStatus]:"selected"})
			if (lastStatus==="all"){
				setStatus(false)
			}else{
				setStatus(lastStatus)
			}
		}
  }, [lastStatus])


 	const handleUpdateOrders = () => {
		window.location.reload()
	}

  setTimeout(handleUpdateOrders,60000)
	
  const navOrders = (chosenStatus) =>{
		setStatus(chosenStatus)
    localStorage.setItem('lastOrderStatus', chosenStatus);
	}


	return (
		<div className="pages-container">
			<Header />
			<nav>
				<ul className="menu-types">
					<li className={navClass.pending} onClick={()=>{handleUpdateOrders(); setNavClass({pending:"selected"}); navOrders("pending")}}>
						{' '}
						Em espera{' '}
					</li>
					<li className={navClass.loading} onClick={()=>{setNavClass({loading:"selected"}); navOrders("loading")}}>
						{' '}
						Iniciados{' '}
					</li>

					<li className={navClass.done} onClick={()=>{setNavClass({done:"selected"}); navOrders("done")}}>
						{' '}
						Prontos{' '}
					</li>

          <li className={navClass.delivered} onClick={()=>{setNavClass({delivered:"selected"}); navOrders("delivered")}}>
						{' '}
						Entregues{' '}
					</li>

					<li className={navClass.all} onClick={()=>{setNavClass({all:"selected"}); navOrders(false)}}>
						{' '}
						Todos{' '}
					</li>
				</ul>

				<div className="order-progress">
				<ButtonDefault className="btn-update-orders" onClick={() => {handleUpdateOrders()}}>
			 ⏱ Atualizar pedidos
			</ButtonDefault>
				</div>
			</nav>


			<ListAllOrders session ={status} orderUpdate = {handleUpdateOrders}/>
		</div>
	);
}
