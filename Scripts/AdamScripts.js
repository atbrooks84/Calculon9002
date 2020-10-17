const simpleInterest = document.querySelector('.simple-interest');
const button = document.querySelector('.button');
//const loading = document.querySelector('.loader');
const results = document.querySelector('.result');

//document.getElementById("calculate").addEventListener('click', calculateResults())

function calculateResults(e) {

    
    // ui elements
    const principal = Number(document.getElementById("principal").value);
    const rate = Number(document.getElementById("interest").value);
    const years = Number(document.getElementById("years").value);
    const months = Number(document.getElementById("months").value);
    const monthlyPayment = document.getElementById("payment").innerHTML;
    const totalInterest = document.querySelector('#interest');
    const totalAmount = document.querySelector('#total');
    // formula variables
    const p = parseFloat(principal.value);
    const r = parseFloat(rate.value);
    if (years > 0) {
        const t = parseFloat(years.value);
    }
    else if (months > 0) {
        const t = parseFloat(months.value);
    }
    else {
        showError("You did not enter any time")
    }

    if (principal > 0) {
        document.getElementById("test").innerHTML = "test";
    }
    // calculate total interest
    const interest = (p * t * r / 100);
    // calculate monthly payment
    const payment = ((interest + p) / (t * 12)).toFixed(2);
    // calculate total amount paid
    const total = (interest + p).toFixed(2);

    if (isFinite(payment)) {
        totalInterest.innerHTML = '$' + (interest).toFixed(2);
        monthlyPayment.innerHTML = '$' + payment;
        totalAmount.innerHTML = '$' + total;
        // hide loader
        button.classList.remove('loading');
        // show results
        results.classList.remove('hide');
    } else {
        // show error
        showError('Please check your numbers and try again.');
        // hide loader
        button.classList.remove('loading');
    }
}

function showError(error) {
    // create error
    const errorMessage = document.createElement('div');
    const calculate = document.querySelector('#calculate');

    errorMessage.className = 'error';
    errorMessage.appendChild(document.createTextNode(error));
    simpleInterest.insertBefore(errorMessage, calculate);
    // clear error
    setTimeout(clearError, 3000);
}

function clearError() {
    // remove error
    document.querySelector('.error').remove();
}

button.addEventListener('click', (e) => {
    console.log('Calculating...');
    // show loader
    button.classList.add('loading');

    // set timeout
    setTimeout(calculateResults, 2000);

    // prevent page from reloading on submit
    e.preventDefault();
});