'use strict'

var gBallSizeDiff = 50
var gBallSize = 100

function onBallClick(elBall, maxDiameter) {
    var randBallColor = getRandomColor()
    gBallSizeDiff = getRandomInt(20, 61)
    
    gBallSize += gBallSizeDiff
    if (gBallSize >= maxDiameter) gBallSize = 100

    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'

    elBall.innerText = gBallSize
    
    elBall.style.backgroundColor = randBallColor
}