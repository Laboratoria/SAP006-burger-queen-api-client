import React, {useState} from 'react';
import Login from '../Pages/Login/Login';
import SignUpFormSuccess from '../Components/SignUpFormSuccess';

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);
    };

    return (
        <div>
            {!formIsSubmitted ? (
                <Login submitForm={submitForm}/> 
            ) : (
                <SignUpFormSuccess />
            )}
        </div> 
    );

};

export default Form;