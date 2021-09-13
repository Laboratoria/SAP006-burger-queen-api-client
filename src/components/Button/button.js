import './style.css';
function Button({
    btnId,
    btnType,
    btnClass,
    btnText,
    btnOnClick,

}) {
    return (
        <button id={btnId} type={btnType} className={btnClass} onClick={btnOnClick}>{btnText}</button>
    )
}

export default Button;