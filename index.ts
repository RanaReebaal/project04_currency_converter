export{}
const inquirer = require('inquirer');
const CC = require('currency-converter-lt')
inquirer
  .prompt([
    {
        type:"input",
        name:"f_cur",
        message:"Enter the First currency you want to convert?"
    },
    {
        type:"input",
        name:"s_cur",
        message:"Enter the Second currency in which you want to be converted?"
    },
    {
        type:"number",
        name:"amount",
        message:"Enter the amount you want to convert?"
    },
])
.then((answers:any) => {
    let first:string = answers.f_cur;
    let second:string = answers.s_cur;
    let conv:number = answers.amount;
    let currencyConverter = new CC({from:first, to:second, amount:conv});
    currencyConverter.convert().then((response:number) => {
    console.log(response)})
});


