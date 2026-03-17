// Capture values from user input with defaults if input is empty/cancelled.
const season = (prompt("Enter season (e.g. summer, winter):") || "summer").toLowerCase();
const plantType = (prompt("Enter plant type (e.g. flower, vegetable):") || "flower").toLowerCase();

// Return advice for the selected season.
function getSeasonAdvice(selectedSeason) {
    if (selectedSeason === "summer") {
        return "Water your plants regularly and provide some shade.\n";
    }
    if (selectedSeason === "winter") {
        return "Protect your plants from frost with covers.\n";
    }
    return "No advice for this season.\n";
}

// Return advice for the selected plant type.
function getPlantAdvice(selectedPlantType) {
    if (selectedPlantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    }
    if (selectedPlantType === "vegetable") {
        return "Keep an eye out for pests!";
    }
    return "No advice for this type of plant.";
}

function buildAdvice(selectedSeason, selectedPlantType) {
    return getSeasonAdvice(selectedSeason) + getPlantAdvice(selectedPlantType);
}

const advice = buildAdvice(season, plantType);

// Log the generated advice to the console
console.log(advice);

// TODO: Examples of possible features to add:
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
