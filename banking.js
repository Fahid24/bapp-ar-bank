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


document.getElementById('deposit-btn').addEventListener('click', function () {
    // const inpuFild = document.getElementById('deposit-input');
    // const inputamountValueText = inpuFild.value;
    // const amountValue = parseFloat(inputamountValueText)

    const depositAmountValue = getInputValue('deposit-input')
    // get current deposit
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText)
    // depositTotal.innerText = previousDepositTotal + amountValue;
    updateTotal('deposit-total', depositAmountValue);

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalnceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalnceTotal + depositAmountValue;



})

// handle withdraw btn
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawamountValueText = withdrawInput.value;
    // const withdrawamountValue = parseFloat(withdrawamountValueText)
    // const withdrawamountValue = getInputValue('withdraw-input')
    const withdrawAmountValue = getInputValue('withdraw-input')
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawamountValue;
    updateTotal('withdraw-total', withdrawAmountValue)

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalnceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalnceTotal - withdrawAmountValue;


    // inpuFild.value = '';
})