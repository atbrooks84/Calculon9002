﻿const simpleInterest = document.querySelector('.simple-interest');
const button = document.querySelector('.button');
//const loading = document.querySelector('.loader');
const results = document.querySelector('.result');

document.getElementById("simple-interest").addEventListener('submit', calculateResults())

function calculateResults(e) {

    document.getElementById("test").value = "test";
    // ui elements
    const principal = document.querySelector('#principal');
    const rate = document.querySelector('#rate');
    const years = document.querySelector('#years');
    const months = document.querySelector('#months')
    const monthlyPayment = document.querySelector('#payment');
    const totalInterest = document.querySelector('#interest');
    const totalAmount = document.querySelector('#total');
    // formula variables
    const p = parseFloat(principal.value);
    const r = parseFloat(rate.value);
    if (time > 0) {
        const t = parseFloat(years.value);
    }
    else if (months > 0) {
        const t = parseFloat(months.value);
    }
    else {
        showError("You did not enter any time")
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