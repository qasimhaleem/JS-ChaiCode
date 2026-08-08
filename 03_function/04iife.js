// Immediately Invoked FUnction Expression

(function chai() {
    console.log("DB connected")
})();

((name = 'haleem')=> {
    console.log(`DB CONNECTED TWO ${name}`)
})()

// used for the function that we want to excute immedaitly as the file run