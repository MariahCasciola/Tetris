// querySelector(), can select based on class or id
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
const displayWidth = canvas.width;
const displayHeight = canvas.height;
const gridWidth = 24;
const gridHeight = 24;
const minimumDisplayScale = Math.min(displayHeight, displayWidth);
const cellWidth = minimumDisplayScale / gridWidth;
const cellHeight = minimumDisplayScale / gridHeight;

// canvas is black
function blackPlayScreen() {
  context.fillStyle = "black";
  context.fillRect(175, 0, displayWidth/24*10, displayHeight);
  context.fillStyle = "white";
}

// tetris is 10 cells wide and 20 cells tall
function greyWalls() {
  for (i = 0; i < displayWidth; i++) {
    for (j = 0; j < displayHeight; j++) {
      drawCell(i, j, "grey");
    }
  }
}

/* colored cells*/

function drawCell(x, y, color = "white") {
  context.fillStyle = color;
  context.fillRect(
    x * cellWidth + 0.5,
    y * cellHeight + 0.5,
    cellWidth - 1,
    cellHeight - 1
  );
}

// tetrominos
function orangeRicky(x, y) {
  drawCell();
  drawCell();
  drawCell();
  drawCell();
}

function blueRickey(x, y) {
  drawCell();
  drawCell();
  drawCell();
  drawCell();
}

function smashBoy(x, y) {
  drawCell();
  drawCell();
  drawCell();
  drawCell();
}

function clevelandZ(x, y) {
  drawCell();
  drawCell();
  drawCell();
  drawCell();
}

function rhodeIslandZ(x, y) {
  drawCell();
  drawCell();
  drawCell();
  drawCell();
}

function teeWee(x, y) {
  drawCell();
  drawCell();
  drawCell();
  drawCell();
}

function hero(x = 0, y = 0) {
  drawCell(x, y);
  drawCell(x, y + 1);
  drawCell(x, y + 2);
  drawCell(x, y + 3);
}

// other function calls (order goes from most behind layer to most forward layer)

greyWalls();
blackPlayScreen();

// function calls for tetrominos
orangeRicky();
blueRickey();
smashBoy();
clevelandZ();
rhodeIslandZ();
teeWee();
// increment the y to go down, 12 is the starting point for every tetromino that comes into
hero(12, 0);
