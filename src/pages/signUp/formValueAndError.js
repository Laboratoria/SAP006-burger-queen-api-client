import { useState } from "react";

const ValueAndError = (validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    workingOptions: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    workingOptions: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { handleChange, values, handleSubmit, errors };
};

export default ValueAndError;
