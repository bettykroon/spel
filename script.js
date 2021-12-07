let game = document.getElementById("game");
let bollkalle = document.getElementById("bollkalle");

let bottom = 0;
let left = 0;

document.addEventListener("keydown", (evt) => {
    switch (evt.key) {
        case "ArrowLeft":
            if(left > 0){
                left -= 10;
                bollkalle.style.left = left + "px";
            }
            break;
        case "ArrowRight":
            if(left < 450){
                left += 10;
                bollkalle.style.left = left + "px";
            }
            break;
        default:
            break;
    }
});

let footballId = 0;

function addFootball() {

    footballId ++;

    console.log("Fotboll kommer!");

    let football = document.createElement("div");
    football.classList = "football";

    let footballTop = 0;
    let footballPosition = Math.round(Math.floor(Math.random() * (100 - 1)/10)*10);

    football.style.top = footballTop + "px";
    football.style.left = footballPosition + "%";
    football.id = footballId;

    let move = setInterval(() => {

        footballTop += 50;
        document.getElementById(footballId).style.top = footballTop + "px";

        console.log(bollkalle.style.top);

        if (footballTop == 450) {
            console.log("GAME OVER!!!");
            clearInterval(move);
        } else if (footballTop == bollkalle.style.top){
            console.log("HEJ");
        }

    }, 1000);

    game.append(football);
}
addFootball();
