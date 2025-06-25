input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # # . .
        # . # # .
        # # . . #
        . # . . #
        . . # # #
        `)
    basic.pause(300)
    basic.clearScreen()
})
basic.forever(function () {
    basic.showNumber(1)
    basic.pause(200)
    basic.showNumber(8)
    basic.pause(200)
    basic.showIcon(IconNames.House)
    basic.showString("LEONEL")
    basic.clearScreen()
})
