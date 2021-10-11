import Selection from "./selection";

function Option({
  optionValue,
  optionClassName
}) {
  return (
    <Selection>
      <option className={optionClassName}></option>
      <option className={optionClassName} value={optionValue}></option>
      <option className={optionClassName} value={optionValue}></option>
      <option className={optionClassName} value={optionValue}></option>
      <option className={optionClassName} value={optionValue}></option>
      <option className={optionClassName} value={optionValue}></option>
      <option className={optionClassName} value={optionValue}></option>
      <option className={optionClassName} value={optionValue}></option>
      <option className={optionClassName} value={optionValue}></option>
      <option className={optionClassName} value={optionValue}></option>
      <option className={optionClassName} value={optionValue}></option>
    </Selection>
  )
}

export default Option;