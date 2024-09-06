import React, { useState } from "react";
import Task from "src/components/Task";
import "./index.css";

const UpdateTask = (props) => {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [date, setDate] = useState(props.date);
    const [priority, setPriority] = useState(props.priority);
    const { data, setData, index, updateList, setUpdateList } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        var tasks = data.map((ele, idx) => {
            if (idx == index) {
                return { title, description, date, priority };
            }
            return ele;
        });
        //sort task
        tasks.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
        });
        window.localStorage.setItem("task", JSON.stringify(tasks));
        setUpdateList([]);
        setData(JSON.parse(window.localStorage.getItem("task")));
    };

    return (
        <div className="taskWrapper">
            <div style={{ height: "20px" }}></div>
            <Task
                placeholderInput={title}
                buttonText="Update"
                {...{
                    title,
                    description,
                    date,
                    priority,
                    setTitle,
                    setDescription,
                    setDate,
                    setPriority,
                    handleSubmit,
                }}
            />
            <div style={{ height: "20px" }}></div>
        </div>
    );
};

export default UpdateTask;
