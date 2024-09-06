import React from "react";
import ButtonPair from "src/components/ButtonPair";
import "./index.css";

const BulkAction = ({ checkList, setCheckList, setUpdateList, data, setData }) => {
    const removeHandler = () => {
        window.localStorage.setItem(
            "task",
            JSON.stringify(
                data.filter((ele, index) => {
                    return !checkList.includes(index);
                })
            )
        );
        setData(JSON.parse(window.localStorage.getItem("task")));
        setCheckList([]);
        setUpdateList([]);
    };

    return (
        <div
            style={{
                backgroundColor: "#E0E0E0",
                border: "1px solid black",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div className="text">Bulk Action:</div>
            <ButtonPair leftButtonText={"Done"} idx={null} onClickRight={removeHandler} />
        </div>
    );
};

export default BulkAction;
