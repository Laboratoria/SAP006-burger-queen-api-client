import './style.scss';

const GeneralButton = ({ variant , children, onClick }) => {
    const classes = `button ${variant}`;

    return (
        <button className={classes} onClick={onClick}> 
            {children}
        </button>
    );
}

export default GeneralButton;