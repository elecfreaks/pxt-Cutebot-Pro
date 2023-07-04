CutebotPro.irCallback(function () {
    if (CutebotPro.irButton(CutbotProIRButtons.Up)) {
        CutebotPro.distanceRunning(CutebotProOrientation.Advance, 10, CutebotProDistanceUnits.Cm)
    }
    if (CutebotPro.irButton(CutbotProIRButtons.Menu)) {
        CutebotPro.fullSpeedAhead()
    }
    if (CutebotPro.irButton(CutbotProIRButtons.Zero)) {
        led.plot(0, 0)
        k = 1
    }
})
// tests go here; this will not be compiled when this package is used as an extension.
input.onButtonPressed(Button.A, function () {
    i += 1
    if (i == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        CutebotPro.colorLight(RGBLight.RGBA, 0xff0000)
    }
    if (i == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        CutebotPro.colorLight(RGBLight.RGBA, 0x00ff00)
    }
    if (i == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        CutebotPro.colorLight(RGBLight.RGBA, 0x0000ff)
        i = 0
    }
})
input.onButtonPressed(Button.B, function () {
    j += 1
    if (j == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    if (j == 2) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    if (j == 3) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    if (j == 4) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        j = 0
    }
})
let j = 0
let i = 0
let k = 0
let strip: neopixel.Strip = null
music.setBuiltInSpeakerEnabled(false)
basic.pause(100)
CutebotPro.extendServoControl(ServoType.Servo180, CutebotProServoIndex.S1, 0)
CutebotPro.extendServoControl(ServoType.Servo180, CutebotProServoIndex.S2, 0)
CutebotPro.extendServoControl(ServoType.Servo180, CutebotProServoIndex.S3, 0)
CutebotPro.extendServoControl(ServoType.Servo180, CutebotProServoIndex.S4, 0)
basic.pause(500)
CutebotPro.extendServoControl(ServoType.Servo180, CutebotProServoIndex.S1, 180)
CutebotPro.extendServoControl(ServoType.Servo180, CutebotProServoIndex.S2, 180)
CutebotPro.extendServoControl(ServoType.Servo180, CutebotProServoIndex.S3, 180)
CutebotPro.extendServoControl(ServoType.Servo180, CutebotProServoIndex.S4, 180)
basic.pause(500)
strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
k = 0
i = 0
j = 0
music.playTone(262, music.beat(BeatFraction.Half))
basic.forever(function () {
    if (CutebotPro.ultrasonic(SonarUnit.Centimeters) <= 5) {
        CutebotPro.pwmCruiseControl(0, 0)
    }
    if (k == 0) {
        CutebotPro.extendMotorControl(100)
    } else if (k == 1) {
        for (let index = 0; index < 10000; index++) {
            CutebotPro.trackbitStateValue()
            if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_7) || (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_9) || (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_11) || (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_8) || CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_3))))) {
                CutebotPro.pwmCruiseControl(0, 70)
            } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_6) || (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_13) || (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_14) || (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_12) || CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_2))))) {
                CutebotPro.pwmCruiseControl(70, 0)
            } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_5) || CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_1)) {
                CutebotPro.pwmCruiseControl(50, 50)
            }
        }
        CutebotPro.pwmCruiseControl(0, 0)
        k = 0
    }
})
