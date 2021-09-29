const Button = ({variant, children, onClick}) => {
    const classes = `button ${variant}`
    return (
        <button  className={classes} onClick={onclick}>
            {children}
        </button>
            
    )
};
export default Button;

