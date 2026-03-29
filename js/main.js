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

function onSwapBallClick() {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    const ball1Diameter = gBalls.ball1.size
    const ball2Diameter = gBalls.ball2.size

    gBalls.ball1.size = ball2Diameter
    gBalls.ball2.size = ball1Diameter
    
    elBall1.style.width = ball2Diameter + 'px'
    elBall1.style.height = ball2Diameter + 'px'

    elBall2.style.width = ball1Diameter + 'px'
    elBall2.style.height = ball1Diameter + 'px'

    
    elBall1.innerText = ball2Diameter
    elBall2.innerText = ball1Diameter
    
    const ball1Color = gBalls.ball1.color
    const ball2Color = gBalls.ball2.color
    
    elBall1.style.backgroundColor = ball2Color
    elBall2.style.backgroundColor = ball1Color
    
    gBalls.ball1.color = ball2Color
    gBalls.ball2.color = ball1Color

}