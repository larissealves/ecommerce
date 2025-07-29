import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ListDrivers from "./components/listDrivers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ListDrivers />
    </>
  );
}

export default App;
