import React from "react";
import "./styles.css";

const InputElement = (props) => {
  const {
    label,
    type = "text",
    name,
    value,
    error,
    palceholder,
    handleChange,
    required,
    inputType,
    options = [],
    defaultOptionText = "Select",
    ...rest
  } = props;

  const renderInput = () => {
    switch (inputType) {
      case "select":
        return (
          <select
            name={name}
            id={name}
            className="input"
            value={value}
            onChange={handleChange}
            {...rest}
          >
            <option value="">
              -: {[null, undefined, ""].includes(value) && defaultOptionText} :-
            </option>
            {options.map((o, i) => {
              return <option key={0 + i}>{o}</option>;
            })}
          </select>
        );
      case "textarea":
        return (
          <textarea
            name={name}
            id={name}
            className="input"
            value={value}
            onChange={handleChange}
            {...rest}
          ></textarea>
        );

      default:
        return (
          <input
            className="input"
            type={type}
            name={name}
            id={name}
            value={value}
            palceholder={palceholder}
            onChange={handleChange}
            {...rest}
          />
        );
    }
  };
  return (
    <div className="inputelement">
      <div className="wrapper flex flex-end">
        <label htmlFor={name}>
          {label} :{required && <span className="error">*</span>}
        </label>
      </div>
      <div className="wrapper flex-start">
        {renderInput()}
        {error && (
          <>
            <br />
            <span className="error">{error}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default InputElement;
