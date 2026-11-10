// Small menu interaction: choose a dish and confirm your selection.
const dishButtons = document.querySelectorAll("[data-dish]");
const selectedDish = document.getElementById("selected-dish");
const orderMessage = document.getElementById("order-message");
const confirmButton = document.getElementById("confirm-order");

let currentDish = "";

dishButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentDish = button.dataset.dish;
        selectedDish.textContent = currentDish;
        orderMessage.textContent = "You have selected " + currentDish + ". Confirm below to finish this demo selection.";
        confirmButton.disabled = false;
    });
});

if (confirmButton) {
    confirmButton.addEventListener("click", function () {
        if (currentDish !== "") {
            orderMessage.textContent = "Thanks! Your " + currentDish + " selection has been recorded for this demo. This page does not send a real order.";
            confirmButton.textContent = "Selected!";
            confirmButton.disabled = true;
        }
    });
}
