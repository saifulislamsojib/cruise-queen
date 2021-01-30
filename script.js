// handle Ticket Plus Minus
function handleTicket(ticket, isIncrease) {
    increaseDecrease(ticket, isIncrease);
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
    const subtotalAmount = calculateSubtotal();
    subtotal.innerText = subtotalAmount;

    const chargeAmount = document.getElementById('charge-amount');
    const taxAmount = subtotalAmount * 0.1;
    chargeAmount.innerText = taxAmount;

    const totalAmount = document.getElementById('total-amount');
    const grandTotal = subtotalAmount + taxAmount;
    totalAmount.innerText = grandTotal;
}

// calculate Subtotal Amount
function calculateSubtotal() {
    const firstClassCount = getInputValue("first-class");
    const economyCount = getInputValue("economy");
    let subtotalAmount = firstClassCount * 150 + economyCount * 100;
    return subtotalAmount;
}

// get Input Value
function getInputValue(ticket) {
    const count = document.getElementById(ticket + '-count');
    const countNumber = parseInt(count.value) || 0;
    return countNumber;
}

// handle order Button
function orderButton() {
    
}