export default function Relogio() {
  return (
    <p>
      {new Date().toLocaleTimeString()}
    </p>
  )
}