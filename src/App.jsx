import axios from "axios";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [generatedExcuses, setGeneratedExcuses] = useState("");
  const [excuseType, setExcuseType] = useState("");

  const fetchedAPI = (excuse) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
      .then((res) => {
        setGeneratedExcuses(res.data[0].excuse);
        setExcuseType(res.data[0].category);
        console.log(res.data[0].excuse);
      });
  };
  return (
    <>
      <div className="app">
        <h1 id="heading">Excuse Generator</h1>
        <div className="buttons">
          <button onClick={() => fetchedAPI("family")}>Family</button>
          <button onClick={() => fetchedAPI("office")}>Office</button>
          <button onClick={() => fetchedAPI("developers")}>Developers</button>
        </div>

        <h1 id="excuse">{generatedExcuses}</h1>
        <h3>Excuse Type: {excuseType}</h3>
      </div>
    </>
  );
};

export default App;
