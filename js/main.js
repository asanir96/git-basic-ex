'use strict'

const gBallSizeDiff = 50
var gBallSize = 100

function onBallClick(elBall){
    gBallSize += gBallSizeDiff

    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'
    
    elBall.innerText = gBallSize
}