// import { useHistory } from 'react-router-dom';
import GeneralButton from './style'

const Button = ({ variant, children, onClick }) => {
    const classes = `button ${variant}`;
    // const history = useHistory();

    return (
        <GeneralButton className={classes} variant='primary' 
        onClick={onClick}> 
            {/* {history.push('/register')}  */}
            {children}
        </GeneralButton>
    );
}

export default Button;

 