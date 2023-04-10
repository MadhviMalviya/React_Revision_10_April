import React, { useState } from "react";

function App2() {
  const [greetings, setGreetings] = useState([
    "Hello,Good morning",
    "Good Day",
    "Marry X-mas",
    "Happy B'day",
    "Happy Diwali"
  ]);

  const [greet, setGreet] = useState(0);

  const handleButtonClick = () => {
    setGreet(greet === greetings.length - 1 ? 0 : greet + 1);
  };

  return (
    <div>
      <h1 className="h1" >{greetings[greet]}</h1>
      <button onClick={handleButtonClick}>Next Greeting</button>
    </div>
  );
}

export default App2;
