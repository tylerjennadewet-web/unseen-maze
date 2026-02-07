let distance = 0
maqueen.motorStop(maqueen.Motors.All)
// Countdown on LED before starting
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    // Get distance from ultrasonic sensor
    distance = maqueen.Ultrasonic()
    if (distance > 15) {
        // Move forward
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80)
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
