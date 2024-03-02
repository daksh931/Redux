import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
import React from "react"
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementHandlerbY5 = () => {
    dispatch(counterActions.incrementBy5(5)); 
    // toolkit will auto create obj-> { type: SOME_UNIQUE_IDENTIFIER, payload: 5}
    //      'payload' <-syntax is automatically created by toolkit and assign value to it 
    //       whatever passed in func() 

  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <div className="flex flex-col items-center mt-36 ">
      <h2> Redux Counter</h2>
      {show && <div className="text-2xl text-sans"> {counter} </div>}
      <div>
        <button
          onClick={incrementHandler}
          className="p-1 bg-cyan-600 border-2 font-semibold rounded-lg text-black mx-2 px-3 hover:bg-cyan-700 "
        >
          Increment
        </button>

        <button
          onClick={incrementHandlerbY5}
          className="p-1 bg-cyan-600 border-2 font-semibold rounded-lg text-black mx-2 px-3 hover:bg-cyan-700 "
        >
          IncrementBy+5
        </button>

        <button
          onClick={decrementHandler}
          className="p-1 bg-cyan-600 border-2 font-semibold rounded-lg text-black mx-2 px-3 hover:bg-cyan-700 "
        >
          Decrement
        </button>
      </div>
      <button
        className="p-1 bg-cyan-600 border-2 font-semibold rounded-lg text-black mx-2 px-3 hover:bg-cyan-700 "
        onClick={toggleHandler}
      >
        Toggle Counter
      </button>
    </div>
  );
};

export default Counter;
