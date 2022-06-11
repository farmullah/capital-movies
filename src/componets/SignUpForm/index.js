import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../../context/MoviesContext";
import { errorMessages } from "../../utils/constants";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateUsername,
} from "../../validations/form-validations";
import InputElement from "../InputElement";

const defaultValues = {
  name: "",
  username: "",
  password: "",
};
const defaultErrors = {
  name: "",
  username: "",
  password: "",
};

const SignUpForm = ({ setIsLogin = () => {} }) => {
  const navigate = useNavigate();
  const { register } = useContext(MoviesContext);
  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const error = validateField(name, value);
    return setErrors({
      ...errors,
      [name]: error,
    });
  };

  const validateField = (name, value) => {
    if (value === "") return errorMessages[name];
    switch (name) {
      case "name":
        return validateName(value);
      case "username":
        return validateUsername(value);
      case "password":
        return validatePassword(value);
      default:
        return false;
    }
  };

  const isValidated = () => {
    let validated = true;
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      const error = validateField(key, value);
      if (![null, undefined, ""].includes(error)) {
        validated = false;
      }
      newErrors[key] = error;
    });
    setErrors(newErrors);
    return validated;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidated()) {
      const { message, error } = register({
        username: formData.username,
        password: formData.password,
      });
      if (message) {
        setIsLogin(true);
        alert(message);
      } else {
        alert(error);
      }
    }
  };
  
  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="form">
      <div className="flex align-center flex-column">
        <h2 className="form__title">Sign Up</h2>
        <InputElement
          label="name"
          name="name"
          value={formData.name}
          error={errors.name}
          handleChange={handleChange}
          required
        />
        <InputElement
          label="username"
          name="username"
          value={formData.username}
          error={errors.username}
          handleChange={handleChange}
          required
        />
        <InputElement
          label="password"
          name="password"
          value={formData.password}
          error={errors.password}
          handleChange={handleChange}
          required
        />
        <input type="submit" className="submit__button" value="Sign Up" />
        <p className="form__footer-title" onClick={() => setIsLogin(true)}>
          Sign In?
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
