function submitForm() {

    const formData = {
        studentName: studentName.value.trim(),
        fatherName: fatherName.value.trim(),
        motherName: motherName.value.trim(),
        gender: document.querySelector('input[name="gender"]:checked')?.value || "",
        contact: contact.value.trim(),
        email: email.value.trim(),
        course: course.value,
        mode: document.querySelector('input[name="mode"]:checked')?.value || "",
        timing: timing.value,
        session: session.value,
        joiningDate: date.value
    };

    if (
        formData.studentName === "" ||
        formData.contact === "" ||
        formData.email === "" ||
        formData.course === ""
    ) {
        alert("Please fill all required fields");
        return false;
    }

    let applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.push(formData);
    localStorage.setItem("applications", JSON.stringify(applications));

    alert("Application submitted and saved successfully!");
    document.getElementById("form").reset();
    return false;
}

/* 🔹 PRINT WITH VALUES */
function printForm() {

    const inputs = document.querySelectorAll("input, select");
    inputs.forEach(input => {
        let value = "";

        if (input.type === "radio") {
            if (input.checked) {
                value = input.value;
            } else {
                input.style.display = "none";
                return;
            }
        } else {
            value = input.value;
        }

        const span = document.createElement("span");
        span.className = "print-value";
        span.innerText = value || "—";
        input.parentNode.insertBefore(span, input.nextSibling);
        input.style.display = "none";
    });

    window.print();
    location.reload(); // restore form after print
}
