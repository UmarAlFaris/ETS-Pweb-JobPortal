function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var resume = document.forms["myForm"]["resume"].value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    if (phone == "") {
        alert("Handphone Number must be filled out");
        return false;
    }
    if (phone.length < 10) {
        alert("Phone number is too short");
        return false;
    }

    if (resume == "") {
        alert("Please upload your CV/Resume");
        return false;
    }

    alert("Application submitted successfully! We will contact you soon.");
    return true;
}