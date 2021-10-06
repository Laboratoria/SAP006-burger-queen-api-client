//import Button from "../button/button"

export default function CartItem(props) {
  return (
    <article key={props.id}>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.quantity}</p>     
    </article> 
 )
}

/*   <Button
      buttonType='text'
      buttonOnclick={props.remove}
      buttonText='<i class="far fa-trash-alt"></i>'
      >
      </Button>*/