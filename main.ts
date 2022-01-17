function doDash () {
    pins.P18.digitalWrite(true)
    pause(500)
    pins.P18.digitalWrite(false)
    pause(200)
}
function encrypt (text: string) {
    for (let index2 = 0; index2 <= text.length - 1; index2++) {
        chr = text.charAt(index2)
        code = morse[alphabet.indexOf(chr)]
        playCode(code)
        doSpace()
        pause(500)
    }
}
function doDot () {
    pins.P18.digitalWrite(true)
    pause(200)
    pins.P18.digitalWrite(false)
    pause(200)
}
function playCode (text: string) {
    for (let index = 0; index <= text.length - 1; index++) {
        if ("-" == text.charAt(index)) {
            doDash()
        }
        if ("." == text.charAt(index)) {
            doDot()
        }
        if (" " == text.charAt(index)) {
            doSpace()
            pause(500)
        }
    }
}
function doSpace () {
    pins.LED.digitalWrite(true)
    pause(500)
    pins.LED.digitalWrite(false)
    pause(200)
}
function bumper () {
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
}
let code = ""
let chr = ""
let alphabet: string[] = []
let morse: string[] = []
morse = [
".-",
"-...",
"-.-.",
"-..",
".",
"..-.",
"--.",
"....",
"..",
".---",
"-.-",
".-..",
"--",
"-.",
"---",
".--.",
"--.-",
".-.",
"...",
"-",
"..-",
"...-",
".--",
"-..-",
"-.--",
"--..",
".----",
"..---",
"...--",
"....-",
".....",
"-....",
"--...",
"---..",
"----.",
"-----",
"/"
]
alphabet = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0",
" "
]
let John316 = "for god so loved the world that he gave his one and only son that whoever believes in him should not perish but have eternal life               "
forever(function () {
    bumper()
    encrypt(John316)
})
