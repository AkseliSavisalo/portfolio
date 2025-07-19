// Affirmation player
const affirmation1 = "affirmation1";
const affirmation2 = "affirmation2";

setTimeout(affTimeout1, 9000)
setTimeout(affTimeout2, 13000)

function affTimeout1() {
    body.classList.add(affirmation1);};

function affTimeout2() {
    body.classList.add(affirmation2);};