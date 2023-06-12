// querySelector(), can select based on class or id
const canvas = document.querySelector("#canvas");
const button = document.querySelector("#button");
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

// spawn tetromino game state
const state = {};

function resetState() {
  state.x = 14;
  state.y = -1;
  state.deltaX = 0;
  state.deltaY = 1;
  state.delay = 160;
}

function loop() {
  // simulate
  state.x += state.deltaX;
  state.y += state.deltaY;
  // check for loose conditions
  // draw
  blackPlayScreen();
  hero(state.x, state.y);
  // orangeRicky(state.x, state.y);
  // blueRicky(state.x, state.y);
  // smashBoy(state.x, state.y);
  // clevelandZ(state.x, state.y);
  // rhodeIslandZ(state.x, state.y);
  // teeWee(state.x, state.y);
  // set up next loop
  setTimeout(loop, state.delay);
}

// Create 4 rotation states for each tetronimo

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

// other function calls (order goes from most behind layer to most forward layer)
spackle();
brickWalls();
blackPlayScreen();

// function draw() {
//   // clears playing field before rendering below
//   blackPlayScreen();
//   // what do we want to multiply these parameters by to make it move down
//   hero(12, 0);
// }

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
  drawCell(x - 1, y);
  drawCell(x - 3, y);
  drawCell(x - 2, y);
  drawCell(x - 1, y + 1);
  setContextColorUsingPalleteName("default");
}

function blueRicky(x, y) {
  setContextColorUsingPalleteName("blueRicky");
  drawCell(x - 3, y + 1);
  drawCell(x - 1, y);
  drawCell(x - 2, y);
  drawCell(x - 3, y);
  setContextColorUsingPalleteName("default");
}

function smashBoy(x, y) {
  setContextColorUsingPalleteName("smashBoy");
  drawCell(x - 2, y + 1);
  drawCell(x - 2, y);
  drawCell(x - 3, y + 1);
  drawCell(x - 3, y);
  setContextColorUsingPalleteName("default");
}

function clevelandZ(x, y) {
  setContextColorUsingPalleteName("clevelandZ");
  drawCell(x - 3, y + 1);
  drawCell(x - 2, y + 1);
  drawCell(x - 1, y);
  drawCell(x - 2, y);
  setContextColorUsingPalleteName("default");
}

function rhodeIslandZ(x, y) {
  setContextColorUsingPalleteName("rhodeIslandZ");
  drawCell(x - 1, y + 1);
  drawCell(x - 2, y);
  drawCell(x - 2, y + 1);
  drawCell(x - 3, y);
  setContextColorUsingPalleteName("default");
}

function teeWee(x, y) {
  setContextColorUsingPalleteName("teeWee");
  drawCell(x - 3, y);
  drawCell(x - 2, y);
  drawCell(x - 1, y);
  drawCell(x - 2, y + 1);
  setContextColorUsingPalleteName("default");
}

function hero(x = 0, y = 0) {
  setContextColorUsingPalleteName("hero");
  drawCell(x - 1, y);
  drawCell(x - 2, y);
  drawCell(x - 3, y);
  drawCell(x - 4, y);
  setContextColorUsingPalleteName("default");
}

// function startGame() {
//   // blackPlayScreen();
//   // button.addEventListener("click", (e) => {
//   //   resetState();
//   //   loop();
//   // });
// }
// startGame();

function main() {
  resetState();
  loop();
}
main();
