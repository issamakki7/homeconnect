import { useState, useEffect } from "react";
import axios from "axios";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    fName: "",
    lName: "",
    email: "",
    mobileNo: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(values);

    axios
      .post("http://localhost:5000/register", {
        username: values.username,
        fName: values.fName,
        lName: values.lName,
        classYear: values.class,
        email: values.email,
        mobileNo: values.mobileNo,
        password: values.password,
      })
      .then((response) => {
        const message = response.data.message;
        alert(message);
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
