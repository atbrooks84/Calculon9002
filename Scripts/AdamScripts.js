function calculateResults(e) {


    // ui elements
    const principal = Number(document.getElementById("principal").value);
    document.getElementById("initial").innerHTML = "$" + principal;
    const interest = Number(document.getElementById("interest").value);
    let years = Number(document.getElementById("years").value);
    let months = Number(document.getElementById("months").value);






    if (years && months) {
        showError("Please only use months or years")
    }
    else if (years > 0) {
        months = years * 12;
        let loanAmount = parseFloat(principal);
        let rate = parseFloat(interest);
        let monthlyPayment = (loanAmount) * (rate / 1200) / (1 - (1 + rate / 1200) ** (-months));
        document.getElementById("payment").innerHTML = monthlyPayment.toFixed(2);

    }
    else if (months > 0) {
        
        let loanAmount = parseFloat(principal);
        let rate = parseFloat(interest);
        let monthlyPayment = (loanAmount) * (rate / 1200) / (1 - (1 + rate / 1200) ** (-months));
        document.getElementById("payment").innerHTML = monthlyPayment.toFixed(2);

    }
    else {
        showError("You didn't enter a time limit");
    }


    


    paymentsPrincipal = [];
    paymentsPrincipal.push[principal];
    for (let i = 0, paymentsInterest = []; i < months; i++) {

        let previousRemainingBalance = principal;
        let currentInterest = "";
        let interestPayment = ((previousRemainingBalance * rate) / 1200);
        let principalPayment = monthlyPayment - interestPayment
        let updateTotal = interestPayment + currentInterest;
        paymentsInterest.push[interestPayment];
        paymentsPrincipal.push[principalPayment];

        document.getElementById("testInterestPayments").innerHTML = paymentsInterest.join(", $");
        document.getElementById("testPricipalPayments").innerHTML = paymentsPrincipal.join(", $");
        document.getElementById("finalInterest").innerHTML = updateTotal;
        document.getElementById("total").innerHTML = (principal + updateTotal);
    }

   

}


    //function showError(error) {
    //    // create error
    //    const errorMessage = document.createElement('div');
    //    const calculate = document.querySelector('#calculate');

    //    errorMessage.className = 'error';
    //    errorMessage.appendChild(document.createTextNode(error));
    //    simpleInterest.insertBefore(errorMessage, calculate);
    //    // clear error
    //    setTimeout(clearError, 3000);
    //}

    //function clearError() {
    //    // remove error
    //    document.querySelector('.error').remove();
    //}

    //button.addEventListener('click', (e) => {
    //    console.log('Calculating...');
    //    // show loader
    //    button.classList.add('loading');

    //    // set timeout
    //    setTimeout(calculateResults, 2000);

    //    // prevent page from reloading on submit
    //    e.preventDefault();
    //});