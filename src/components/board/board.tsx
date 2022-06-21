import { addCard } from "../../slices/card/card-slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { MemoizedCard } from "../card/card";
import "./board.css";

const Board: React.FC = () => {
  const { cards } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  return (
    <div className="board">
      {cards.length !== 0 ? (
        cards.map((card) => (
          <MemoizedCard card={card} key={"card-" + card.id} />
        ))
      ) : (
        <h1>Add a card to get started</h1>
      )}
      <button
        className="add-card"
        onClick={() => dispatch(addCard())}
        data-testid="add-card"
      >
        +
      </button>
    </div>
  );
};

export { Board };
