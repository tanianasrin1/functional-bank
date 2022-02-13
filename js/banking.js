function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputAmountText = input.value;
    const Amount = parseFloat(inputAmountText);
    input.value = '';
    return Amount;

}

function updateTotalField( totalFieldId , depositeAmount){
    const depositeTotal = document.getElementById(totalFieldId);
    const previousdepositeText = depositeTotal.innerText;
    const previousdepositeAmount = parseFloat(previousdepositeText)
    const newDepositeTotal = previousdepositeAmount + depositeAmount;
    depositeTotal.innerText = newDepositeTotal;
}

function updateBalance(depositeAmount, isAdd){
    
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousabalanceTotal = parseFloat(balanceTotalText)
   if(isAdd == true){
    const newbalanceTotal = previousabalanceTotal + depositeAmount;
    balanceTotal.innerText = newbalanceTotal;
   }

   else{
    const newbalanceTotal = previousabalanceTotal - depositeAmount;
    balanceTotal.innerText = newbalanceTotal;
   }
}

document.getElementById('deposite-button').addEventListener('click', function(){

    // deposite balance
    // const depositeInput = document.getElementById('deposite-input');
    // const depositeAmountText = depositeInput.value;
    // const depositeAmount = parseFloat(depositeAmountText);
    

    // update deposite

  /*   const depositeTotal = document.getElementById('deposite-total');
    const previousdepositeText = depositeTotal.innerText;
    const previousdepositeAmount = parseFloat(previousdepositeText)
    const newDepositeTotal = previousdepositeAmount + depositeAmount;
    depositeTotal.innerText = newDepositeTotal; */

   

    // total balance 
/* 
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousabalanceTotal = parseFloat(balanceTotalText)
    const newbalanceTotal = previousabalanceTotal + depositeAmount;
    balanceTotal.innerText = newbalanceTotal; */

    const depositeAmount = getInputValue('deposite-input');
    if(depositeAmount > 0){
        updateTotalField( 'deposite-total', depositeAmount);
        updateBalance(depositeAmount , true)  
    }
})



//  function bank
document.getElementById('withdraw-button').addEventListener('click', function(){

    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmonutText = withdrawInput.value;
    // const withdrawAmount= parseFloat(withdrawAmonutText);


    // update withdraw

   /*  const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawText = withdrawTotal.innerText;
    const previouswithdrawAmount = parseFloat(previouswithdrawText)
    const newWithdrawTotal = previouswithdrawAmount + withdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal; */


    // withdraw update balance
    // const balanceTotal = document.getElementById('balance-total') 
    // const balanceTotalText = balanceTotal.innerText
    // const previousabalanceTotal = parseFloat(balanceTotalText)
    // const newbalanceTotal = previousabalanceTotal - withdrawAmount ;
    // balanceTotal.innerText = newbalanceTotal;

    const withdrawAmount = getInputValue('withdraw-input'); 
    if(withdrawAmount > 0)  {
        updateTotalField('withdraw-total' , withdrawAmount);
        updateBalance(withdrawAmount, false) 
    } 
   
})
