import { useDispatch, useSelector } from "react-redux";
import {
  increament,
  decreament,
  reset,
  increamentByAmount,
} from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [increamentAmt, setIncreamentAmt] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter.count);

  const addValue = Number(increamentAmt) || 0;
  const resetAll = () => {
    setIncreamentAmt(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>

      <div>
        <button onClick={() => dispatch(increament())}>+</button>
        <button onClick={() => dispatch(decreament())}>-</button>

        <input
          type="text"
          value={increamentAmt}
          onChange={(e) => setIncreamentAmt(e.target.value)}
          placeholder="Inc by amount"
        />
        <button onClick={() => dispatch(increamentByAmount(addValue))}>
          Add amount
        </button>
        <button onClick={() => dispatch(resetAll)}>reset</button>
      </div>
    </section>
  );
};

export default Counter;
