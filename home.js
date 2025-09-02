//!toggle form
function toggleMainForm(id) {
  const addMoneyForm = document.getElementById(id);
  const formToggler = document.getElementsByClassName("form-toggler");
  for (const data of formToggler) {
    data.style.display = "none";
  }
  addMoneyForm.style.display = "block";
}

const addMoneyButton = document.getElementById("Add-money-button");
addMoneyButton.addEventListener("click", function () {
  toggleMainForm("add-money-form");
});

const moneyAdded = document.getElementById("Money-added");
moneyAdded.addEventListener("click", function (e) {
  e.preventDefault();
  const availableBlanced = document.getElementById("Available-blanced");
  const convertAvailableBlancedValue = parseInt(availableBlanced.innerText);
  const bank = document.getElementById("bank").value;
  const accountNumber1 = document.getElementById("accountNumber1").value;
  const pim1 = document.getElementById("pin1").value;
  const accountNumber = "17830236570";
  const pinNumber = "12347";
  const amount1 = document.getElementById("amount1");
  const amountValue = parseInt(amount1.value);

  if (bank === "Select bank") {
    alert("please select a bank");
    return false;
  }

  if (accountNumber !== accountNumber1) {
    alert("Please input a valid account number");
    return false;
  }

  if (pinNumber !== pim1) {
    alert("Enter a valid pin");
    return false;
  }

  const totalAvailableBlanced = amountValue + convertAvailableBlancedValue;
  availableBlanced.innerText = totalAvailableBlanced;
});



//! cashout 
const cashoutFormButton = document.getElementById('cashout-button');
cashoutFormButton.addEventListener('click',function(){
  toggleMainForm("Cashout-form");
})

const widthrawMoney = document.getElementById('withdraw-money');
widthrawMoney.addEventListener('click',function(e){
  e.preventDefault();
  const amount2 = document.getElementById("amount2");
  const amountValue = parseInt(amount2.value);
  const availableBlanced = document.getElementById("Available-blanced");
  const convertAvailableBlancedValue = parseInt(availableBlanced.innerText);
  const accountNumber2 = document.getElementById("accountNumber2").value;
  const pim2 = document.getElementById("pin2").value;
  const accountNumber = "17830236570";
  const pinNumber = "12347";

    if (accountNumber !== accountNumber2) {
    alert("Please input a valid account number");
    return false;
  }

  if (pinNumber !== pim2) {
    alert("Enter a valid pin");
    return false;
  }


  const totalAvailableBlanced = convertAvailableBlancedValue - amountValue  ;
  availableBlanced.innerText = totalAvailableBlanced;
})


//! transfer money 
const transferMoneyButton = document.getElementById('transfer-money-button');
transferMoneyButton.addEventListener('click',function(){
  toggleMainForm("money-transfer-form");
})


const sendMoney = document.getElementById('send-now');
sendMoney.addEventListener('click',function(e){
  e.preventDefault();

  const amount3 = document.getElementById("amount3");
  const amountValue = parseInt(amount3.value);
  const availableBlanced = document.getElementById("Available-blanced");
  const convertAvailableBlancedValue = parseInt(availableBlanced.innerText);
  const accountNumber3 = document.getElementById("accountNumber3").value;
  const pim3 = document.getElementById("pin3").value;
  const accountNumber = "17830236570";
  const pinNumber = "12347";



      if (accountNumber !== accountNumber3) {
    alert("Please input a valid account number");
    return false;
  }

  if (pinNumber !== pim3) {
    alert("Enter a valid pin");
    return false;
  }


  const totalAvailableBlanced = convertAvailableBlancedValue - amountValue  ;
  availableBlanced.innerText = totalAvailableBlanced;
  
  
})

//! get bonus 
const getBonusButton = document.getElementById('get-bonus-button');
getBonusButton.addEventListener('click',function(){
  toggleMainForm("Bonus-form");
})


const getCouponBonus = document.getElementById('get-coupon-bonus');
getCouponBonus.addEventListener('click',function(e){
  e.preventDefault();

  const couponCode = document.getElementById('couponCode').value.trim();
    const availableBlanced = document.getElementById("Available-blanced");
  

    if(couponCode === '') {
    alert('Please enter a coupon code');
    return;
  }

  if(couponCode === 'BONUS100'){
    let convertAvailableBlancedValue = parseInt(availableBlanced.innerText);
    convertAvailableBlancedValue += 100;
    
    availableBlanced.innerText = convertAvailableBlancedValue;
  }
  else{
    alert('Invalid coupon code!');
  }
})



//! PAY BILL 
const payBillButton = document.getElementById('pay-bill-button');
payBillButton.addEventListener('click',function(){
  toggleMainForm("pay-bill-form");
})

const payNow = document.getElementById('pay-now');
payNow.addEventListener('click',function(e){
  e.preventDefault();
  
  const bankPay = document.getElementById('bank-pay').value;
  const billAccountNumber = document.getElementById('bill-account-number').value.trim();
  const pin4 = document.getElementById('pin4').value.trim();
  const payAmount = document.getElementById('pay-amount');
    const availableBlanced = document.getElementById("Available-blanced");
  const convertAvailableBlancedValue = parseInt(availableBlanced.innerText);
  const payAmountValue = parseInt(payAmount.value);
   const accountNumber = "17830236570";
  const pinNumber = "12347";
  
   if (bankPay === "Select bank" || bankPay === "") {
    alert("please select a bank");
    return;
  }

  if(accountNumber !== billAccountNumber){
    alert("Please input a valid account number");
    return false;
  }


  if (pinNumber !== pin4) {
    alert("Enter a valid pin");
    return false;
  }

  const totalAvailableBlanced = convertAvailableBlancedValue - payAmountValue ;
  availableBlanced.innerText = totalAvailableBlanced;

})



//! latest mathod 
const transitionButton = document.getElementById('transition-button');
transitionButton.addEventListener('click',function(){
  toggleMainForm('latest-method')
})
