import Input from "../../components/inputs/index.js";

function Menu() {
  return (
    <form>
      <h1>Essa página terá o Menu e atendimento</h1>
      
      <Input className="client" placeholder="Cliente"></Input>
      <Input className="table" type="number" min="1" max="10" placeholder="Mesa"/>
    </form>
  );  
}

export default Menu;
