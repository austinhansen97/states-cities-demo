import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import "./Form.css";

function StateCities() {
  const [state, setState] = useState("");
  const [cities, setCities] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // STATES DROPDOWN

  // pulls states list from API
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

  // pulls cities list from API
  useEffect(() => {
    fetch("https://mocki.io/v1/07158a56-ff47-4e71-8180-d838ab25c7be")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCities(data);
      });
  }, []);

  // pushes names of keys to keysArray (states, 4)
  let keysArray = [];
  for (let property in cities) {
    keysArray.push(property);
  }

  // Get the # of cities within each selected state key
  Object.size = function (obj) {
    let size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  const myObj = cities[String(selectedState)];
  let numOfCities = Object.size(myObj);

  // fro loop that pushes cities list as <option> to citiesArray
  let citiesArray = [<option key={Math.random()} value=""></option>];
  for (let i = 0; i < numOfCities; i++) {
    citiesArray.push(
      <option key={Math.random()} value={cities[selectedState][i]}>
        {cities[selectedState][i]}
      </option>
    );
  }

  // selected state gets passed through handler function and into state (setSelectedState)
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
