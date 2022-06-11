import { errorMessages } from "../utils/constants";

export const validateName = (value) => {
  const regex = /^[a-zA-Z\s_]*$/;
  if (!regex.test(value)) {
    return errorMessages.invalidName;
  }
  return "";
};
export const validateUsername = (value) => {
  const regex = /^[a-zA-Z0-9]*$/;
  if (!regex.test(value)) {
    return errorMessages.invalidName;
  }
  return "";
};

export const validateEmail = (value) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(value)) {
    return errorMessages.invalidEmail;
  }
  return "";
};

export const validatePassword = (value) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[! @ # $ ^ & * ~])/;
  if (value.length < 8) {
    return errorMessages.invalidPasswordLength;
  }
  if (value.length > 20) {
    return errorMessages.invalidPasswordLength;
  }
  if (!regex.test(value)) {
    return errorMessages.invalidPassword;
  }
  if (value.split(" ").length > 1) {
    return errorMessages.invalidPasswordWhiteSpace;
  }
  return "";
};
