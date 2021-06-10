


function myFunction() {
    var x = document.getElementById("pw");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}








function checkPassword(form) {
    if (form.pw.value.length != 8) {
        alert("Error: password must contain 8 characters! Check the password title, please.");
        return false;
    }

    if (form.pw.value.charAt(0) != form.pw.value.charAt(0).toUpperCase()
        || Number(form.pw.value.charAt(0)) || form.pw.value.charAt(0) == "-"
        || form.pw.value.charAt(0) == "_" || form.pw.value.charAt(0) == "*" ||
        form.pw.value.charAt(0) == "#" || form.pw.value.charAt(0) == "&" ||
        form.pw.value.charAt(0) == " ") {
        alert("Error: password must start with uppercase letter (A-Z)! Check the password title, please.");
        return false;

    }
    var i = "1";
    while (!Number(form.pw.value.charAt(i))) {
        i++;
        if (i == 8) {
            alert("Error: password must include at least one digit (0-9)! Check the password title, please.");
            return false;
            break;
        }
        else continue;
    }
    var i = "1";
    while (form.pw.value.charAt(i) != "-" && form.pw.value.charAt(i) != "_" &&
        form.pw.value.charAt(i) != "#" && form.pw.value.charAt(i) != "&" &&
        form.pw.value.charAt(i) != "*" || form.pw.value.charAt(i) == " ") {
        i++;
        if (i == 8) {
            alert("Error: password must include a special character and no spaces! Check the password title, please.");
            return false;
            break;
        }
        else continue;
    }
    alert("You entered a valid password: " + form.pw.value);
    alert("Thank you " + form.name1.value + " for your submition ,we'll make sure to keep you up to date with our latest news.")
    return true;
}












