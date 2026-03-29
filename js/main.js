'use strict'

var gBallSizeDiff = 50
const gBalls = {
    ball1: { color: 'burlywood', size: 100 },
    ball2: { color: 'rgb(135, 222, 180)', size: 100 }
}

function onBallClick(elBall, maxDiameter, ballNum) {
    const currBall = gBalls[elBall.classList[1]]
    
    gBallSizeDiff = getRandomInt(20, 61)
    
    currBall.size += gBallSizeDiff
    if (currBall.size >= maxDiameter) currBall.size = 100
    
    elBall.style.width = currBall.size  + 'px'
    elBall.style.height = currBall.size  + 'px'
    elBall.innerText = currBall.size 
    
    var randBallColor = getRandomColor()
    currBall.color = randBallColor
    
    elBall.style.backgroundColor = randBallColor
}