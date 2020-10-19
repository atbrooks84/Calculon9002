# Calculon - A Loan Calculator Web App

This Loan Calculator app calculates your total monthly payment, interest, total interest, and [more](#features).

![Screenshot](/Images/screenshot.png)

This is a front-end web application built with HTML5, CSS, JavaScript & Bootstrap.

## Features

### Looking to take out a loan? With this app you can:

* Quickly see the big picture with total principal, interest, and cost associated with your loan

* View a graph of your interest and principle over time

* Generate an amorization schedule to view the exact month by month payments & interest of your loan

* **Download the complete schedule as Excel or CSV file**

* Preview your loan with extra monthly payments and a deposit

## Installation

You can view this site [live](https://ldjpab-mortgage-calculator.netlify.app/).

To run locally, clone this repository and open index.html.

``` sourceCode
git clone https://github.com/atbrooks84/Calculon9002
```

## Core Formulas

### These are the core math formulas used to generate the amortization schedule

* Total Monthly Payment = (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)(-Number of Months) )

* Remaining Balance before the very first month equals the amount of the loan.

* Interest Payment = Previous Remaining Balance * rate/1200Principal

* Payment = Total Monthly Payment - Interest PaymentAt end each month

* Remaining Balance = Previous Remaining Balance - principal payments

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.