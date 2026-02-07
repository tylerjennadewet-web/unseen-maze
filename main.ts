input.onButtonPressed(Button.B, function () {
    control.reset()
})
let distance = 0
// Countdown on LED before starting
basic.showNumber(3)
basic.pause(2000)
basic.showNumber(2)
basic.pause(2000)
basic.showNumber(1)
basic.pause(2000)
basic.clearScreen()
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
    // Get distance from ultrasonic sensor
    distance = maqueen.Ultrasonic()
    if (distance > 15) {
        // Move forward
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80)
        maqueen.servoRun(maqueen.Servos.S1, 90)
    } else {
        // Stop
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(300)
        // Turn right
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 80)
        basic.pause(500)
        // Stop after turning
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(200)
    }
})
