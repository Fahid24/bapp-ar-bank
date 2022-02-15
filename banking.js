// // handel deposit btn event
// document.getElementById('deposit-btn').addEventListener('click', function () {
//     const inpuFild = document.getElementById('deposit-input');

//     const newamountValue = inpuFild.value;
//     // console.log(newamountValue);

//     const depositTotal = document.getElementById('deposit-total');
//     const previousDepositAmounat = depositTotal.innerText;
//     const newDepositTotal = parseFloat(previousDepositAmounat) + parseFloat(newamountValue);
//     depositTotal.innerText = newDepositTotal;
//     // update account balance

//     const balanceTotal = document.getElementById('balance-total')
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalnceTotal = parseFloat(balanceTotalText)
//     const newBalanceTotal = previousBalnceTotal + parseFloat(newamountValue);
//     balanceTotal.innerText = newBalanceTotal



//     inpuFild.value = ''

// })

// // handle withdraw event handler
// document.getElementById('withdraw-btn').addEventListener('click', function () {
//     const withdrawInput = document.getElementById('withdraw-input');

//     const withdrawamountValueText = withdrawInput.value;
//     const newWithdrowamountValue = parseFloat(withdrawamountValueText);
//     // console.log(newWithdrowamountValue);


//     // set  withdrawTotal
//     const withdrawTotal = document.getElementById('withdraw-total');
//     const previousWithdrawText = withdrawTotal.innerText
//     const previousWithdrawTotal = parseFloat(previousWithdrawText);
//     const newWithdrowTotal = previousWithdrawTotal + newWithdrowamountValue;
//     withdrawTotal.innerText = newWithdrowTotal

//     // update balance
//     const balanceTotal = document.getElementById('balance-total')
//     const previousBalnceText = balanceTotal.innerText;
//     const previousBalnceTotal = parseFloat(previousBalnceText);
//     const newBalanceTotal = previousBalnceTotal - newWithdrowTotal;
//     balanceTotal.innerText = newBalanceTotal;

//     withdrawInput.value = ''

// })


function getInputValue(inputId) {
    const inpuFild = document.getElementById(inputId);
    const inputamountValueText = inpuFild.value;
    const amountValue = parseFloat(inputamountValueText);
    inpuFild.value = '';
    return amountValue;

}

function updateTotal(totalFieldId, amounat) {
    const totalFild = document.getElementById(totalFieldId);
    const TotalText = totalFild.innerText;
    const previousTotal = parseFloat(TotalText);
    totalFild.innerText = previousTotal + amounat;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalnceTotal = parseFloat(balanceTotalText);
    return previousBalnceTotal;
}

function updateBalance(Amount, issAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalnceTotal = parseFloat(balanceTotalText);
    const previousBalnceTotal = getCurrentBalance();
    if (issAdd == true) {
        balanceTotal.innerText = previousBalnceTotal + Amount;
    }
    else {
        balanceTotal.innerText = previousBalnceTotal - Amount;
    }

}
// handle deposit btn
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositAmountValue = getInputValue('deposit-input')
    if (depositAmountValue > 0) {
        updateTotal('deposit-total', depositAmountValue);
        updateBalance(depositAmountValue, true);
    }


})

// handle withdraw btn
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawAmountValue = getInputValue('withdraw-input');
    const CurrentBalance = getCurrentBalance()
    if (withdrawAmountValue > 0 && withdrawAmountValue < CurrentBalance) {
        updateTotal('withdraw-total', withdrawAmountValue)
        updateBalance(withdrawAmountValue, false)
    }


})