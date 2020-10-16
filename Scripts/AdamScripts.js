// Listen for Submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
    // Hide Results
    document.getElementById("result").style.display = "none";

    // Show Loader
    document.getElementById("loading").style.display = "block";

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate Results
function calculateResults() {
    // UI Vars
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const months = document.getElementById("months");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    const calculatedMonths = parseInt(months.value);

    // Computed Monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const y = Math.pow(1 + calculatedInterest, calculatedMonths);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    const monthpay = (principal * y * calculatedInterest) / (y - 1);

    //Interst and principal payments
    var remainingBalance = amount;
    var interstMonthly = (remainingBalance * (interest / 1200));
    var principalMonthly1 = (monthly - interestMonthly);
    var principalMonthly2 = (monthpay - interestMonthly);

    if (monthly && monthpay) {
        showError("Please only enter months or years");
    }
    else if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

        // Show Results
        document.getElementById("result").style.display = "block";

        // Hide Loader
        document.getElementById("loading").style.display = "none";
    }
    else if (isFinite(monthpay)) {
        monthlyPayment.value = monthpay.toFixed(2);
        totalPayment.value = (monthpay * calculatedMonths).toFixed(2);
        totalInterest.value = (monthpay * calculatedMonths - principal).toFixed(2);

        //Show Results
        document.getElementById("result").style.display = "block";

        //Hide Loader
        document.getElementById("loading").style.display = "none";
    }
    else {
        showError("Please check number inputs");
    }
}

// Show Error
function showError(error) {
    // Hide Results
    document.getElementById("result").style.display = "none";

    // Hide Loader
    document.getElementById("loading").style.display = "none";

    // Create a div
    const errorDiv = document.createElement("div");

    // Get Elements
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    // Add class
    errorDiv.className = "alert alert-danger";

    // Create text node and append div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear Error after 3 seconds
    setTimeout(clearError, 3000);

    // Clear Error
    function clearError() {
        document.querySelector(".alert").remove();
    }
}
