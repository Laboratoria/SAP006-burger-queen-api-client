const Option = ({onChange, order}) => {
    return (
      <div className="mesas">
        <select  className="opcoes1" name="table" onChange={onChange} value={order.table === "" ? "Mesas" : order.table}>
          <option className="opcoes">Mesas</option>
          <option className="opcoes" value="1">Mesa 1</option>
          <option className="opcoes" value="2">Mesa 2</option>
          <option className="opcoes" value="3">Mesa 3</option>
          <option className="opcoes" value="4">Mesa 4</option>
          <option className="opcoes" value="5">Mesa 5</option>
          <option className="opcoes" value="6">Mesa 6</option>
          <option className="opcoes" value="7">Mesa 7</option>
          <option className="opcoes" value="8">Mesa 8</option>
          <option className="opcoes" value="9">Mesa 9</option>
        </select>
      </div>
    )
  }
  
  export default Option;