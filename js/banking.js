function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputAmountText = input.value;
    const Amount = parseFloat(inputAmountText);
    input.value = '';
    return Amount;

}

document.getElementById('deposite-button').addEventListener('click', function(){

    // deposite balance
    // const depositeInput = document.getElementById('deposite-input');
    // const depositeAmountText = depositeInput.value;
    // const depositeAmount = parseFloat(depositeAmountText);
    const depositeAmount = getInputValue('deposite-input');

    const depositeTotal = document.getElementById('deposite-total');
     const previousdepositeText = depositeTotal.innerText;
     const previousdepositeAmount = parseFloat(previousdepositeText)
     const newDepositeTotal = previousdepositeAmount + depositeAmount;
    depositeTotal.innerText = newDepositeTotal;

    // total balance 

    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousabalanceTotal = parseFloat(balanceTotalText)
    const newbalanceTotal = previousabalanceTotal + depositeAmount;
    balanceTotal.innerText = newbalanceTotal;
    
})



//  function bank
document.getElementById('withdraw-button').addEventListener('click', function(){

    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmonutText = withdrawInput.value;
    // const withdrawAmount= parseFloat(withdrawAmonutText);
    const withdrawAmount = getInputValue('withdraw-input');


    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawText = withdrawTotal.innerText;
    const previouswithdrawAmount = parseFloat(previouswithdrawText)
    const newWithdrawTotal = previouswithdrawAmount + withdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // withdraw update balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousabalanceTotal = parseFloat(balanceTotalText)
    const newbalanceTotal = previousabalanceTotal - withdrawAmount ;
    balanceTotal.innerText = newbalanceTotal;

   
})