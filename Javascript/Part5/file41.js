function makePayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment has been processed");
            resolve("Payment successful");
        }, 5000)
    })
}

function sendConfirmation() {
    console.log("Order has been placed successfully")
}
//call back hell
//makePayment(sendConfirmation)
makePayment()
    .then(() => sendConfirmation())
    .catch((err) => console.log(err))
