# Calculon - A Loan Calculator Web App

This Loan Calculator app calculates your total monthly payment, interest, total interest, and uses that to generate an amortization schedule that you can then download as an Excel or PDF file.

![Screenshot](/Images/screenshot.png)

This is a front-end only web application built with HTML5, CSS, JavaScript & Bootstrap.

## About

This app was made as part of the course provided by Coder Foundry. The goal of this application is take in a loan amount, an interest rate, and a term in either years or months (or a combination of the two) and produce an amortization schedule that shows the number of payments, the amount of each payment, splitting the payment amount between the amount of interest and principal paid each time, and a rolling update for both the total amount of interest paid and the total remaining balance of the original loan. The schedule will also show the total amount of interest paid over the life of the loan as well as the total cost of the loan.

## Installation

You can view this site [live](https://ldjpab-mortgage-calculator.netlify.app/).

To run locally, clone this repository and open index.html.

``` sourceCode
git clone https://github.com/atbrooks84/Calculon9002
```

## Core Formulas

These are the core math formulas used to generate the amortization schedule

*Total Monthly Payment = (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)(-Number of Months) )

*Remaining Balance before the very first month equals the amount of the loan.

*Interest Payment = Previous Remaining Balance * rate/1200Principal

*Payment = Total Monthly Payment - Interest PaymentAt end each month

*Remaining Balance = Previous Remaining Balance - principal payments

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.