import { Dispatch, SetStateAction } from "react";

export default function Quantity({
  amount,
  setAmount,
}: {
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
}) {
  const decrementHandler = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const incrementHandler = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };
  return (
    <p>
      Количество:{" "}
      <span className="btn-group btn-group-sm pl-2">
        <button onClick={decrementHandler} className="btn btn-secondary">
          -
        </button>
        <span className="btn btn-outline-primary">{amount}</span>
        <button onClick={incrementHandler} className="btn btn-secondary">
          +
        </button>
      </span>
    </p>
  );
}
