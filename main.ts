input.onPinPressed(TouchPin.P0, function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= y; x++) {
            led.toggle(x, y)
            basic.pause(100)
            led.toggle(y + 1, x)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.toggle(4 - y, 4 - x)
            led.toggle(3 - x, 4 - y)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(x, y)
            basic.pause(100)
            led.plot(y, x)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.unplot(x, y)
            basic.pause(100)
            led.unplot(y, x)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(4 - x, 4 - y)
            basic.pause(100)
            led.plot(4 - y, 4 - x)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(4 - x, 4 - y)
            basic.pause(100)
            led.plot(4 - y, 4 - x)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(x, 4 - y)
            basic.pause(100)
            led.plot(y, 4 - x)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.unplot(x, 4 - y)
            basic.pause(100)
            led.unplot(y, 4 - x)
        }
    }
})
