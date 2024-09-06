import React, { Fragment } from "react";
import "./index.css";

const Title = (props) => {
    const { text } = props;
    return (
        <Fragment>
            <div style={{ height: "20px" }}></div>
            <div className="title">{text}</div>
            <div style={{ height: "20px" }}></div>
        </Fragment>
    );
};

export default Title;
