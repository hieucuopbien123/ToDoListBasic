import React from "react";
import "./index.css";

const InputText = ({ placeholderInput, title, setTitle, ...rest }) => {
    return (
        <input
            {...rest}
            className="taskContainer_form--inputText"
            type="text"
            value={title}
            placeholder={placeholderInput}
            onChange={(e) => setTitle(e.target.value)}
        />
    );
};

export default InputText;
