import React, { useState } from "react";
import "./App.css";
import ResultCard from "./Components/ResultCard/ResultCard";
import { callDotNetEndpoint, callJavaEndpoint } from "./service";

function App() {
  const [stateInput, setStateInput] = useState("test");
  const [javaTime, setJavaTime] = useState(0);
  const [dotnetTime, setDotnetTime] = useState(0);

  // Get the video
  let video = document.getElementById("myVideo");

  const testData = [
    {
      label: "totalCases",
      value: 100,
    },
    {
      label: "Recovered",
      value: 30,
    },
    {
      label: "Deaths",
      value: 12,
    },
  ];

  const onCallDotNetEndpoint = (stateInput) => {
    document.getElementById("myVideo").play();
    let start, end;
    start = new Date();
    callDotNetEndpoint()
      .then((res) => {
        end = new Date();
        console.log(res);
        setDotnetTime(end.getTime() - start.getTime());
        document.getElementById("myVideo").pause();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onCallJavaEndpoint = (stateInput) => {
    document.getElementById("myVideo").play();
    let start, end;
    start = new Date();
    callJavaEndpoint()
      .then((res) => {
        end = new Date();
        console.log(res);
        setJavaTime(end.getTime() - start.getTime());
        document.getElementById("myVideo").pause();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <video autoplay muted loop id="myVideo">
        <source
          src="https://d3jbhadj57dczt.cloudfront.net/preview-128704-ziC6xHGwhm-high.mp4"
          type="video/mp4"
        />
      </video>
      <div className="main-container">
        <div className="state-input-class">
          <input
            type="text"
            placeholder="State..."
            onChange={(event) => setStateInput(event.target.value)}
          />
        </div>
        <div className="result-container">
          <ResultCard
            heading={`JAVA`}
            timer={javaTime}
            data={testData}
            onSearchClick={onCallJavaEndpoint}
          />
          <ResultCard
            heading={`.NET`}
            timer={dotnetTime}
            data={testData}
            onSearchClick={onCallDotNetEndpoint}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
