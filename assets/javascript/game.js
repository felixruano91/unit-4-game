//1. create global variables for wins, loses and the user score
//2. create a document.ready function so it can reload when reseted
//3. create variables for each crystal and assign them random numbers between 1 and 12
//4. DOM manipulation stuff
//5. create a reset function so the game restarts when the user wins/loses
//6. create an on click event that contains each crystal case
//7. create switch statement to execute an action based on different conditions
//8. create conditional for wins
//9. create conditional for loses

//1. create global variables for wins, loses and the user score
let wins = 0;
let loses = 0;
let userNumber = 0;
//2. create a document.ready function so it can reload when reseted
$(document).ready(function() {
    //3. create variables for each crystal and assign them random numbers between 1 and 12
    let redCrystal = Math.floor(Math.random() * 12 + 1)
    let blueCrystal = Math.floor(Math.random() * 12 + 1)
    let purpleCrystal = Math.floor(Math.random() * 12 + 1)
    let orangeCrystal = Math.floor(Math.random() * 12 + 1)
    let crystalNumber = Math.floor(Math.random() * 100 + 20)
    //4. DOM manipulation stuff
    $('#crystal-number').text(crystalNumber)
    $('#wins').text(wins)
    $('#loses').text(loses)
    $('#user-number').text(userNumber)
    //5. create a reset function so the game restarts when the user wins/loses
    function reset() {
        redCrystal = Math.floor(Math.random() * 12 + 1)
        blueCrystal = Math.floor(Math.random() * 12 + 1)
        purpleCrystal = Math.floor(Math.random() * 12 + 1)
        orangeCrystal = Math.floor(Math.random() * 12 + 1)
        crystalNumber = Math.floor(Math.random() * 100 + 20)
        userNumber = 0
        $('#user-number').text(userNumber)
        $('#crystal-number').text(crystalNumber)
    }
    //6. create an on click event that contains each crystal case
    $('.crystal').on("click", function() {
        //7. create switch statement to execute an action based on different conditions
        switch ($(this).attr('id')) {
            case "red-crystal":
                userNumber += redCrystal
                $('#user-number').text(userNumber)
                break
            case "blue-crystal":
                userNumber += blueCrystal
                $('#user-number').text(userNumber)
                break
            case "purple-crystal":
                userNumber += purpleCrystal
                $('#user-number').text(userNumber)
                break
            case "orange-crystal":
                userNumber += orangeCrystal
                $('#user-number').text(userNumber)
                break
        }
        //8. create conditional for wins
        if (userNumber === crystalNumber) {
            alert("Hey, that's pretty good!")
            wins++;
            $('#wins').text(wins)
            reset()
        }
        //9. create conditional for loses
        else if (userNumber > crystalNumber) {
            alert("Maybe you will suck less next time..")
            loses ++;
            $('#loses').text(loses)
            reset()
        }
    })
})