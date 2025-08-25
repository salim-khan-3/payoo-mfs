document.getElementById("Add-money").addEventListener("click", function () {
  const addMoneyForm = document.getElementById("add-money-form");
  const latestPaymentMethod = document.getElementById("latest-payment-method");
  const transferMoney = document.getElementById("money-transfer");
  const bonus = document.getElementById('Bonus');
  bonus.style.display = 'none';
  transferMoney.style.display = "none";
  addMoneyForm.style.display = "block";
  latestPaymentMethod.style.display = "none";
  const cashoutToggleHidden = document.getElementById("Cashout");
  cashoutToggleHidden.style.display = "none";
});

const addMoneyBtn = document.getElementById("add-money-btn");
addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const pin1 = parseInt(document.getElementById("pin1").value);
  const amount1 = parseInt(document.getElementById("amount1").value);
  const accountNumber1 = parseInt(
    document.getElementById("accountNumber1").value
  );
  const bank = document.getElementById("bank").value;
  const availableBlancedElemtnt = document.getElementById("Available-blanced");
  const availableBlanced = parseInt(availableBlancedElemtnt.innerText);
  const bankAccountNumber = 1783023657;
  const bankAccountPin = 12347;

  if (bankAccountNumber === accountNumber1 && bankAccountPin === pin1) {
    const totalAvailableBlanced = availableBlanced + amount1;
    availableBlancedElemtnt.innerText = totalAvailableBlanced;
    return;
  }

  if (bankAccountNumber !== accountNumber1 || bankAccountPin !== pin1) {
    alert("Enter valid pin or account");
    return;
  }
});

//! cashout section start

const cashout = document.getElementById("cashout-toggle");
cashout.addEventListener("click", function () {
  const cashout = document.getElementById("Cashout");
  const addMoneyForm = document.getElementById("add-money-form");
  const latestPaymentMethod = document.getElementById("latest-payment-method");
  const transferMoney = document.getElementById("money-transfer");
  const bonus = document.getElementById('Bonus');
  bonus.style.display = 'none';
  transferMoney.style.display = "none";
  cashout.style.display = "block";
  addMoneyForm.style.display = "none";
  latestPaymentMethod.style.display = "none";
});

const withdrawMoney = document.getElementById("withdraw-money");
withdrawMoney.addEventListener("click", function (e) {
  e.preventDefault();
  const accountNumber2 = parseInt(
    document.getElementById("accountNumber2").value
  );
  console.log(typeof accountNumber2);
  const amount2 = parseInt(document.getElementById("amount2").value);
  const pin2 = parseInt(document.getElementById("pin2").value);
  const availableBlancedElemtnt = document.getElementById("Available-blanced");
  const availableBlanced = parseInt(availableBlancedElemtnt.innerText);
  const bankAccountNumber = 1783023657;
  const bankAccountPin = 12347;
  if (bankAccountNumber === accountNumber2 && bankAccountPin === pin2) {
    const totalAvailableBlanced = availableBlanced - amount2;
    availableBlancedElemtnt.innerText = totalAvailableBlanced;
    return totalAvailableBlanced;
  }
});


//! transfer money section 
const transferMoneyToggle = document.getElementById("transfer-money-toggle");
transferMoneyToggle.addEventListener("click", function () {
  const transferMoney = document.getElementById("money-transfer");
  transferMoney.style.display = "block";

  const bonus = document.getElementById('Bonus');
  bonus.style.display = 'none';
  const addMoneyForm = document.getElementById("add-money-form");
  addMoneyForm.style.display = "none";
  const cashout = document.getElementById("Cashout");
  cashout.style.display = "none";
  const latestPaymentMethod = document.getElementById("latest-payment-method");
  latestPaymentMethod.style.display = "none";
});

const sendNow = document.getElementById('send-now');
sendNow.addEventListener('click',function(e){
    e.preventDefault();
    const accountNumber3 = parseInt(document.getElementById('accountNumber3').value);
    const amount3 = parseInt(document.getElementById('amount3').value);
    const pin3 = parseInt(document.getElementById('pin3').value);
    const availableBlancedElemtnt = document.getElementById("Available-blanced");
  const availableBlanced = parseInt(availableBlancedElemtnt.innerText);
    const bankAccountNumber = 1783023657;
  const bankAccountPin = 12347;

  if(bankAccountNumber === accountNumber3 && bankAccountPin === pin3){
const totalAvailableBlanced = availableBlanced - amount3;
availableBlancedElemtnt.innerText = totalAvailableBlanced;
return totalAvailableBlanced;
  }

  if (bankAccountNumber !== accountNumber3) {
    return alert('Invalid bank account number');
  }

  if (bankAccountPin !== pin3) {
    return alert('Invalid pin number');
  }
})



//! get bonus
const getBonus = document.getElementById('get-bonus');
getBonus.addEventListener('click',function(){
  const bonus = document.getElementById('Bonus');
  bonus.style.display = 'block';
  const latestPaymentMethod = document.getElementById("latest-payment-method");
  latestPaymentMethod.style.display = "none";
  // console.log('congress.. you have 20% discount');
})

const getCouponBonus = document.getElementById('get-coupon-bonus');
getCouponBonus.addEventListener('click', function (e) {
  e.preventDefault();
const couponInput = document.getElementById('accountNumber4');
const couponCode = couponInput.value.trim();

 const availableBlancedElemtnt = document.getElementById("Available-blanced");
  const availableBlanced = parseInt(availableBlancedElemtnt.innerText);

    const coupons = {
    "BONUS100": 100,
    "BONUS50": 50,
    "WELCOME200": 200
  };


  if(coupons[couponCode]){
    availableBlanced += coupons[couponCode];
    availableBlancedElemtnt.innerText = availableBlanced;
     alert(`🎉 You got ${coupons[couponCode]} Taka bonus!`);
     couponInput.value = "";

     delete coupons[couponCode];
  }else {
    alert("❌ Invalid or already used coupon!");
  }

});
