export default function Input({
    inputType,
    inputName,
    inputPlaceholder,
    inputValue,
    inputChange,
    inputClassName
  }) {
    return (
      <input type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={inputChange}
        className={inputClassName}
      >
      </input>
    )
  }
  