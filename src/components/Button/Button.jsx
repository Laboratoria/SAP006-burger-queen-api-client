import './style.scss';

const GeneralButton = ({ children, onClick }) => {
    // const classes = `button ${variant}`;

    return (
        <button className="GeneralButton" onClick={onClick}> 
            {children}
        </button>
    );
}

export default GeneralButton;