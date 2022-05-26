/**
 * You can change what is in the "show string" blocks so microbit will display whatever message you like!
 */
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("Ms Sarah is cool")
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("a sekrit message!")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("I love stem")
})
basic.forever(function () {
	
})
