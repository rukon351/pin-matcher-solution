function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        pin.value = pin;
    }
    else {
        return pin;
    }

    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
}