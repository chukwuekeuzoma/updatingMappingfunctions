import "./styles.css";
import { useState } from "react";

const options = [
  { name: "frontend" },
  { name: "backend" },
  { name: "devops" },
  { name: "design" }
]; //default array of objects

export default function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  //this is the array of options selected/highlighted

  const handleSelect = (option) => {
    // console.log(option);
    if (selectedOptions.includes(option)) {
      setSelectedOptions((current) =>
        current.filter((element) => {
          return element !== option;
        })
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  console.log(selectedOptions);
  return (
    <div className="App">
      {options.map((option) => (
        <p
          key={option.name}
          className={selectedOptions.includes(option) ? "selected" : ""}
          onClick={() => handleSelect(option)}
        >
          {option.name}
        </p>
      ))}
    </div>
  );
}
