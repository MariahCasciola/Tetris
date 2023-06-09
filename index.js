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
const colorPallete = {
  bg: "black",
  walls: "black",
  spackle: "#1bfafa",
  hero: "#1bfafa",
  orangeRicky: "#ecbe71",
  blueRicky: "blue",
  smashBoy: "yellow",
  clevelandZ: "red",
  rhodeIslandZ: "green",
  teeWee: "purple",
  default: "white",
};

/*bricks*/
function brickWalls() {
  setContextColorUsingPalleteName("walls");
  for (i = 0; i < displayWidth; i++) {
    for (j = 0; j < displayHeight; j++) {
      drawCell(i, j);
    }
  }
  setContextColorUsingPalleteName("default");
}

/*spackle between bricks*/
function spackle() {
  setContextColorUsingPalleteName("spackle");
  context.fillRect(0, 0, displayWidth, displayHeight);
  setContextColorUsingPalleteName("default");
}

/*tetris game board is 10 cells wide and 20 cells tall*/
function blackPlayScreen() {
  setContextColorUsingPalleteName("bg");
  context.fillRect(175, 0, (displayWidth / 24) * 10, displayHeight);
  setContextColorUsingPalleteName("default");
}

/* cells*/
function drawCell(x, y, color) {
  if (color) context.fillStyle = color;

  context.fillRect(
    x * cellWidth + 0.5,
    y * cellHeight + 0.5,
    cellWidth - 1,
    cellHeight - 1
  );
}

// /allows us to call dynamically assigned colors from the pallete
function getPalleteColor(name) {
  return colorPallete[name] ? colorPallete[name] : colorPallete.default;
}

//sets the context color to a matching color in our pallete
function setContextColorUsingPalleteName(name) {
  const color = getPalleteColor(name);
  context.fillStyle = color;
}

//allows us to set colors dynamically to our pallete
// function setPalleteColor(name, color) {
//   colorPallete[name] = color;
// }

/*tetrominos, create a class for every tetromino*/
function orangeRicky(x, y) {
  setContextColorUsingPalleteName("orangeRicky");
  drawCell(x, y);
  drawCell(x - 1, y);
  drawCell(x - 2, y);
  drawCell(x, y + 1);
  setContextColorUsingPalleteName("default");
}

function blueRicky(x, y) {
  setContextColorUsingPalleteName("blueRicky");
  drawCell(x, y);
  drawCell(x, y);
  drawCell(x, y);
  drawCell(x, y);
  setContextColorUsingPalleteName("default");
}

function smashBoy(x, y) {
  setContextColorUsingPalleteName("smashBoy");
  drawCell(x, y);
  drawCell(x, y);
  drawCell(x, y);
  drawCell(x, y);
  setContextColorUsingPalleteName("default");
}

function clevelandZ(x, y) {
  setContextColorUsingPalleteName("clevelandZ");
  drawCell(x, y);
  drawCell(x, y);
  drawCell(x, y);
  drawCell(x, y);
  setContextColorUsingPalleteName("default");
}

function rhodeIslandZ(x, y) {
  setContextColorUsingPalleteName("rhodeIslandZ");
  drawCell(x, y);
  drawCell(x, y);
  drawCell(x, y);
  drawCell(x, y);
  setContextColorUsingPalleteName("default");
}

function teeWee(x, y) {
  setContextColorUsingPalleteName("teeWee");
  drawCell(x, y);
  drawCell(x, y);
  drawCell(x, y);
  drawCell(x, y);
  setContextColorUsingPalleteName("default");
}

function hero(x = 0, y = 0) {
  setContextColorUsingPalleteName("hero");
  drawCell(x, y);
  drawCell(x, y + 1);
  drawCell(x, y + 2);
  drawCell(x, y + 3);
  setContextColorUsingPalleteName("default");
}

// other function calls (order goes from most behind layer to most forward layer)
spackle();
brickWalls();
blackPlayScreen();

// function calls for tetrominos
// increment the y to go down, 12 is the starting point for every tetromino that comes into
orangeRicky(16, 1);
blueRicky();
smashBoy();
clevelandZ();
rhodeIslandZ();
teeWee();
hero(12, 2);
hero(15, 7);
hero(10, 5);
