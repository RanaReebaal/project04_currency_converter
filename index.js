"use strict";
exports.__esModule = true;
var inquirer = require('inquirer');
var CC = require('currency-converter-lt');
inquirer
    .prompt([
    {
        type: "input",
        name: "f_cur",
        message: "Enter the First currency you want to convert?"
    },
    {
        type: "input",
        name: "s_cur",
        message: "Enter the Second currency in which you want to be converted?"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount you want to convert?"
    },
])
    .then(function (answers) {
    var first = answers.f_cur;
    var second = answers.s_cur;
    var conv = answers.amount;
    var currencyConverter = new CC({ from: first, to: second, amount: conv });
    currencyConverter.convert().then(function (response) {
        console.log(response);
    });
});
