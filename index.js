let lakersOutputScore = document.getElementById("lakers-score")
console.log(lakersOutputScore)

let celticsOutputScore = document.getElementById("celtics-score")
console.log(celticsOutputScore)

let lakersResult = 0
let celticsResult = 0

//LAKERS POINTS
function lakersPlus1() {
    lakersResult+=1
    lakersOutputScore.textContent = lakersResult
}

function lakersPlus2() {
    lakersResult+=2
    lakersOutputScore.textContent = lakersResult
}

function lakersPlus3() {
    lakersResult+=3
    lakersOutputScore.textContent = lakersResult
}

//CELTICS POINTS
function celticsPlus1() {
    celticsResult+=1
    celticsOutputScore.textContent = celticsResult
}

function celticsPlus2() {
    celticsResult+=2
    celticsOutputScore.textContent = celticsResult
}

function celticsPlus3() {
    celticsResult+=3
    celticsOutputScore.textContent = celticsResult    
}

function reset() {
    lakersResult = 0
    lakersOutputScore.textContent = lakersResult

    celticsResult = 0
    celticsOutputScore.textContent = celticsResult
}