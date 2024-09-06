import React, { Fragment, useState } from "react";
import Title from "src/components/Title";
import Task from "src/components/Task";

const NewTask = ({ data, setData }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [priority, setPriority] = useState("Normal");

    const resetState = () => {
        setTitle("");
        setDescription("");
        setDate(new Date().toISOString().split("T")[0]);
        setPriority("Normal");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var tasks = [];
        const tempData = window.localStorage.getItem("task");
        if (tempData) {
            tasks = tasks.concat(JSON.parse(tempData));
        }
        tasks.push({ title, description, date, priority });
        //sort task
        tasks.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
        });
        window.localStorage.setItem("task", JSON.stringify(tasks));
        resetState();
        setData(JSON.parse(window.localStorage.getItem("task")));
    };

    return (
        <Fragment>
            <Title text={"New Task"} />
            <Task
                placeholderInput="Add new task ..."
                buttonText="Add"
                {...{
                    title,
                    setTitle,
                    priority,
                    setPriority,
                    description,
                    setDescription,
                    date,
                    setDate,
                    handleSubmit,
                }}
            />
            <div style={{ height: "20px" }}></div>
        </Fragment>
    );
};

export default NewTask;
