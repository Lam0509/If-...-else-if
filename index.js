function user() {
    let uname = document.getElementById("1").value;
    if (uname === "Admin") {
        document.getElementById("2").focus()
    } else if (uname === "") {
        alert("Canceled")
    } else {
        alert("I don't know you")
    }
}

function pass() {
    let pass = document.getElementById("2").value;
    if (pass === "TheMaster") {
        alert("Welcome");
    }
    if (pass === "") {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
}
