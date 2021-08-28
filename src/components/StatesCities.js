import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import "./Form.css";

function StateCities() {
  const [planet, setPlanet] = useState("");
  const [planetDetails, setPlanetDetails] = useState("");
  const [selectedPlanet, setSelectedPlanet] = useState("");

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
        setPlanet(transformedStates);
      });
  }, []);

  let planetArray = [planet];

  // let planetArray = 0;
  // planetListFunction();
  // function planetListFunction() {
  //   planetArray = [];
  //   for (let i = -1; i < planet.length; i++) {
  //     planetArray.push(
  //       <option key={Math.random()} value={planet[i]}>
  //         {planet[i]}
  //       </option>
  //     );
  //   }
  //   return planetArray;
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
        setPlanetDetails(cities);
      });
  }, []);

  let planetDetailsArray = [];
  if (selectedPlanet === "Florida") {
    planetDetailsArray = [
      <option key={Math.random()} value=""></option>,
      <option key={Math.random()} value={planetDetails}>
        {planetDetails}
      </option>,
    ];
  }

  // // for loop that runs to get data.results[i].name . pushes object to array
  // let planetDetailsArray = [];
  // for (let i = 0; i < planetDetails.length; i++) {
  //   if (planetDetails[i].name === selectedPlanet) {
  //     planetDetailsArray.push(
  //       <option key={Math.random()}></option>,
  //       <option key={Math.random()} value={planetDetails[i].population}>
  //         Population ({planetDetails[i].population})
  //       </option>,
  //       <option key={Math.random()} value={planetDetails[i].climate}>
  //         Climate ({planetDetails[i].climate})
  //       </option>,
  //       <option key={Math.random()} value={planetDetails[i].terrain}>
  //         Terrain ({planetDetails[i].terrain})
  //       </option>,
  //       <option key={Math.random()} value={planetDetails[i].url}>
  //         API URL ({planetDetails[i].url})
  //       </option>
  //     );
  //   }
  // }

  function selectedPlanetHandler(selectedPlanetFromForms) {
    setSelectedPlanet(selectedPlanetFromForms);
  }

  return (
    <div>
      <Form
        selectedPlanet={selectedPlanetHandler}
        planetDetailsArray={planetDetailsArray}
        planetArray={planetArray}
      />
    </div>
  );
}

export default StateCities;
