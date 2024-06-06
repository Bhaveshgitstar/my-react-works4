import { useState } from "react";
import "./App.css";

function App() {
  var clickMe = 0;
  const [clickLog, setClickLog] = useState([]);

  const updateString = (val, index) => {
    let updatedString = val;
    if (index === 0) {
      updatedString = `${index + 1}st time ${updatedString}`;
    } else if (index === 1) {
      updatedString = `${index + 1}nd time ${updatedString}`;
    } else if (index === 2) {
      updatedString = `${index + 1}rd time ${updatedString}`;
    } else {
      updatedString = `${index + 1}th time ${updatedString}`;
    }
    return updatedString;
  };

  const handleOnClickLog = (e) => {
    if (clickMe <= 1) {
      setClickLog([...clickLog, `you clicked ${clickMe} time`]);
    } else {
      setClickLog([...clickLog, `you clicked ${clickMe} times`]);
    }
  };
  return (
    <center>
      <div>
        <button
          onClick={() => {
            console.log(clickMe++);
          }}
        >
          Click Me
        </button>
      </div>

      <div>
        <button
          onClick={(e) => {
            handleOnClickLog(e);
          }}
        >
          Show Click Logs(Using normal variable)
        </button>
      </div>

      <div>
        {clickLog.map((val, index) => {
          return <p key={index}>{updateString(val, index)}</p>;
        })}
      </div>
    </center>
  );
}

export default App;
