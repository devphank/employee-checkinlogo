function submitForm() {
    let name = document.getElementById("name").value.trim();
    let position = document.getElementById("position").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let checkin = document.getElementById("checkin").value.trim();
    let travel = document.getElementById("travel").value.trim();
    let checkout = document.getElementById("checkout").value.trim();
    let signature = document.getElementById("signature").value.trim();

    if (!name || !position || !contact || !checkin || !checkout || !signature) {
        alert("Please fill out all required fields.");
        return;
    }

    let formData = {
        Name: name,
        Position: position,
        Contact: contact,
        "Check-In": checkin,
        "Method of Travel": travel,
        "Check-Out": checkout,
        Signature: signature
    };

    localStorage.setItem("employeeCheckIn", JSON.stringify(formData));
    alert("Form submitted successfully!");
}

function printForm() {
    window.print();
}
