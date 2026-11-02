import { useState } from "react";
import "./App.css";
import ColorPanel from "./ColorPanel";

const colors = [
  { name: "piros", rgb: "rgb(255, 0, 0)" },
  { name: "zold", rgb: "rgb(0, 128, 0)" },
  { name: "kek", rgb: "rgb(0, 0, 255)" },
  { name: "sarga", rgb: "rgb(255, 255, 0)" },
  { name: "narancs", rgb: "rgb(255, 165, 0)" },
  { name: "lila", rgb: "rgb(128, 0, 128)" },
];

function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  function handleChange(event) {
    const chosenName = event.target.value;
    const found = colors.find((color) => color.name === chosenName);
    setSelectedColor(found || null);
  }

  return (
    <div className="app">
      <h1>valaszd ki a kedvenc szinedet!</h1>

      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>
          Valassz egy szint
        </option>
        {colors.map((color) => (
          <option key={color.name} value={color.name}>
            {color.name}
          </option>
        ))}
      </select>

      {selectedColor && <p>kedvenc szined: {selectedColor.name}</p>}

      <ColorPanel color={selectedColor} />
    </div>
  );
}

export default App;