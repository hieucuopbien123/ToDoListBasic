import React, { Fragment, useEffect, useState } from "react";
import "./index.css";
import Title from "src/components/Title";
import ButtonPair from "src/components/ButtonPair";
import InputText from "src/components/InputText";
import BulkAction from "./BulkAction";
import Task from "src/components/Task";
import UpdateTask from "./UpdateTask";

const ToDoList = ({ data, setData }) => {
    const [searchData, setSearchData] = useState("");
    const [updateList, setUpdateList] = useState([]);
    const [checkList, setCheckList] = useState([]);

    const handleCheckBox = (e, index) => {
        if (e.target.checked) {
            setCheckList([...checkList, index]);
        } else {
            setCheckList(
                checkList.filter((ele) => {
                    return ele != index;
                })
            );
        }
    };

    const handleDetailClick = (idx) => {
        if (updateList.includes(idx)) {
            setUpdateList(
                updateList.filter((ele, index) => {
                    return idx != ele;
                })
            );
        } else {
            setUpdateList([...updateList, idx]);
        }
    };

    const handleRemoveClick = (idx) => {
        window.localStorage.setItem(
            "task",
            JSON.stringify(
                data.filter((ele, index) => {
                    return idx != index;
                })
            )
        );
        setData(JSON.parse(window.localStorage.getItem("task")));
        setUpdateList(
            updateList
                .filter((ele) => {
                    return ele != idx;
                })
                .map((ele) => {
                    if (ele > idx) {
                        return ele - 1;
                    }
                    return ele;
                })
        );
    };

    return (
        <Fragment>
            <div className="listContainer">
                <Title text={"To Do List"} />
                <InputText
                    placeholderInput={"Search ..."}
                    {...{ title: searchData, setTitle: setSearchData }}
                    required
                />
                <div style={{ height: "20px" }}></div>
                {data &&
                    data.map((d, index) => {
                        if (d.title.toLowerCase().includes(searchData.toLowerCase()) || searchData == "")
                            return (
                                <div key={index}>
                                    {/* Cách tạo check box custom */}
                                    <div className="listContainer_smallContainer">
                                        <label className="listContainer_smallContainer--checkboxContainer">
                                            {d.title}
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                onChange={(e) => {
                                                    handleCheckBox(e, index);
                                                }}
                                                checked={checkList.includes(index)}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <ButtonPair
                                            leftButtonText={"Detail"}
                                            idx={index}
                                            onClickLeft={handleDetailClick}
                                            onClickRight={handleRemoveClick}
                                        />
                                    </div>
                                    {updateList.includes(index) && (
                                        <UpdateTask
                                            title={d.title}
                                            {...{ updateList, setUpdateList, setData, data, index }}
                                            description={d.description}
                                            date={d.date}
                                            priority={d.priority}
                                        />
                                    )}
                                    <div style={{ height: "20px" }}></div>
                                </div>
                            );
                    })}
                <div style={{ height: "20px" }}></div>
            </div>
            {checkList.length > 0 && <BulkAction {...{ checkList, setCheckList, setUpdateList, setData, data }} />}
        </Fragment>
    );
};

export default ToDoList;
