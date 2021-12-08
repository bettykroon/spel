let game = document.getElementById("game");
let bollkalle = document.getElementById("bollkalle");
let gameOver = document.getElementById("gameOver");
let result = document.getElementById("result");
let score = document.getElementById("score");

let bottom = 0;
let left = 0;
let points = 0;

document.addEventListener("keydown", (evt) => {
    switch (evt.key) {
        case "ArrowLeft":
            if(left > 0){
                left -= 10;
                bollkalle.style.left = left + "px";
                //console.log("vänster", bollkalle.style.left);
            }
            break;
        case "ArrowRight":
            if(left < 450){
                left += 10;
                bollkalle.style.left = left + "px";
                //console.log("höger", bollkalle.style.left);
            }
            break;
        default:
            break;
    }
});

let footballId = 0;

function addFootball() {

    footballId ++;

    //console.log("Fotboll kommer!");

    bollkalle.style.left = left;

    let football = document.createElement("div");
    football.classList = "football";

    let footballTop = 0;
    let footballPosition = Math.round(Math.floor(Math.random() * (450 - 1)/10)*10);

    football.style.top = footballTop + "px";
    football.style.left = footballPosition + "px";
    football.id = footballId;

    let move = setInterval(() => {

        footballTop += 50;
        document.getElementById(footballId).style.top = footballTop + "px";

        //console.log(footballTop);
        //console.log(football.style.left);
 
        if (footballTop == 350 && bollkalle.style.left == football.style.left){
            //console.log("Du fångade!!");
            points++;
            score.innerHTML = "Score: " + points;
            clearInterval(move);
            addFootball();
        }else if (footballTop == 450) {
            //console.log("GAME OVER!!!");
            gameOver.innerHTML = "GAME OVER!!!";
            clearInterval(move);

            // Skapar en restart knapp
            let restart = document.createElement("button");
            restart.id = "restart";
            restart.innerText = "Restart";
            result.append(restart);

            // om man trycker på knappen så laddas sidan om
            restart.addEventListener("click", function(){
                location.reload();
            })
        }
    }, 800);
    game.append(football);
}
addFootball();
