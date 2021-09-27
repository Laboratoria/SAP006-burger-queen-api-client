import React from 'react'

//validação
const  type = {
    // email: {
    //    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //    ,
    // message:'Preencha um email válido',
    // },
    password:{
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message:
        'A senha precisa ter 1 caracter maíusculo, i minúsculo e 1 digit. Com no mínimo 8 caracteres.',
    },
}; 

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);
    
    function validate(value){
        if(type === false) return true;
        if(value.length === 0){
            setError('Preencha um valor.')
            return false; 
        } else if (type[type] && type[type] .regex.test(value)){
            setError(type[type].massage);
            return false;
        }else{
            setError(null);
            return true;
        }
    }

    function onChange({target}){
        if (error) validate (target.value);
        setValue(target.value);
    }
    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    };
    
};

export default useForm;
