'use strict'

var gBallSizeDiff = 50
var gBallSize = 100
var gBallSizeLimit = 400

function onBallClick(elBall) {
    var randBallColor = getRandomColor()
    gBallSizeDiff = getRandomInt(20, 61)
    
    gBallSize += gBallSizeDiff
    if (gBallSize >= gBallSizeLimit) gBallSize = 100

    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'

    elBall.innerText = gBallSize
    
    elBall.style.backgroundColor = randBallColor
}