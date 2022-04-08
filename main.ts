let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.setBrightness(200)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index <= 25; index++) {
            strip.setPixelColor(index, neopixel.rgb(255, 69, 0))
            strip.show()
            basic.pause(100)
            strip.show()
            basic.pause(100)
        }
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
