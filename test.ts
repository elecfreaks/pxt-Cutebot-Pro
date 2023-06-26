// tests go here; this will not be compiled when this package is used as an extension.

basic.showLeds(`
    . . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . .
    `)
basic.forever(function () {
    Cutebot_Pro.PWMCruiseControl(30, 90)
    basic.pause(1500)
    Cutebot_Pro.PWMCruiseControl(30, 90)
    basic.pause(1500)
})
