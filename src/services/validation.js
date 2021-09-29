import { useState } from "react/cjs/react.development";
import ValidateInfo from "./errors";

const useForm = (validate) => {
    const [values, setValues] = useState({
        fname:'',
        femail:'',
        fpassword:''
    })
    const [errors, setErrors]= useState({})
    

const handleChange = e => {
    const {name, value} = e.target;
    setValues({
        ...value,
        [name]:value
    })
}

const handleSubmit = e => {
    e.preventDefault();
    setErrors(ValidateInfo(values))
}
return {handleChange, values, handleSubmit, errors}
}
export default useForm;
