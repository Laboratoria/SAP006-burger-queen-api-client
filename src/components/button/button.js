export default function Button({
  buttonType,
  buttonOnclick,
  buttonText,
  buttonClass,
}) {
  return (
    <button type={buttonType}
      onClick={buttonOnclick}
      className={buttonClass}
    >
      {buttonText}
    </button>
  )
}