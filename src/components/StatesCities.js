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

  // let stateArray = 0;
  // planetListFunction();
  // function planetListFunction() {
  //   stateArray = [];
  //   for (let i = -1; i < planet.length; i++) {
  //     stateArray.push(
  //       <option key={Math.random()} value={planet[i]}>
  //         {planet[i]}
  //       </option>
  //     );
  //   }
  //   return stateArray;
  // }

  // CITIES IN SELECTED STATE

  useEffect(() => {
    fetch("https://mocki.io/v1/07158a56-ff47-4e71-8180-d838ab25c7be")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let cities = data["Florida"][1];
        console.log(cities);
        setCities(cities);
      });
  }, []);

  let citiesArray = [];
  if (selectedState === "Florida") {
    citiesArray = [
      <option key={Math.random()} value=""></option>,
      <option key={Math.random()} value={cities}>
        {cities}
      </option>,
    ];
  }

  // // for loop that runs to get data.results[i].name . pushes object to array
  // let citiesArray = [];
  // for (let i = 0; i < cities.length; i++) {
  //   if (cities[i].name === selectedState) {
  //     citiesArray.push(
  //       <option key={Math.random()}></option>,
  //       <option key={Math.random()} value={cities[i].population}>
  //         Population ({cities[i].population})
  //       </option>,
  //       <option key={Math.random()} value={cities[i].climate}>
  //         Climate ({cities[i].climate})
  //       </option>,
  //       <option key={Math.random()} value={cities[i].terrain}>
  //         Terrain ({cities[i].terrain})
  //       </option>,
  //       <option key={Math.random()} value={cities[i].url}>
  //         API URL ({cities[i].url})
  //       </option>
  //     );
  //   }
  // }

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
