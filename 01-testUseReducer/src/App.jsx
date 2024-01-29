import { useState } from "react";

const bookData = [
  { id: 1, name: "javaScript" },
  { id: 2, name: "React" },
  { id: 3, name: "Python" },
];

function App() {
  const [books, setBooks] = useState(bookData);
  return <></>;
}

export default App;
