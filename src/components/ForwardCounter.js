import useCounter from "../hooks/Hooks";
import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
