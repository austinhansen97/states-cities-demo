import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import "./Form.css";

function StateCities() {
  const [state, setState] = useState("");
  const [cities, setCities] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // STATES DROPDOWN

  useEffect(() => {
    fetch("https://mocki.io/v1/47a15552-e3f3-455b-9293-7b5aa5d4ab88")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedStates = data.map((states) => {
          return (
            <option key={Math.random()} value={states}>
              {states}
            </option>
          );
        });
        setState(transformedStates);
      });
  }, []);

  let stateArray = [state];

  // CITIES IN SELECTED STATE

  useEffect(() => {
    fetch("https://mocki.io/v1/07158a56-ff47-4e71-8180-d838ab25c7be")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let citiesList = data;
        setCities(citiesList);
      });
  }, []);

  // SCT 2 CITIES: data["Florida"][1]

  // for loop that runs to get data.results[i].name . pushes object to array
  let citiesArray = [<option key={Math.random()} value=""></option>];
  for (let i = 0; i < cities["Florida"].length; i++) {
    if (selectedState === "Florida") {
      citiesArray.push(
        <option key={Math.random()} value={cities[selectedState][i]}>
          {cities[selectedState][i]}
        </option>
      );
    }
  }

  function selectedStateHandler(selectedStateFromForms) {
    setSelectedState(selectedStateFromForms);
  }

  return (
    <div>
      <Form
        selectedState={selectedStateHandler}
        citiesArray={citiesArray}
        stateArray={stateArray}
      />
    </div>
  );
}

export default StateCities;
