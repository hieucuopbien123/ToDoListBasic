import React from "react";
import "./index.css";

const ButtonPair = (props) => {
    const { leftButtonText, idx, onClickLeft, onClickRight } = props;
    return (
        <div className="pairButtonWrapper">
            <button className="buttonLeft" onClick={() => onClickLeft && onClickLeft(idx)}>
                {leftButtonText}
            </button>
            <button className="buttonRight" onClick={() => onClickRight && onClickRight(idx)}>
                Remove
            </button>
        </div>
    );
};

export default ButtonPair;
