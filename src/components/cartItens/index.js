export default function CartItem(props) {
  return (
    <article key={props.id}>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.quantity}</p>
    </article>
  )
}