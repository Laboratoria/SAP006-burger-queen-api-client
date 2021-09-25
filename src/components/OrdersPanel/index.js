import React, {useState} from 'react';
import ListAllOrders from '../ListAllOrders'
import Header from '../Header'
import ButtonDefault from '../ButtonDefault';



export default function OrdersPanel() {

	const handleUpdateOrders = () => {
		window.location.reload()
	}

	const [pendingClass, setPendingClass] = useState("selected")
	const [loadingClass, setLoadingClass] = useState("")
	const [doneClass, setDoneClass] = useState("")
  const [deliveredClass, setDeliveredClass] = useState("")
	const [allClass, setAllClass] = useState('')
	const [status, setStatus] = useState('pending')

	const selectPending = () =>{
		setStatus("pending")
		setPendingClass("selected")
		setLoadingClass("")
		setDoneClass("")
    setDeliveredClass("")
		setAllClass("")
	

	}

	const selectLoading = () =>{
		setStatus("loading")
		setPendingClass("")
		setLoadingClass("selected")
		setDoneClass("")
    setDeliveredClass("")
		setAllClass("")

	}


	const selectDone = () =>{
		setStatus("done")
		setPendingClass("")
		setLoadingClass("")
		setDoneClass("selected")
    setDeliveredClass("")
		setAllClass("")
	}

  const selectDelivered = () =>{
		setStatus("delivered")
		setPendingClass("")
		setLoadingClass("")
		setDoneClass("")
    setDeliveredClass("selected")
		setAllClass("")

	}

	const selectAll = () =>{
		setStatus(false)
		setPendingClass("")
		setLoadingClass("")
		setDoneClass("")
    setDeliveredClass("")
		setAllClass("selected")
	}

	return (
		<div className="pages-container">
			<Header />
			<nav>
				<ul className="menu-types">
					<li className={pendingClass} onClick={selectPending}>
						{' '}
						Em espera{' '}
					</li>
					<li className={loadingClass} onClick={selectLoading}>
						{' '}
						Iniciados{' '}
					</li>

					<li className={doneClass} onClick={selectDone}>
						{' '}
						Prontos{' '}
					</li>

          <li className={deliveredClass} onClick={selectDelivered}>
						{' '}
						Entregues{' '}
					</li>

					<li className={allClass} onClick={selectAll}>
						{' '}
						Todos{' '}
					</li>
				</ul>

				<div className="order-progress">
				<ButtonDefault className="btn-update-orders" onClick={() => { handleUpdateOrders() }}>
			 ⏱ Atualizar pedidos
			</ButtonDefault>
				</div>
			</nav>


			<ListAllOrders session ={status}/>
		</div>
	);
}
