function convert() {
    let degrees = parseFloat(document.getElementById('degrees').value);
    let type = document.getElementById('type').value;
    let result;

    if (isNaN(degrees)) {
        alert("Please enter a valid number");
        return;
    }

    if (type === "fahrenheit") {
        // Convert Fahrenheit to Celsius and Kelvin
        result = `${((degrees - 32) * 5/9).toFixed(2)} °C / ${(degrees + 459.67) * 5/9} K`;
    } else if (type === "celsius") {
        // Convert Celsius to Fahrenheit and Kelvin
        result = `${((degrees * 9/5) + 32).toFixed(2)} °F / ${(degrees + 273.15).toFixed(2)} K`;
    } else if (type === "kelvin") {
        // Convert Kelvin to Celsius and Fahrenheit
        result = `${(degrees - 273.15).toFixed(2)} °C / ${((degrees - 273.15) * 9/5 + 32).toFixed(2)} °F`;
    }

    document.getElementById('result').innerText = result;
}