/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import React, {useState, useEffect} from 'react';
import ListAllOrders from '../ListAllOrders'
import Header from '../Header'
import ButtonDefault from '../ButtonDefault';
import Loader from '../Loader';


export default function OrdersPanel({classBtn}) {
	
	const [loading, setLoading] = useState(false);
	

  const [navClass, setNavClass] = useState({
    pending:"selected",
    loading:"",
    done:"",
    delivered:"",
    all:"",
  })

  const lastStatus =  localStorage.getItem('lastOrderStatus');
  const [status, setStatus] = useState("pending")
	const[visibilityBtn, setVisibilityBtn]= useState("btn-invisible")

  useEffect(() => {
		if(lastStatus){
			setNavClass({[lastStatus]:"selected"})
			if (lastStatus==="all"){
				setStatus(false)
				setVisibilityBtn("btn-visible")
			}else{
				setStatus(lastStatus)
			}
		}
  }, [lastStatus])


 	const handleUpdateOrders = () => {
		setLoading(true);
		window.location.reload()
	}
	
  const navOrders = (chosenStatus) =>{
		if (chosenStatus==="all"){
			setStatus(false)
			setVisibilityBtn("btn-visible")
			localStorage.setItem('lastOrderStatus', "all");

		}else{
			setStatus(chosenStatus)
			localStorage.setItem('lastOrderStatus', chosenStatus);
	
		}
	}

	return (
		<div className="pages-container">
			<Header classBtn={classBtn}/>
			<nav>
				<ul className="menu-types">
					<li className={navClass.pending} onClick={()=>{ handleUpdateOrders(); setNavClass({pending:"selected"}); navOrders("pending")}}>
						{' '}
						Em espera{' '}
					</li>
					<li className={navClass.loading} onClick={()=>{handleUpdateOrders(); setNavClass({loading:"selected"}); navOrders("loading")}}>
						{' '}
						Iniciados{' '}
					</li>

					<li className={navClass.done} onClick={()=>{handleUpdateOrders(); setNavClass({done:"selected"}); navOrders("done")}}>
						{' '}
						Prontos{' '}
					</li>

          <li className={navClass.delivered} onClick={()=>{handleUpdateOrders(); setNavClass({delivered:"selected"}); navOrders("delivered")}}>
						{' '}
						Entregues{' '}
					</li>

					<li className={navClass.all} onClick={()=>{handleUpdateOrders(); setNavClass({all:"selected"}); navOrders("all")}}>
						{' '}
						Histórico{' '}
					</li>
				</ul>

				<div className="order-progress">
				<ButtonDefault className="btn-update-orders" onClick={() => {handleUpdateOrders()}}>
			 ⏱ Atualizar pedidos
			</ButtonDefault>
				</div>
			</nav>


			<ListAllOrders session ={status} orderUpdate = {handleUpdateOrders} className={visibilityBtn}/>
			{loading ? <Loader /> : false}
		</div>
	);
}
