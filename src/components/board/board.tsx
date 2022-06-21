import { addCard } from "../../slices/card/card-slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { MemoizedCard } from "../card/card";
import "./board.css";

function Board() {
  const { cards } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  return (
    <div className="board">
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

export { Board };
