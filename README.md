# Calculon

A loan calculating challenge

## About

This app was made as part of the course provided by Coder Foundry. The goal of this application is take in a loan amount, an interest rate, and a term in either years or months (or a combination of the two) and produce an amortization schedule that shows the number of payments, the amount of each payment, splitting the payment amount between the amount of interest and principal paid each time, and a rolling update for both the total amount of interest paid and the total remaining balance of the original loan. The schedule will also show the total amount of interest paid over the life of the loan as well as the total cost of the loan.

## Function

The overall function of this app begins with building a two dimensional javascript arry (an array of arrays). Each of the smaller arrays is made up of the results of several calculations that produce the various peices of information required to be displayed. Those calculations get their initial values from the user via the provided inputs and then update programatically via a for loop. Once the full 2d array is built, the information is then output to a datatable and a canvas object chart.
 
