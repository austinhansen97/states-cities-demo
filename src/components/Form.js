import React from "react";
import Card from "../UI/Card";
import "./Form.css";
import { useState } from "react";

function Form(props) {
  const [selectedState, setSelectedState] = useState("");
  const [chosenCity, setChosenCity] = useState("");

  function runFunction() {
    props.selectedState(selectedState);
  }

  return (
    <section>
      <Card>
        <h1 className="title">U.S. STATES</h1>
        <form className="parent-dropdowns">
          <section className="left-panel">
            <div className="label-select">
              <label>CHOOSE A STATE</label>
              <select
                onChange={(event) => {
                  setSelectedState(event.target.value);
                  setChosenCity("");
                }}
                onClick={runFunction}
              >
                {props.stateArray}
              </select>
            </div>

            <div className="label-select">
              <label>CHOOSE A CITY</label>
              <select
                onChange={(event) => {
                  setChosenCity(event.target.value);
                }}
              >
                {props.citiesArray}
              </select>
            </div>
          </section>

          <section className="right-panel">
            <h3>{selectedState}</h3>
            <p>{chosenCity}</p>
          </section>
        </form>
      </Card>
    </section>
  );
}

export default Form;
