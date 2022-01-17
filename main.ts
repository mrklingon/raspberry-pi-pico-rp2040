forever(function () {
	
})
forever(function () {
    for (let index = 0; index < 4; index++) {
        pins.LED.digitalWrite(true)
        pause(200)
        pins.LED.digitalWrite(false)
        pause(200)
    }
    for (let index = 0; index < 4; index++) {
        pins.P18.digitalWrite(true)
        pause(500)
        pins.P18.digitalWrite(false)
        pause(500)
    }
})
