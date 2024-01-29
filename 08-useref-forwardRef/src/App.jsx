/* eslint-disable react/display-name */
import { forwardRef, useRef } from "react";

// This not works
// function MyInput(props) {
//   return <input {...props} />;
// }

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
