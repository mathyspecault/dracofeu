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
function bargraphe_20 () {
    if (A < 1) {
        strip.clear()
        strip.show()
    } else if (A > 1 && A <= 204.6) {
        strip.clear()
        strip.show()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else if (A > 204.6 && A <= 409.2) {
        strip.clear()
        strip.show()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
    } else if (A > 409.2 && A <= 613.8) {
        strip.clear()
        strip.show()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
    } else if (A > 613.8 && A <= 818.4) {
        strip.clear()
        strip.show()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        strip.show()
    } else if (A > 818.4 && A <= 1023) {
        strip.clear()
        strip.show()
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else {
    	
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
let A = 0
let N = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P3, 5, NeoPixelMode.RGB)
strip.setBrightness(100)
N = 0
A = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
	
})
basic.forever(function () {
	
})
