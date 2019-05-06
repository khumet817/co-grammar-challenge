function displayHide() {
    var btn = document.getElementById("calculator");

    // If Statement for displaying and hiding my calculator
    if (btn.style.display === "none") {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}