import { useRef } from "react";

export default function Form() {
  const inputFocusRef = useRef(null);

  const onClick = () => {
    inputFocusRef.current.focus();
  };

  return (
    <>
      <input ref={inputFocusRef} />
      <button onClick={onClick}>Focus the input</button>
    </>
  );
}
