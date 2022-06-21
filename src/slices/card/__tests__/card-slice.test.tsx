import { describe } from "@jest/globals";
import { cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { Board } from "../../../components";
import { store } from "../../../store/store";
import { render } from "../../../utils/custom-renderer";

afterEach(cleanup);

describe("CardSlice", () => {
  test("should add a new task", () => {
    render(
      <>
        <Provider store={store}>
          <Board />
        </Provider>
      </>
    );
    userEvent.click(screen.getByTestId("card-1-add-task"));
    expect(screen.getByTestId("card-1-task-2")).toBeInTheDocument();
  });

  test("should edit a task", () => {
    render(
      <>
        <Provider store={store}>
          <Board />
        </Provider>
      </>
    );

    userEvent.click(screen.getByTestId("card-1-task-1-edit-task"));
    expect(
      screen.getByTestId("card-1-task-1-edit-task-input")
    ).toBeInTheDocument();
  });

  test("should delete a task", () => {
    render(
      <>
        <Provider store={store}>
          <Board />
        </Provider>
      </>
    );
    userEvent.click(screen.getByTestId("card-1-task-1-delete-task"));
    expect(screen.queryByTestId("card-1-task-1")).not.toBeInTheDocument();
  });

  test("should add a new card", () => {
    render(
      <>
        <Provider store={store}>
          <Board />
        </Provider>
      </>
    );
    userEvent.click(screen.getByTestId("add-card"));
    expect(screen.getByText("Card 3")).toBeInTheDocument();
  });

  test("should delete the card", () => {
    render(
      <>
        <Provider store={store}>
          <Board />
        </Provider>
      </>
    );
    userEvent.click(screen.getByTestId("delete-card-1"));
    expect(screen.queryByTestId("card-1")).not.toBeInTheDocument();
  });
});
