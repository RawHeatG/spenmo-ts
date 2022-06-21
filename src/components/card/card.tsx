import { MemoizedTask } from "../task/task";
import { CardProps } from "./card.types";
import "./card.css";
import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addTask, deleteCard } from "../../slices/card/card-slice";
import isEqual from "lodash.isequal";

const Card = ({ card }: CardProps) => {
  const [newTask, setNewTask] = useState("");
  // Render-Check
  // console.log("card" + card.id + "rendered");
  const dispatch = useAppDispatch();
  const handleAddtask = () => {
    dispatch(addTask({ id: card.id, taskHeading: newTask }));
    setNewTask("");
  };
  return (
    <div className="card" data-testid={`card-${card.id}`}>
      <h2 className="card-title">{card.title}</h2>
      {card.tasks.length !== 0 ? (
        card.tasks.map((task) => (
          <MemoizedTask task={task} key={"task-" + task.id} cardId={card.id} />
        ))
      ) : (
        <p>Add a task to the list</p>
      )}
      <div>
        <input
          className="card-input"
          type="text"
          placeholder="Add task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        ></input>
        <button
          className="add-task"
          onClick={handleAddtask}
          data-testid={`card-${card.id}-add-task`}
        >
          +
        </button>
      </div>
      <button
        className="delete-card"
        onClick={() => dispatch(deleteCard({ id: card.id }))}
        data-testid={`delete-card-${card.id}`}
      >
        Delete
      </button>
    </div>
  );
};

const MemoizedCard = React.memo(Card, isEqual);

export { MemoizedCard, Card };
