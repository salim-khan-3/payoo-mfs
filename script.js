//! add some logic for login button
document.getElementById("Login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const moboleNumber = 1783023657;
  const pinNumber = 12347;
  const mobileNumberValue = parseInt(
    document.getElementById("mobile-number").value
  );
  const pinNumberValue = parseInt(document.getElementById("Pin-number").value);

  if (moboleNumber === mobileNumberValue && pinNumber === pinNumberValue) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid information");
  }
});
