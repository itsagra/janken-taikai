// Jankenpon Final Project by Agra

function getRandom() {
    let jankenpon = Math.random()
    if (jankenpon < 0.35) {
        return 'rock'
    } else if (jankenpon >= 0.35 && jankenpon < 0.65) {
        return 'scissor'
    } else {
        return 'paper'
    }
}

function getResult(comp, player) {
    if (comp === 'rock' && player === 'scissor') {
        return 'YOU LOSE!'
    } else if (comp === 'scissor' && player === 'rock') {
        return 'YOU WIN!'
    } else if (comp === 'paper' && player === 'rock') {
        return 'YOU LOSE!'
    } else if (comp === 'rock' && player === 'paper') {
        return 'YOU WIN!'
    } else if (comp === 'rock' && player === 'scissor') {
        return 'YOU LOSE!'
    } else if (comp === 'paper' && player === 'rock') {
        return 'YOU LOSE!'
    } else if (comp === 'paper' && player === 'scissor') {
        return 'YOU WIN!'
    } else if (comp === 'scissor' && player === 'paper') {
        return 'YOU LOSE!'
    } else if (comp === player) {
        return 'DRAW!!'
    }
}


let click = document.querySelectorAll('.player-choose')
click.forEach(function(clicked) {
    clicked.addEventListener('click', function() {
    let comp = getRandom()
    let player = clicked.id
    let battle = getResult(comp, player)
    let result = document.querySelector('#hasil')
    result.innerHTML = battle
        let compImg = document.querySelector('.comp-choose')
    compImg.setAttribute('src', 'img/' + comp + '.png')
    compImg.setAttribute('position', 'absolute')
    compImg.setAttribute('style','left: 70%; top: 37%')
    compImg.setAttribute('left', '70%')
    })
})

function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }