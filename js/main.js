var num = 0;
var sound = 0;
var click = new Audio("./sounds/click.wav");
var clear = new Audio("./sounds/clear.wav");
var new_level = new Audio("./sounds/new_level.wav");
var victory = new Audio("./sounds/victory.mp3");
var win = false;

function clk() {
    click.play();
    if(win != true) {
        num++;
        document.getElementById("clcktxt").innerHTML = "Clicks: " + num;
        if(num >= 100 && sound == 0) {
            document.getElementById("txt").style.color = "green";
            document.getElementById("txt").innerHTML = "GORGEOUS!!!";
            sound++;
            new_level.play();
        } else if(num >= 200 && sound == 1) {
            document.getElementById("txt").style.color = "yellow";
            document.getElementById("txt").innerHTML = "IMPOSSIBLE!";
            sound++;
            new_level.play();
        } else if(num >= 500 && sound == 2) {
            document.getElementById("txt").style.color = "red";
            document.getElementById("txt").innerHTML = "You are GOD!";
            sound++;
            new_level.play();
        } else if(num >= 1000 && sound == 3) {
            document.getElementById("txt").style.color = "gold";
            document.getElementById("txt").innerHTML = "Victory!";
            document.getElementById("clcktxt").style.color = "gold";
            document.getElementById("clcktxt").innerHTML = "You win!";
            sound++;
            win = true;
            victory.play();
        }
    }
}

function clr() {
    clear.play();
    num = 0;
    sound = 0;
    win = false;
    document.getElementById("clcktxt").innerHTML = "Clicks: " + num;
    document.getElementById("txt").innerHTML = "Clicker Time!";
    document.getElementById("txt").style.color = "white";
    document.getElementById("clcktxt").style.color = "white";
}
