input.onButtonPressed(Button.A, function () {
    Factor_1 = randint(0, 10)
    Factor_2 = randint(0, 10)
    basic.showNumber(Factor_1)
    basic.pause(300)
    basic.showString("X")
    basic.showNumber(Factor_2)
    basic.pause(300)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Factor_1 * Factor_2)
    basic.pause(300)
    basic.clearScreen()
})
let Factor_2 = 0
let Factor_1 = 0
basic.showString("tabla de multiplicar")
