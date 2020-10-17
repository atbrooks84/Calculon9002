// Listen for Submit
//document.getElementById("loan-form").addEventListener("submit", function (e) {
//    // Hide Results
//    document.getElementById("result").style.display = "none";

//    // Show Loader
//    document.getElementById("loading").style.display = "block";

//    setTimeout(calculateResults, 2000);

//    e.preventDefault();
//});

const simpleInterest = document.querySelector('.simple-interest');
const button = document.querySelector('.button');
//const loading = document.querySelector('.loader');
const results = document.querySelector('.results');

function calculateResults(e) {
	// ui elements
	const principal = document.querySelector('#principal');
	const rate = document.querySelector('#rate');
	const time = document.querySelector('#time');
	const monthlyPayment = document.querySelector('#payment');
	const totalInterest = document.querySelector('#interest');
	const totalAmount = document.querySelector('#total');
	// formula variables
	const p = parseFloat(principal.value);
	const r = parseFloat(rate.value);
	const t = parseFloat(time.value);

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

//document.getElementById("submit").addEventListener('click', function () {
//    let loan = Number(document.getElementById("amount").value);
//    let rate = Number(document.getElementById("interest").value)
//    let months = Number(document.getElementById("months").value)
//    let years = Number(document.getElementById("years").value)
//    let monthlyPayment = Number(document.getElementById("monthly-payment").value);
//    let totalPayment = Number(document.getElementById("total-payment").value);
//    let totalInterest = Number(document.getElementById("total-interest").value);

//    let loanTest = (loan * (rate / 1200));
//    let totalMonthsTest = years * 12;
    
//    let rateTest = 1 - (1 + (rate / 1200))
//    let rateTest2 = rateTest ^ totalMonthsTest;
//    let interestTest = loan * loanTest / rateTest2;

//    document.getElementById("monthly-payment").innerHTML = interestTest;
    

//    let principal = parseFloat(loan.value);
//    let calculatedInterest = parseFloat(rate.value) / 100 / 12;
//    let calculatedPayments = parseFloat(years.value) * 12;
//    let calculatedMonths = parseInt(months.value);

//    let paidY = Math.pow(1 + calculatedInterest, calculatedPayments);
//    let paidM = Math.pow(1 + calculatedInterest, calculatedMonths);
//    let yearly = (principal * paidY * calculatedInterest) / (paidY - 1);
//    let monthly = (principal * paidM * calculatedInterest) / (paidM - 1);

//    let remainingBalance = amount;
//    let interestMonthly = (remainingBalance * (interest / 1200));
//    let principalYearly = (yearly - interestMonthly);
//    let principalMonthly = (monthly - interestMonthly);

//    if (monthly && yearly) {
//        showError("Please only use months or years");
//    }
//    else if (isFinite(yearly)) {
//        document.getElementById("monthly-payment").value = yearly.toFixed(2);
//        document.getElementById("total-payment").value = (yearly * calculatedPayments).toFixed(2);
//        document.getElementById("total-interest").value = (yearly * calculatedPayments - principal).toFixed(2);
//    }
//    else if (ifFinite(monthly)) {
//        document.getElementById("monthly-payment").value = monthly.toFixed(2);
//        document.getElementById("total-payment").value = (monthly * calculatedPayments).toFixed(2);
//        document.getElementById("total-interest").value = (monthly * calculatedPayments - principal).toFixed(2);
//    }
//    else {
//        showError("Please check your input")
//    }    
//})

//// Calculate Results
//function calculateResults() {
//    // UI Vars
//    const amount = document.getElementById("amount");
//    const interest = document.getElementById("interest");
//    const years = document.getElementById("years");
//    const months = document.getElementById("months");
//    const monthlyPayment = document.getElementById("monthly-payment");
//    const totalPayment = document.getElementById("total-payment");
//    const totalInterest = document.getElementById("total-interest");

//    const principal = parseFloat(amount.value);
//    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
//    const calculatedPayments = parseFloat(years.value) * 12;
//    const calculatedMonths = parseInt(months.value);

//    // Computed Monthly payment
//    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
//    const y = Math.pow(1 + calculatedInterest, calculatedMonths);
//    const monthly = (principal * x * calculatedInterest) / (x - 1);
//    const monthpay = (principal * y * calculatedInterest) / (y - 1);

//    //Interst and principal payments
//    var remainingBalance = amount;
//    var interstMonthly = (remainingBalance * (interest / 1200));
//    var principalMonthly1 = (monthly - interestMonthly);
//    var principalMonthly2 = (monthpay - interestMonthly);

//    if (monthly && monthpay) {
//        showError("Please only enter months or years");
//    }
//    else if (isFinite(monthly)) {
//        monthlyPayment.value = monthly.toFixed(2);
//        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
//        totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

//        // Show Results
//        document.getElementById("result").style.display = "block";

//        // Hide Loader
//        document.getElementById("loading").style.display = "none";
//    }
//    else if (isFinite(monthpay)) {
//        monthlyPayment.value = monthpay.toFixed(2);
//        totalPayment.value = (monthpay * calculatedMonths).toFixed(2);
//        totalInterest.value = (monthpay * calculatedMonths - principal).toFixed(2);

//        //Show Results
//        document.getElementById("result").style.display = "block";

//        //Hide Loader
//        document.getElementById("loading").style.display = "none";
//    }
//    else {
//        showError("Please check number inputs");
//    }
//}

//// Show Error
//function showError(error) {
//    // Hide Results
//    document.getElementById("result").style.display = "none";

//    // Hide Loader
//    document.getElementById("loading").style.display = "none";

//    // Create a div
//    const errorDiv = document.createElement("div");

//    // Get Elements
//    const card = document.querySelector(".card");
//    const heading = document.querySelector(".heading");

//    // Add class
//    errorDiv.className = "alert alert-danger";

//    // Create text node and append div
//    errorDiv.appendChild(document.createTextNode(error));

//    // Insert error above heading
//    card.insertBefore(errorDiv, heading);

//    // Clear Error after 3 seconds
//    setTimeout(clearError, 3000);

//    // Clear Error
//    function clearError() {
//        document.querySelector(".alert").remove();
//    }
//}
