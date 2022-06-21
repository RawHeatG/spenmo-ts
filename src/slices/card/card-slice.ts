import { createSlice } from "@reduxjs/toolkit";
import { TInitialState } from "./card-slice.types";

const initialState: TInitialState = {
  cards: [
    {
      id: 1,
      title: "Card 1",
      tasks: [
        {
          id: 1,
          heading: "Task 1"
        }
      ]
    },
    {
      id: 2,
      title: "Card 2",
      tasks: [
        {
          id: 1,
          heading: "Task 1"
        }
      ]
    }
  ]
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state) => {
      console.log("addCard");
      state.cards.push({
        id: state.cards.length + 1,
        title: `Card ${state.cards.length + 1}`,
        tasks: []
      });
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
    addTask: (state, action) => {
      state.cards[action.payload.id - 1].tasks.push({
        id: state.cards[action.payload.id - 1].tasks.length + 1,
        heading: action.payload.taskHeading
      });
    },
    deleteTask: (state, action) => {
      console.log("deleteTask", action);
      state.cards = state.cards.map((card) =>
        card.id === action.payload.cardId
          ? {
              ...card,
              tasks: card.tasks.filter(
                (task) => task.id !== action.payload.taskId
              )
            }
          : card
      );
    },
    updateTask: (state, action) => {
      state.cards = state.cards.map((card) =>
        card.id === action.payload.cardId
          ? {
              ...card,
              tasks: card.tasks.map((task) =>
                task.id === action.payload.taskId
                  ? { ...task, heading: action.payload.taskHeading }
                  : task
              )
            }
          : card
      );
    }
  }
});

export const { addCard, deleteCard, addTask, deleteTask, updateTask } =
  cardSlice.actions;
export default cardSlice.reducer;
