import React from "react";
import InputText from "../InputText";
import "./index.css";

const Task = (props) => {
    const {
        placeholderInput,
        buttonText,
        title,
        setTitle,
        priority,
        setPriority,
        description,
        setDescription,
        date,
        setDate,
        handleSubmit,
    } = props;
    return (
        <div className="taskContainer">
            <form className="taskContainer_form" onSubmit={handleSubmit}>
                <InputText placeholderInput={placeholderInput} {...{ title, setTitle }} required />
                <div style={{ height: "20px" }}></div>
                <div>
                    <label className="taskContainer_form--description">Description</label>
                    <div style={{ height: "10px" }}></div>
                    <textarea
                        className="taskContainer_form--multilineInput"
                        rows={5}
                        placeholder="Description ..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div style={{ height: "20px" }}></div>
                <div className="taskContainer_twoform">
                    <div className="taskContainer_twoform_smallContainer">
                        <label className="taskContainer_form--description">Due Date</label>
                        <div style={{ height: "10px" }}></div>
                        <input
                            type="date"
                            className="taskContainer_twoform_smallContainer--inputdate"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            min={new Date().toISOString().split("T")[0].toString()}
                        ></input>
                    </div>
                    <div style={{ width: "20px" }}></div>
                    <div className="taskContainer_twoform_smallContainer">
                        <label className="taskContainer_form--description">Priority</label>
                        <div style={{ height: "10px" }}></div>
                        <select
                            className="taskContainer_twoform_smallContainer--inputSelect"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="Low">Low</option>
                            <option value="Normal">Normal</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                </div>
                <div style={{ height: "30px" }}></div>
                <button type="submit" className="taskContainer_form--button">
                    {buttonText}
                </button>
            </form>
        </div>
    );
};

export default Task;
