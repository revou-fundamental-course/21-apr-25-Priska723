console.log('JavaScript is working!');

function validateForm() {
    const inputCelsius = document.getElementById('celsius');
    console.log(inputCelsius.value);

    // Validasi input untuk Celsius
    if (inputCelsius.value === '') {
        alert('Masukkan angka terlebih dahulu!');
        return false; // Menghentikan eksekusi jika input kosong
    }
    return true; // Mengembalikan true jika input valid
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Temperature converter script loaded');

    // Initialize elements
    const inputCelsius = document.getElementById('celsius');
    const inputFahrenheit = document.getElementById('fahrenheit');
    const inputCalculation = document.getElementById('calculation');

    const btnConvert = document.getElementById('btnConvert');
    const btnReset = document.getElementById('btnReset');
    const btnReverse = document.getElementById('btnReverse');

    // Convert Celsius to Fahrenheit and vice versa
    function convert(reverse = false) {
        if (reverse == false) {
            // Validasi sebelum konversi
            if (!validateForm()) {
                return; // Jika validasi gagal, hentikan eksekusi
            }

            const celsius = parseFloat(inputCelsius.value);
            const fahrenheit = (celsius * 9) / 5 + 32;
            inputFahrenheit.value = fahrenheit.toFixed(2);
            inputCalculation.value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;

        } else {
            // Konversi dari Fahrenheit ke Celsius
            const fahrenheit = parseFloat(inputFahrenheit.value);
            const celsius = ((fahrenheit - 32) * 5) / 9;
            inputCelsius.value = celsius.toFixed(2);
            inputCalculation.value = `(${fahrenheit}°F - 32) * 5/9 = ${celsius.toFixed(2)}°C`;
        }
    }

    function reset() {
        inputCelsius.value = '';
        inputFahrenheit.value = '';
        inputCalculation.value = '';
    }

    function reverse() {
        convert(true);
    }

    // Event listeners
    btnConvert.addEventListener('click', () => convert(false));
    btnReset.addEventListener('click', reset);
    btnReverse.addEventListener('click', reverse);
});