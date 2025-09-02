//! create reusable function
function getInputValues(id) {
  return parseInt(document.getElementById(id).value);
}

function getById(id) {
  return document.getElementById(id);
}

//! toggleDisplay function
// function toggleDisplay() {
//   const formToggler = document.getElementsByClassName('form-toggler');
//   console.log(formToggler);
// }

document.getElementById("Add-money").addEventListener("click", function () {
  // toggleDisplay()
  const formToggler = document.getElementsByClassName('form-toggler')
  console.log(formToggler);
  for(const form of formToggler){
    if(form){
      
    }
  }
});

const addMoneyBtn = getById("add-money-btn");
addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const pin1 = getInputValues("pin1");
  const amount1 = getInputValues("amount1");
  const accountNumber1 = getInputValues("accountNumber1");

  const availableBlancedElemtnt = getById("Available-blanced");
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

const cashout = getById("cashout-toggle");
cashout.addEventListener("click", function () {
  // toggleDisplay([
  //   "Cashout",
  //   "add-money-form",
  //   "latest-payment-method",
  //   "money-transfer",
  //   "Bonus",
  // ]);
});

const withdrawMoney = getById("withdraw-money");
withdrawMoney.addEventListener("click", function (e) {
  e.preventDefault();
  const accountNumber2 = getInputValues('accountNumber2')
  const amount2 = getInputValues('amount2');
  const pin2 = getInputValues("pin2");
  const availableBlancedElemtnt = getById("Available-blanced");
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
const transferMoneyToggle = getById("transfer-money-toggle");
transferMoneyToggle.addEventListener("click", function () {
  // toggleDisplay([
  //   "money-transfer",
  //   "Bonus",
  //   "add-money-form",
  //   "Cashout",
  //   "latest-payment-method",
  // ]);
});

const sendNow = getById("send-now");
sendNow.addEventListener("click", function (e) {
  e.preventDefault();
  const accountNumber3 = getInputValues('accountNumber3')
  const amount3 = getInputValues('amount3');
  const pin3 = getInputValues("pin3");
  const availableBlancedElemtnt = getById("Available-blanced");
  const availableBlanced = parseInt(availableBlancedElemtnt.innerText);
  const bankAccountNumber = 1783023657;
  const bankAccountPin = 12347;

  if (bankAccountNumber === accountNumber3 && bankAccountPin === pin3) {
    const totalAvailableBlanced = availableBlanced - amount3;
    availableBlancedElemtnt.innerText = totalAvailableBlanced;
    return totalAvailableBlanced;
  }

  if (bankAccountNumber !== accountNumber3) {
    return alert("Invalid bank account number");
  }

  if (bankAccountPin !== pin3) {
    return alert("Invalid pin number");
  }
});

// //! get bonus
// const getBonus = document.getElementById("get-bonus");
// getBonus.addEventListener("click", function () {
//   const bonus = document.getElementById("Bonus");
//   bonus.style.display = "block";
//   const latestPaymentMethod = document.getElementById("latest-payment-method");
//   latestPaymentMethod.style.display = "none";
//   // console.log('congress.. you have 20% discount');
// });

// const getCouponBonus = document.getElementById("get-coupon-bonus");
// getCouponBonus.addEventListener("click", function (e) {
//   e.preventDefault();
//   const couponInput = document.getElementById("accountNumber4");
//   const couponCode = couponInput.value.trim();

//   const availableBlancedElemtnt = document.getElementById("Available-blanced");
//   const availableBlanced = parseInt(availableBlancedElemtnt.innerText);

//   const coupons = {
//     BONUS100: 100,
//     BONUS50: 50,
//     WELCOME200: 200,
//   };

//   if (coupons[couponCode]) {
//     availableBlanced += coupons[couponCode];
//     availableBlancedElemtnt.innerText = availableBlanced;
//     alert(`🎉 You got ${coupons[couponCode]} Taka bonus!`);
//     couponInput.value = "";

//     delete coupons[couponCode];
//   } else {
//     alert("❌ Invalid or already used coupon!");
//   }
// });
