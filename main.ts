input.onGesture(Gesture.FreeFall, function () {
	
})
pins.digitalWritePin(DigitalPin.P0, 0)
radio.setGroup(69)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        radio.sendNumber(0)
    }
    if (input.acceleration(Dimension.X) > 500) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (input.acceleration(Dimension.Y) > 500) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (input.acceleration(Dimension.Z) > 400) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (input.acceleration(Dimension.Z) > 400) {
        music.play(music.stringPlayable("C F - F - E D D ", 238), music.PlaybackMode.UntilDone)
    }
})
