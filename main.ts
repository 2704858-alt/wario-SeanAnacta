input.onButtonPressed(Button.A, function () {
    light_plot_x += 1
    led.toggle(light_plot_x, light_plot_y)
    led.unplot(light_plot_x - 1, light_plot_y)
    if (light_plot_x == 5) {
        light_plot_x = 0
        light_plot_y += 1
        led.toggle(light_plot_x, light_plot_y)
    }
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(255)
    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    light_plot_x = light_plot_x + 1
    led.toggle(light_plot_x, light_plot_y)
    if (light_plot_x == 5) {
        light_plot_x = 0
        light_plot_y = light_plot_y + 1
        led.plot(light_plot_x, light_plot_y)
    }
})
input.onButtonPressed(Button.B, function () {
    light_plot_x += -1
    led.toggle(light_plot_x, light_plot_y)
    led.unplot(light_plot_x + 1, light_plot_y)
    if (light_plot_x == -1) {
        light_plot_x = 4
        light_plot_y += -1
        led.toggle(light_plot_x, light_plot_y)
    }
})
let light_plot_y = 0
let light_plot_x = 0
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # . # #
        # # # # #
        . # # # .
        `)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
}
light_plot_x = 0
light_plot_y = 0
led.toggle(light_plot_x, 0)
basic.forever(function () {
	
})
