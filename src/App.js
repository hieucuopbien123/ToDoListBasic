import React, { useState } from "react";
import NewTask from "src/pages/NewTask";
import ToDoList from "./pages/ToDoList";
import "./App.css";

const App = () => {
    const [data, setData] = useState(JSON.parse(window.localStorage.getItem("task")));
    return (
        <div className="flexContainer">
            <div className="halfContainer">
                <NewTask data={data} setData={setData} />
            </div>
            <div style={{ borderRight: "1px solid black" }}></div>
            <div className="flexContainer halfContainer halfContainer_custom">
                <ToDoList data={data} setData={setData} />
            </div>
        </div>
    );
};

export default App;
