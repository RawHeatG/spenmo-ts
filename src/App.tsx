import "./App.css";
import { MemoizedCard } from "./components/card/card";
import { addCard } from "./slices/card/card-slice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const { cards } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      {cards &&
        cards.map((card) => (
          <MemoizedCard card={card} key={"card-" + card.id} />
        ))}
      <button className="add-card" onClick={() => dispatch(addCard())}>
        +
      </button>
    </div>
  );
}

export default App;
