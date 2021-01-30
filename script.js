const totalAmount = document.getElementById('total-amount');

// handle Ticket Plus Minus
function handleTicket(ticket, isIncrease) {
    increaseDecrease(ticket, isIncrease);
    calculateTotal();
}
// real Time Update
function realTimeUpdate() {
    calculateTotal();
}

// handle increase Decrease
function increaseDecrease(ticket, isIncrease) {
    const countNumber = getInputValue(ticket);
    let newCount = countNumber;
    if (isIncrease) {
        newCount = countNumber + 1;
    }
    else if (countNumber > 0) {
        newCount = countNumber - 1;
    }
    document.getElementById(ticket + '-count').value = newCount;
}

// calculate Total Amount
function calculateTotal() {
    const subtotal = document.getElementById('subtotal-amount');
    const firstClassCount = getInputValue("first-class");
    const economyCount = getInputValue("economy");
    const subtotalAmount = firstClassCount * 150 + economyCount * 100;
    conditionalDisplay(subtotalAmount, subtotal);

    const chargeAmount = document.getElementById('charge-amount');
    const taxAmount = subtotalAmount * 0.1;
    conditionalDisplay(taxAmount, chargeAmount);

    const grandTotal = subtotalAmount + taxAmount;
    conditionalDisplay(grandTotal, totalAmount);
}

// conditional amount
function conditionalDisplay(amount, id){
    if (amount.toString().length == 1) {
        id.innerText = "0" + amount;
    }
    else{
        id.innerText = amount;
    }
}

// get Input Value
function getInputValue(ticket) {
    const count = document.getElementById(ticket + '-count');
    const countNumber = parseInt(count.value) || 0;
    return countNumber;
}

// handle order Button
function orderButton() {
    const modalBody = document.getElementById('modal-body');
    const modalTitle = document.getElementById('modal-title');
    if (totalAmount.innerText == "00") {
        modalBody.style.display = "none";
        modalTitle.innerText = "Please Enter Ticket Quantity ??";
        modalTitle.style.color = "red";
    }
    else{
        modalDisplay(modalTitle, modalBody);
    }
}

// Modal Display Information
function modalDisplay(modalTitle, modalBody) {
    modalTitle.innerText = "Thank You For Booked Tickets";
    modalTitle.style.color = "black";
    modalBody.style.display = "block";
    const firstClassCount = getInputValue("first-class");
    const economyCount = getInputValue("economy");

    const firstClassBooked = document.getElementById('first-class-booked');
    firstClassBooked.innerText = firstClassCount;

    const economyBooked = document.getElementById('economy-booked');
    economyBooked.innerText = economyCount;

    const totalPaid = document.getElementById('total-paid');
    totalPaid.innerText = totalAmount.innerText;
}