// variable setup
var playerWins = 0;
var playerLosses = 0;
var addition = 0;

//select randomly between 19-120
var total = Math.floor((Math.random() * 100) + 19);

//select randomly between 1-12
var kokiri = Math.floor((Math.random() * 12) + 1);
var goron = Math.floor((Math.random() * 12) + 1);
var zora = Math.floor((Math.random() * 12) + 1);
var ocarina = Math.floor((Math.random() * 12) + 1);


var additionDisplay = function () {
    //changes the value of the class "addition" in the html
    $('.addition').empty();
    $('.addition').append(addition);
    //changes the value of the div id "wins" in the html
    $('#wins').empty();
    $('#wins').append(playerWins);
    //changes the value of the div id "losses" in the html
    $('#losses').empty();
    $('#losses').append(playerLosses);
}


//creates a function to start the game at a baseline
var restart = function () {
    addition = 0;
    total = Math.floor((Math.random() * 100) + 19);
    $('.total').empty();
    $('.total').append(total);
    kokiri = Math.floor((Math.random() * 12) + 1);
    goron = Math.floor((Math.random() * 12) + 1);
    zora = Math.floor((Math.random() * 12) + 1);
    ocarina = Math.floor((Math.random() * 12) + 1);
    additionDisplay();
}

//creates the conditions for winning and losing
var winLose = function () {
    if (addition == total) {
        playerWins = playerWins + 1;
        alert("Not quite as good as Ocarina of Time but hey!");
        restart();
    } else if (addition > total) {
        playerLosses = playerLosses + 1;
        alert("You busted, the princess Zelda is dead!");
        restart();
    } else {
        additionDisplay();
    }
}

$('.total').append(total);
$('.addition').append(addition);

$(document).ready(function () {
    $('#goron').click(function () {
        addition = addition + goron;
        winLose();
    })
    $('#zora').click(function () {
        addition = addition + zora;
        winLose();
    })
    $('#kokiri').click(function () {
        addition = addition + kokiri;
        winLose();
    })
    $('#ocarina').click(function () {
        addition = addition + ocarina;
        winLose();
    })
});

console.log(kokiri);
console.log(goron);
console.log(zora);
console.log(ocarina);
console.log(total);
console.log(addition);
console.log(playerWins);
console.log(playerLosses);