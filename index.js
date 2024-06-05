document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tempForm');
    const inputTemp = document.getElementById('inputTemp');
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const temp = parseFloat(inputTemp.value);
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;

        if (isNaN(temp)) {
            resultsDiv.textContent = 'Please enter a valid temperature.';
            resultsDiv.style.color = 'red';
            return;
        }

        let result;
        if (fromUnit === toUnit) {
            result = temp;
        } else if (fromUnit === 'celsius') {
            if (toUnit === 'fahrenheit') {
                result = (temp * 9/5) + 32;
            } else if (toUnit === 'kelvin') {
                result = temp + 273.15;
            }
        } else if (fromUnit === 'fahrenheit') {
            if (toUnit === 'celsius') {
                result = (temp - 32) * 5/9;
            } else if (toUnit === 'kelvin') {
                result = (temp - 32) * 5/9 + 273.15;
            }
        } else if (fromUnit === 'kelvin') {
            if (toUnit === 'celsius') {
                result = temp - 273.15;
            } else if (toUnit === 'fahrenheit') {
                result = (temp - 273.15) * 9/5 + 32;
            }
        }

        resultsDiv.textContent = `Result: ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
        resultsDiv.style.color = 'black';
    });
});
