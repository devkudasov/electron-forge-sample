function celciusToFahrenheit() {
    const celcius = document.getElementById('celcius').value;
    const fahrenheit = (celcius * 9 / 5) + 32;

    document.getElementById('fahrenheit').value = fahrenheit;
}

function fahrenheitToCelcius() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    const celcius = (fahrenheit - 32) * 5 / 9;

    document.getElementById('celcius').value = celcius;
}