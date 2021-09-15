// import { useHistory } from 'react-router-dom';

const Button = ({ variant, children, onClick }) => {
    const classes = `button ${variant}`;
    // const history = useHistory();

    return (
        <button className={classes} variant='primary' 
        onClick={onClick}> 
            {/* {history.push('/register')}  */}
            {children}
        </button>
    );
}

export default Button;

 