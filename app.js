(function () {
    let inputDisplay = document.querySelector('.input-display');
    let outputDisplay = document.querySelector('.output-display');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-solution');

    let inputValue = '';

    function updateInputDisplay(value) {
        inputValue += value;
        inputDisplay.textContent = inputValue; 
    }

    function updateOutputDisplay(result) {
        outputDisplay.textContent = '=' + result; 
    }

    // Add event listener for each button
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;

            if (value === "SOLUTION") 
                return;
            updateInputDisplay(value);
        });
    });

    equal.addEventListener('click', function () {
        let currentExpression = inputValue;
        if (currentExpression === "") {
            updateOutputDisplay("Please Enter a Value");
        } else {
            try {
                let result = eval(currentExpression);
                updateOutputDisplay(result);
            } catch (error) {
                updateOutputDisplay("Error");
            }
        }
    });

    clear.addEventListener('click', function () {
        inputValue = '';  
        inputDisplay.textContent = '';  
        outputDisplay.textContent = '';  
    });
})();
