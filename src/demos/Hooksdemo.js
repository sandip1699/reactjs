import React, { useState } from "react";

function Hooksdemo() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const values = [
    { id: 1, text: "menu1" },
    { id: 2, text: "menu2" },
    { id: 3, text: "menu3" },
    { id: 4, text: "menu5" },
  ];
  const [activeId, setActiveId] = useState();

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <ul className="mt-5">
        {values.map((val) => (
          <li onClick={() => setActiveId(val.id)} className={activeId === val.id ? "active" : ""}>
            {val.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Hooksdemo;
