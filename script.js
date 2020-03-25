// Write your JavaScript code here!
window.addEventListener("load", function() {
     
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         response.json().then( function(json) {
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[5].name}</li>
            <li>Diameter: ${json[5].diameter}</li>
            <li>Star: ${json[5].star}</li>
            <li>Distance from Earth: ${json[5].distance}</li>
            <li>Number of Moons: ${json[5].moons}</li>
         </ol>
        <img src="${json[5].image}"> 
         `;
      });
   });

   let form = document.querySelector("form"); 

   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.getElementById("pilotName");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let faultyItemsVisibility = document.getElementById("faultyItems");
      let cargoStatusUpdate = document.getElementById("cargoStatus");
      let fuelStatusUpdate = document.getElementById("fuelStatus");
      let pilotStatusUpdate = document.getElementById("pilotStatus");
      let copilotStatusUpdate = document.getElementById("copilotStatus");
      let launchStatusUpdate = document.getElementById("launchStatus");
      let readyForEvaluatedLaunch = true;
      



    /* This block of code shows how to format the HTML once you fetch some planetary JSON!
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${}</li>
               <li>Diameter: ${}</li>
               <li>Star: ${}</li>
               <li>Distance from Earth: ${}</li>
               <li>Number of Moons: ${}</li>
            </ol>
         <img src="${}">
      */
     

   if (!isNaN(pilotNameInput.value) && pilotNameInput.value !== ("")) {
         faultyItemsVisibility.style.visibility = "hidden";
         launchStatusUpdate.innerHTML = "Awaiting Information Before Launch";
         launchStatusUpdate.style.color = "black";
         alert("Please enter only letters in the Pilot Name field");
         readyForEvaluatedLaunch = false;
         event.preventDefault(); 
         }
   if (!isNaN(copilotNameInput.value) && copilotNameInput.value !== ("")) {
         faultyItemsVisibility.style.visibility = "hidden";
         launchStatusUpdate.innerHTML = "Awaiting Information Before Launch";
         launchStatusUpdate.style.color = "black";
         alert("Please enter only letters in the Co Pilot Name field");
         readyForEvaluatedLaunch = false;
         event.preventDefault(); 
         }
 
    if (isNaN(fuelLevelInput.value)) {
         faultyItemsVisibility.style.visibility = "hidden";
         launchStatusUpdate.innerHTML = "Awaiting Information Before Launch";
         launchStatusUpdate.style.color = "black";
         alert("Please enter only numbers in the Fuel Level field");
         readyForEvaluatedLaunch = false;
         event.preventDefault(); 
         }

    if (isNaN(cargoMassInput.value)) {
         faultyItemsVisibility.style.visibility = "hidden";
         launchStatusUpdate.innerHTML = "Awaiting Information Before Launch";
         launchStatusUpdate.style.color = "black";
         alert("Please enter only numbers in the Cargo Mass field");
         readyForEvaluatedLaunch = false;
          event.preventDefault(); 
         }

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         window.alert("All fields are required");
         faultyItemsVisibility.style.visibility = "hidden";
         launchStatusUpdate.innerHTML = "Awaiting Information Before Launch";
         launchStatusUpdate.style.color = "black";
         readyForEvaluatedLaunch = false;
         event.preventDefault();
      }

      if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000 && isNaN(pilotNameInput.value) && isNaN(copilotNameInput.value)) {
         readyForEvaluatedLaunch = true;
         event.preventDefault();
      }
      if (fuelLevelInput.value < 10000 && readyForEvaluatedLaunch === true && !isNaN(fuelLevelInput.value)) {
         faultyItemsVisibility.style.visibility = "visible";
         launchStatusUpdate.style.color = "red";
         launchStatusUpdate.innerHTML = "Shuttle not ready for launch";
         pilotStatusUpdate.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatusUpdate.innerHTML = `Pilot ${copilotNameInput.value} is ready for launch`;
         fuelStatusUpdate.innerHTML = "Fuel level too low for launch. Fuel must be over 10,000 L";
         event.preventDefault();
      }

      if (cargoMassInput.value > 10000 && readyForEvaluatedLaunch === true && !isNaN(cargoMassInput.value)) {
         faultyItemsVisibility.style.visibility = "visible";
         launchStatusUpdate.style.color = "red";
         launchStatusUpdate.innerHTML = "Shuttle not ready for launch";
         cargoStatusUpdate.innerHTML = "Too much mass to take off. Mass must be under 10,000 Kg";         
         pilotStatusUpdate.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatusUpdate.innerHTML = `Pilot ${copilotNameInput.value} is ready for launch`;
         event.preventDefault();
      }

      if ((fuelLevelInput.value >= 10000) && (cargoMassInput.value <= 10000) && readyForEvaluatedLaunch === true) {
         launchStatusUpdate.style.color = "green";
         faultyItemsVisibility.style.visibility = "hidden";
         launchStatusUpdate.innerHTML = "Shuttle is ready for launch";
         event.preventDefault();
      }

   });

});


