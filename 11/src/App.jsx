import { useRef } from "react";

export default function Counter() {
  let countRef = useRef(0);

  function handleClick() {
    countRef.current = countRef.current + 1;
  }

  return (
    <button onClick={handleClick}>You clicked {countRef.current} times</button>
  );
}
