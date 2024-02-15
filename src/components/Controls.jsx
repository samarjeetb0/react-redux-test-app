import { useRef } from "react";
import { useDispatch } from "react-redux";

export const Controls = () => {
  const numberInput = useRef("");

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAddition = () => {
    dispatch({
      type: "ADDITION",
      payload: {
        num: numberInput.current.value,
      },
    });
    numberInput.current.value = "";
  };

  const handleSubstract = () => {
    dispatch({
      type: "SUBSTRACT",
      payload: {
        num: numberInput.current.value,
      },
    });
    numberInput.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch({
      type: "PRIVACY_TOGGLE",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input
            className="form-control"
            type="text"
            placeholder="Enter number"
            ref={numberInput}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-warning"
            onClick={handlePrivacy}
          >
            Privacy Toggle
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-info button-operator"
            onClick={handleAddition}
          >
            Add
          </button>

          <button
            type="button"
            className="btn btn-danger button-operator"
            onClick={handleSubstract}
          >
            Sub
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary button-operator"
            onClick={handleIncrement}
          >
            +1
          </button>

          <button
            type="button"
            className="btn btn-success button-operator"
            onClick={handleDecrement}
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
};
