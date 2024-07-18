function show_value(x) {
    document.getElementById("demo").innerHTML = x;
}

function costCalculation() {
    // Get values from form elements
    var noOfTickets = parseInt(document.getElementById("noOfTickets").value);
    var ticketType = document.getElementById("ticketType").value;
    var coupon = document.getElementById("cc").value;
    var refreshment = document.getElementById("refreshment").checked;
    
    var basePrice = 0;
    var total = 0;
    
    // Determine base price based on ticket type
    if (ticketType == "Floor") {
        basePrice = 400;
    } else {
        basePrice = 500;
    }
    
    var discount = 0;
    var refreshmentCost = 0;
    
    // Calculate discounts
    if (noOfTickets > 20) {
        discount += 10; // 10% discount for more than 20 tickets
    }
    if (coupon === "ELEKTRA20" || coupon === "SIMBA20") {
        discount += 2; // 2% discount for valid coupon codes
    }
    if (refreshment) {
        refreshmentCost = 100; // Additional cost for refreshment
    }
    
    // Calculate total cost
    total = Math.round((noOfTickets * basePrice) - ((basePrice * noOfTickets * discount) / 100) + refreshmentCost);
    
    // Display result
    document.getElementById('result').innerHTML = "Your ticket charge is Rs. " + total;
    
    return false; // Prevent form submission
}
