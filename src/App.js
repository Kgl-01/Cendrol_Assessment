import { useState } from "react";
import "./App.scss";
import Counter from "./components/counter/counter.component";

function App() {
  const [cendrol, setCendrol] = useState(2);
  const [valueChanged, setValueChanged] = useState(false);

  const handleClick = () => {
    setCendrol((prevCendrol) => prevCendrol + 10);
  };

  const changeColor = () => {
    cendrol > 10 ? setValueChanged(true) : setValueChanged(false);
  };

  return (
    <div className="counter-container">
      <Counter
        value={cendrol}
        handleClick={handleClick}
        valueChanged={valueChanged}
        changeColor={changeColor}
      />
    </div>
  );
}

export default App;
