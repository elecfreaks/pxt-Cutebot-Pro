
# Cute:bot Pro Car Package

![](/image.png/)

This library is designed to drive Cutebot Pro, You can get Cutebot Pro here.

https://shop.elecfreaks.com/products/elecfreaks-smart-cutebot-pro-v2-programming-robot-car-for-micro-bit

You can refer to this [wiki](http://wiki.elecfreaks.com/en/microbit/microbit-smart-car/microbit-samrt-cutebot-pro)

## Code Example
```JavaScript

let strip: neopixel.Strip = null
basic.showLeds(`
    . . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . .
    `)
strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    Cutebot_Pro.PWMCruiseControl(30, 90)
    basic.pause(1500)
    Cutebot_Pro.PWMCruiseControl(90, 30)
    basic.pause(1500)
})
basic.forever(function () {
    strip.rotate(1)
    basic.pause(100)
    strip.show()
})

```
## Supported targets
for PXT/microbit

## License
MIT

