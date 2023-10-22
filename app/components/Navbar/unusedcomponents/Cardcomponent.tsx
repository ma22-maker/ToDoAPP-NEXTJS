"use client";
import { inputData_SUCCESS } from "../../../store/reduxstore";
import React from "react";
import { RiAddFill } from "react-icons/ri";
import { useState } from "react";
import Showdetails from "../Showdetails"
import { useDispatch } from "react-redux";

function Cardcomponent() {
  const [taskData, setTaskData] = useState({
    taskText: "",
    dueDate: "",
  });
  const dispatch = useDispatch();
  const [warning, setWarning] = useState("Please Add a Task");

  const handleAddTask = () => {
    const { taskText, dueDate } = taskData;

    if (taskText !== "" && dueDate !== "") {
      setWarning("");
      const taskObject = {
        taskText,
        dueDate,
      };

      dispatch(inputData_SUCCESS({ taskObject }));

      console.log(taskObject);
      setTaskData({
        taskText: "",
        dueDate: "",
      });
    }
  };
  return (
    <>
      <div className="group w-full rounded-full bg-fuchsia-400  text-primary-content hover:bg-violet-500">
        <div className="card-body flex flex-row items-center">
          <button onClick={handleAddTask}>
            <RiAddFill size={50} />
          </button>
          <input
            type="text"
            placeholder="Type here"
            className="input input-ghost text-white w-full max-w-lg ml-3"
            value={taskData.taskText}
            onChange={(e) =>
              setTaskData({ ...taskData, taskText: e.target.value })
            }
          />
          <input
            type="date"
            placeholder="Due date"
            className="input input-ghost text-white w-full max-w-xs "
            value={taskData.dueDate}
            onChange={(e) =>
              setTaskData({ ...taskData, dueDate: e.target.value })
            }
          />
        </div>
      </div>
      <div>
      {warning ? (
        <div className=" text-white font-semibold text-lg m-4">{warning}</div>
      ) : (
        <Showdetails/>
      )}
      </div>
    </>
  );
}

export default Cardcomponent;

{
  /* {warning && (
        <div className=" text-white font-semibold text-lg m-4">
          {warning}
        </div>
      )} */
}
