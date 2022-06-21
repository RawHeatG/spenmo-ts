import React, { useState } from "react";
import { TaskProps } from "./task.types";
import "./task.css";
import { useAppDispatch } from "../../store/hooks";
import { deleteTask, updateTask } from "../../slices/card/card-slice";
import { TTask } from "../../App.types";

const Task = ({ task, cardId }: TaskProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newHeading, setNewHeading] = useState<TTask["heading"]>(task.heading);
  const dispatch = useAppDispatch();
  // Render check
  // console.log("task-" + task.id + "card-" + cardId + "rendered");
  const handleUpdateTask = () => {
    dispatch(updateTask({ cardId, taskId: task.id, taskHeading: newHeading }));
    setIsEditing(false);
  };
  const handleDeleteTask = () =>
    dispatch(deleteTask({ cardId, taskId: task.id }));
  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            className="task-input"
            value={newHeading}
            onChange={(event) => setNewHeading(event.target.value)}
            placeholder="New task heading..."
          ></input>
          <button onClick={handleUpdateTask}>👍</button>
        </>
      ) : (
        <>
          <p className="task-heading">{task.heading}</p>
          <div>
            <button className="edit-task" onClick={() => setIsEditing(true)}>
              🖊
            </button>
            <button className="delete-task" onClick={handleDeleteTask}>
              x
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const MemoizedTask = React.memo(Task);

export { Task, MemoizedTask };
