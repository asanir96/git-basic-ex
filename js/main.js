'use strict'

const gBalls = {
    ball1: { color: 'burlywood', size: 100 },
    ball2: { color: 'rgb(135, 222, 180)', size: 100 }
}

function onBallClick(elBall, maxDiameter) {
    const currBall = gBalls[elBall.classList[1]]

    const randBallSizeDiff = getRandomInt(20, 61)
    const newBallSize = gBalls[elBall.classList[1]].size + randBallSizeDiff
    const randBallColor = getRandomColor()
    changeBallSize(elBall, newBallSize, maxDiameter)
    changeBallColor(elBall, randBallColor)
}

function changeBallSize(elBall, ballSize, maxDiameter,minDiameter) {
    const currBall = gBalls[elBall.classList[1]]
    currBall.size = ballSize
    if (currBall.size >= maxDiameter || currBall.size < minDiameter) currBall.size = 100

    elBall.style.width = currBall.size + 'px'
    elBall.style.height = currBall.size + 'px'
    elBall.innerText = currBall.size
}

function changeBallColor(elBall, color) {
    const currBall = gBalls[elBall.classList[1]]
    currBall.color = color

    elBall.style.backgroundColor = color
}
function onSwapBallClick() {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    const ball1Diameter = gBalls.ball1.size
    const ball2Diameter = gBalls.ball2.size

    const ball1Color = gBalls.ball1.color
    const ball2Color = gBalls.ball2.color

    changeBallSize(elBall1, ball2Diameter)
    changeBallColor(elBall1, ball2Color, 400)

    changeBallSize(elBall2, ball1Diameter, 200)
    changeBallColor(elBall2, ball1Color)
}

function onReduceBallClick() {
    const randBallSizeDiff = getRandomInt(20, 61)

    const newBall1Size = gBalls.ball1.size - randBallSizeDiff
    const newBall2Size = gBalls.ball2.size - randBallSizeDiff

    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    changeBallSize(elBall1, newBall1Size, undefined, 100)
    changeBallSize(elBall2, newBall2Size, undefined, 100)
}