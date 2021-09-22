import GeneralButton from './style'

const Button = ({ variant, children, onClick }) => {
    const classes = `button ${variant}`;

    return (
        <GeneralButton className={classes} variant onClick={onClick}> 
            {children}
        </GeneralButton>
    );
}

export default Button;
