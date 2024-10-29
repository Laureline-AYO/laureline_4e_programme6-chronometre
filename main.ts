input.onButtonPressed(Button.B, function () {
    tps_chrono = 0
})
let tps_chrono = 0
tps_chrono = 0
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.pause(100)
        tps_chrono += 0.1
    }
    basic.showNumber(tps_chrono)
})
