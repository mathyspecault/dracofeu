function led2 () {
    strip.clear()
    strip.show()
    strip.setPixelColor(N, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
function chenille () {
    for (let index = 0; index < 4; index++) {
        led2()
        N = N + 1
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        led2()
        N = N - 1
        basic.pause(500)
    }
}
function chenille_20 () {
    for (let index = 0; index < 4; index++) {
        led2()
        N = N + 1
        basic.pause(t)
    }
    for (let index = 0; index < 4; index++) {
        led2()
        N = N - 1
        basic.pause(t)
    }
    t = pins.digitalReadPin(DigitalPin.P0)
    led.plotBarGraph(
    t,
    1023
    )
}
function bargraphe () {
    strip.showBarGraph(pins.analogReadPin(AnalogPin.P0), 1023)
}
let t = 0
let N = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P3, 5, NeoPixelMode.RGB)
strip.setBrightness(100)
N = 0
basic.forever(function () {
    bargraphe()
})
basic.forever(function () {
	
})
