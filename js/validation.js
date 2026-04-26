(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("apply-form");
    if (!form) return;

    form.noValidate = true;

    var MIN_PHONE_DIGITS = 10;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var phoneInput = document.getElementById("phone");
      var resumeInput = document.getElementById("resume");

      var name = nameInput ? nameInput.value.trim() : "";
      var email = emailInput ? emailInput.value.trim() : "";
      var phone = phoneInput ? phoneInput.value.trim() : "";
      var phoneDigits = phone.replace(/\D/g, "");
      var hasResume = !!(resumeInput && resumeInput.files && resumeInput.files.length > 0);

      if (!name || !email || !phone || !hasResume) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (phoneDigits.length < MIN_PHONE_DIGITS) {
        alert("Phone number must be at least " + MIN_PHONE_DIGITS + " digits.");
        return;
      }

      alert("Application submitted successfully! We will contact you soon.");
      window.location.href = form.getAttribute("data-redirect") || "../index.html";
    });
  });
})();