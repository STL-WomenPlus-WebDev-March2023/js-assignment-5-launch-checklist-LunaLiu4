// Write your JavaScript code here!

window.addEventListener("load", function () {

    let form = document.querySelector('form');
    let list = document.getElementById('faultyItems');
    list.style.visibility = 'hidden';
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = parseInt(document.querySelector("input[name=fuelLevel]").value);
        let cargoLevel = parseInt(document.querySelector("input[name=cargoMass]").value);
        // console.log(typeof (pilot));
        // console.log(typeof (fuelLevel));
        // console.log(pilot, copilot, fuelLevel, cargoLevel);
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        // }).then(function () {
            // console.log(listedPlanets);
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
            let selectedPlanet = pickPlanet(listedPlanets);
            console.log(selectedPlanet);
            addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
        })
    })
});