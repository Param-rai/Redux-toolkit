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
    <section className="flex flex-col justify-center gap-1">
      <p className="text-2xl text-center">{count}</p>

      <div className="flex flex-col gap-1 items-center">
        <div>
          <button
            onClick={() => dispatch(increament())}
            className="p-1 text-xl w-20 h-20"
          >
            +
          </button>
          <button
            onClick={() => dispatch(decreament())}
            className="p-1 text-xl w-20 h-20"
          >
            -
          </button>
        </div>
        <br />
        <input
          type="text"
          value={increamentAmt}
          onChange={(e) => setIncreamentAmt(e.target.value)}
          className="p-2"
        />
        <br />
        <div className="flex gap-1">
          <button
            className="p-2"
            onClick={() => dispatch(increamentByAmount(addValue))}
          >
            Add amount
          </button>
          <button className="p-2" onClick={() => dispatch(resetAll)}>
            reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
