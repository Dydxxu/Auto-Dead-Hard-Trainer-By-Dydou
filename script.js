const startButton = document.getElementById("startButton");
const deadHardButton = document.getElementById("deadHardButton");

const status = document.getElementById("status");
const result = document.getElementById("result");

const scoreDisplay = document.getElementById("score");
const reactionDisplay = document.getElementById("reaction");
const streakDisplay = document.getElementById("streak");

let attackStart = 0;
let attackActive = false;

let score = 0;
let streak = 0;

startButton.addEventListener("click", startTraining);
deadHardButton.addEventListener("click", pressDeadHard);
const scenarios = [
    {
        start: "Sluppy Butcher spirit is waiting",
        perfect: "Congrats, you made Sluppy Butcher proud",
        fail: "You Panicked, russian spirit is shaking her head"
    },

    {
        start: "BUBBA IS SPAMMING M2",
        perfect: "Congrats bubba just broke his desk",
        fail: "ggs ur death hook at 4 gens in basement"
    },

    {
        start: "BUBBA IS COMING",
        perfect: "Bubba missed the chainsaw!",
        fail: "Bubba got you..."
    }
];

function startTraining() {

    attackActive = false;

    deadHardButton.disabled = true;

const warningMessages = [
    "Bubba is spamming M2",
    "The Blight The Blight is fake rushing",
    "Sluppy Butcher Spirit is waiting",
    "Legacy billy is shaking his head",
    "Zeb89 Trapper know you got dh",
    "Dead Hard Or Die In Exit Gate",
    "Russian Keneki is waiting",
];

const randomWarning =
    warningMessages[
        Math.floor(Math.random() * warningMessages.length)
    ];

status.textContent = randomWarning;
    
const delay =
        Math.floor(Math.random() * 2500) + 1500;

    setTimeout(function() {

        attackActive = true;

        attackStart = performance.now();

        status.textContent = "⚠️ M1 ATTACK";
const attackMessages = [
    "⚠️ M1!",
    "⚠️ INCOMING HIT!",
    "⚠️ WATCH OUT!",
    "⚠️ SWING!",
    "⚠️ NOW!"
];

const randomAttackMessage =
    attackMessages[
        Math.floor(Math.random() * attackMessages.length)
    ];

status.textContent = randomAttackMessage;

        deadHardButton.disabled = false;

    }, delay);
}


function pressDeadHard() {

    if (!attackActive) {
        return;
    }

    const reactionTime =
        Math.round(performance.now() - attackStart);

    attackActive = false;

    deadHardButton.disabled = true;

    reactionDisplay.textContent =
        reactionTime + " ms";


    const perfectMessages = [
        "🔥 AUTO DEAD HARD!",
        "🔥 UR CRAZY NGL",
        "🔥 HE IS SO MAD",
        "🔥 The entire lobby is calling u a cheater in egc!",
    ];


    const earlyMessages = [
        "🟡 TOO EARLY (The Blight The Blight is humping u)",
        "🟡 YOU PANICKED(The Russian Spirit is shaking her head)!",
    ];


    const lateMessages = [
        "🔴 TOO LATE (u just dead harded on the floor)",
        "🔴 You are on 150 ping there is no way",
        "🔴 Ggs ur death hook at 4 gens",
        "🔴 U don't have auto dead hard i can tell",
        "🔴 Bruh u just didn't use it at all",
    ];


    if (reactionTime >= 100 && reactionTime <= 180) {

        score += 100;
        streak++;

        const randomMessage =
            perfectMessages[
                Math.floor(
                    Math.random() * perfectMessages.length
                )
            ];

        status.textContent = randomMessage;

        result.textContent =
            "Congratulations! +100 points";

    }


    else if (reactionTime < 100) {

        streak = 0;

        const randomMessage =
            earlyMessages[
                Math.floor(
                    Math.random() * earlyMessages.length
                )
            ];

        status.textContent = randomMessage;

        result.textContent =
            "Try to wait a little longer.";

    }


    else {

        streak = 0;

        const randomMessage =
            lateMessages[
                Math.floor(
                    Math.random() * lateMessages.length
                )
            ];

        status.textContent = randomMessage;

        result.textContent =
            "Try reacting faster.";
    }


    scoreDisplay.textContent = score;

    streakDisplay.textContent = streak;
}