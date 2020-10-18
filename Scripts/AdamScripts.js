function calculateResults(e) {


    // ui elements

    const principal = Number(document.getElementById("principal").value);
    document.getElementById("initial").innerHTML = "$" + principal;
    const interest = Number(document.getElementById("interest").value);
    let years = Number(document.getElementById("years").value);
    let months = Number(document.getElementById("months").value);




    //const loanAmount = 5000;
    //const interest = 5;
    //const months = 120;

    if (years && months) {
        showError("Please only use months or years")
    }
    else if (years > 0 && years < 50) {
        months = years * 12;
        let loanAmount = parseFloat(principal);
        let rate = parseFloat(interest);
        var monthlyPayment = (loanAmount) * (rate / 1200) / (1 - (1 + rate / 1200) ** (-months));
        document.getElementById("payment").innerHTML = monthlyPayment.toFixed(2);

    }
    else if (months > 0 && months < 600) {
        
        let loanAmount = parseFloat(principal);
        let rate = parseFloat(interest);
        var monthlyPayment = (loanAmount) * (rate / 1200) / (1 - (1 + rate / 1200) ** (-months));
        document.getElementById("payment").innerHTML = monthlyPayment.toFixed(2);

    }
    else if (years > 50 || months > 600) {
        showError("That's too long")
    }
    else {
        showError("You didn't enter a time limit");
        return;
    }



    let loanAmount = principal;
    //let monthlyPayment = (loanAmount) * (interest / 1200) / (1 - (1 + interest / 1200) ** (-months));
    let remainingBalance = loanAmount;
    let amortizationSchedule = []
    let paymentsInterest = [];
    let paymentsPrincipal = [];
    let interestPaymentsSum = [];
    let totalInterestCount = [];
    let remainingBalanceCount = [];

    for (let i = 0, currentInterest = 0, totalInterest = 0; i < months; i++) {
        let interestPayment = remainingBalance * (interest / 1200);
        let principalPayment = monthlyPayment - interestPayment

        remainingBalance = remainingBalance - principalPayment;

        amortizationSchedule.push([i + 1, monthlyPayment, principalPayment, interestPayment, remainingBalance])
        console.log(...amortizationSchedule[i])
        paymentsInterest.push(interestPayment);
        paymentsPrincipal.push(principalPayment)
        interestPaymentsSum.push(interestPayment)
        remainingBalanceCount.push(remainingBalance);

        function sum(total, num) {
            return total + num;
        }

        let finalInterest = interestPaymentsSum.reduce(sum).toFixed(2);
        let totalLoan = parseFloat(finalInterest) + principal;

        document.getElementById("testInterestResults").innerHTML = interestPaymentsSum.join(", $");
        document.getElementById("finalInterest").innerHTML = finalInterest;
        document.getElementById("total").innerHTML = totalLoan;
        
        //totalInterest = currentInterest + interestPayment;
        //currentInterest = interestPayment;
        //finalCost = principal + totalInterest;

        

        //document.getElementById("testInterestPayments").innerHTML = paymentsInterest.join(", $");
        //document.getElementById("testPrincipalPayments").innerHTML = paymentsPrincipal.join(", $");
        //document.getElementById("testBalanceResults").innerHTML = remainingBalanceCount.join(", $");
        
        //document.getElementById("finalInterest").innerHTML = parseFloat(totalInterest).toFixed(2);
        //document.getElementById("total").innerHTML = finalCost;

        
        //for (let a = 0, sum = 0; a < interestPaymentsSum.length; a++) {
        //    sum += parseFloat(interestPaymentsSum[a]);
        //    totalInterestCount.push(sum);
        //    finalCost = principal + sum;
            
        //    //document.getElementById("testInterestResults").innerHTML = totalInterestCount.join(", $");
            


        //    document.getElementById("finalInterest").innerHTML = parseFloat(sum).toFixed(2);
        //    document.getElementById("total").innerHTML = finalCost.toFixed(2) ;
        //}
            
    }

    





    //let paymentsPrincipal = [];
    //let paymentsInterest = [];
    paymentsPrincipal = [];    
    //let previousRemainingBalance = principal;
    //let currentInterest = 0;
    //paymentsPrincipal.push(parseFloat(principal));
    ////let previousRemainingBalance = principal;
    ////let currentInterest = 0;
    //for (let i = 0; i < months; i++) {

    //    //let previousRemainingBalance = principal;

    //    //let currentInterest = 0;
    //    let rate = interest;
    //    let interestPayment = ((previousRemainingBalance * rate) / 1200);        
    //    let principalPayment = monthlyPayment - interestPayment;
    //    let updateTotal = interestPayment + currentInterest;
    //    currentInterest = updateTotal;
    //    previousRemainingBalance = previousRemainingBalance - monthlyPayment;
    //    paymentsInterest.push(interestPayment);
    //    paymentsPrincipal.push(principalPayment);
    //    let finalTotal = principal + updateTotal;

    //    document.getElementById("testInterestPayments").innerHTML = paymentsInterest.join(", $");
    //    document.getElementById("testPrincipalPayments").innerHTML = paymentsPrincipal.join(", $");
    //    document.getElementById("finalInterest").innerHTML = parseFloat(updateTotal).toFixed(2);
    //    document.getElementById("total").innerHTML = finalTotal;
    //}

        //let currentInterest = 0;
        //let rate = parseFloat(interest);
        //let interestPayment = ((previousRemainingBalance * (rate / 1200)));        
        //let principalPayment = parseFloat(monthlyPayment) - parseFloat(interestPayment);
        //let updateTotal = parseFloat(interestPayment) + parseFloat(currentInterest);
        //currentInterest = parseFloat(updateTotal);
        //previousRemainingBalance = previousRemainingBalance - monthlyPayment;
        //paymentsInterest.push(parseFloat(interestPayment));
        //paymentsPrincipal.push(parseFloat(principalPayment));
        //let finalTotal = parseFloat(principal) + parseFloat(updateTotal);

        //document.getElementById("testInterestPayments").innerHTML = paymentsInterest.join(", $");
        //document.getElementById("testPrincipalPayments").innerHTML = paymentsPrincipal.join(", $");
        //document.getElementById("finalInterest").innerHTML = parseFloat(updateTotal).toFixed(2);
        //document.getElementById("total").innerHTML = finalTotal;
    }


   



calculateResults("");


    function showError(error) {
        // create error
        document.getElementById("error").innerHTML = error;
    }

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