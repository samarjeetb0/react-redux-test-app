import { useSelector } from "react-redux";

export const DisplayCounter = () => {
  const counter = useSelector(store => store.counter);
  return (
    <>
      <h3>Count: {counter} </h3>
    </>
  );
};
