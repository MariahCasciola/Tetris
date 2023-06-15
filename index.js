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

// spawn tetromino inital state
const initalState = {};

function resetInitialState() {
  initalState.x = 14;
  initalState.y = -1;
  initalState.deltaX = 0;
  initalState.deltaY = 1;
  initalState.delay = 160;
}

const stateTwo = {};

function resetTwo() {
  stateTwo.x = 14;
  stateTwo.y = -1;
  stateTwo.deltaX = 0;
  stateTwo.deltaY = 1;
  stateTwo.delay = 160;
}

const stateThree = {};

function resetThree() {
  stateThree.x = 14;
  stateThree.y = -1;
  stateThree.deltaX = 0;
  stateThree.deltaY = 1;
  stateThree.delay = 160;
}

const stateFour = {};

function resetFour() {
  stateFour.x = 14;
  stateFour.y = -1;
  stateFour.deltaX = 0;
  stateFour.deltaY = 1;
  stateFour.delay = 160;
}

function loop() {
  // simulate
  initalState.x += initalState.deltaX;
  initalState.y += initalState.deltaY;
  stateTwo.x += stateTwo.deltaX;
  stateTwo.y += stateTwo.deltaY;
  stateThree.x += stateThree.deltaX;
  stateThree.y += stateThree.deltaY;
  stateFour.x += stateFour.deltaX;
  stateFour.y += stateFour.deltaY;
  // initial tetros stay in bounds of game
  // if (initalState.x < 10 || initalState.x > 17 || initalState.y === 23) return;
  // special: stops the initial hero, orange2 at the bottom
  if (initalState.x < 10 || initalState.x > 17 || initalState.y === 24) return;
  blackPlayScreen();
  // orangeRicky(initalState.x, initalState.y);
  // orangeRickyTwo(stateTwo.x, stateTwo.y);
  // orangeRickyThree(stateThree.x, stateThree.y);
  // orangeRickyFour(stateFour.x, stateFour.y);
  // blueRicky(initalState.x, initalState.y);
  // blueRickyTwo(initalState.x, initalState.y);
  // blueRickyThree(initalState.x, initalState.y);
  // blueRickyFour(initalState.x, initalState.y);
  // smashBoy(initalState.x, initalState.y);
  // clevelandZ(initalState.x, initalState.y);
  // rhodeIslandZ(initalState.x, initalState.y);
  // teeWee(initalState.x, initalState.y);
  // hero(initalState.x, initalState.y);
  // set up next loop
  setTimeout(loop, initalState.delay);
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
function grout() {
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
grout();
brickWalls();
blackPlayScreen();

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

// not used atm
//allows us to set colors dynamically to our pallete
function setPalleteColor(name, color) {
  colorPallete[name] = color;
}

/*tetrominos*/ //starting with initial, and rotating right

// orangeRicky
function orangeRicky(x, y) {
  setContextColorUsingPalleteName("orangeRicky");
  drawCell(x - 1, y);
  drawCell(x - 3, y);
  drawCell(x - 2, y);
  drawCell(x - 1, y + 1);
  setContextColorUsingPalleteName("default");
}

function orangeRickyTwo(x, y) {
  setContextColorUsingPalleteName("orangeRicky");
  drawCell(x - 2, y - 2);
  drawCell(x - 3, y);
  drawCell(x - 2, y);
  drawCell(x - 2, y - 1);
  setContextColorUsingPalleteName("default");
}

function orangeRickyThree(x, y) {
  setContextColorUsingPalleteName("orangeRicky");
  drawCell(x - 1, y - 1);
  drawCell(x - 3, y - 2);
  drawCell(x - 3, y - 1);
  drawCell(x - 2, y - 1);
  setContextColorUsingPalleteName("default");
}

function orangeRickyFour(x, y) {
  setContextColorUsingPalleteName("orangeRicky");
  drawCell(x - 2, y - 3);
  drawCell(x - 3, y - 3);
  drawCell(x - 3, y - 2);
  drawCell(x - 3, y - 1);
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

function blueRickyTwo(x, y) {
  setContextColorUsingPalleteName("blueRicky");
  drawCell(x - 2, y - 2);
  drawCell(x - 3, y - 2);
  drawCell(x - 2, y);
  drawCell(x - 2, y - 1);
  setContextColorUsingPalleteName("default");
}

function blueRickyThree(x, y) {
  setContextColorUsingPalleteName("blueRicky");
  drawCell(x - 1, y);
  drawCell(x - 3, y);
  drawCell(x - 2, y);
  drawCell(x - 1, y - 1);
  setContextColorUsingPalleteName("default");
}

function blueRickyFour(x, y) {
  setContextColorUsingPalleteName("blueRicky");
  drawCell(x - 2, y - 2);
  drawCell(x - 2, y);
  drawCell(x - 1, y);
  drawCell(x - 2, y - 1);
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

function keyDown(event) {
  const { keyCode } = event;
  let deltaX = 0;
  let deltaY = 0;
  if (keyCode === 68) deltaX = 1;
  if (keyCode === 65) deltaX = -1;
  if (keyCode === 83) deltaY = 1;
  if (keyCode === 87) deltaY = 1;
  initalState.deltaX = deltaX;
  initalState.deltaY = deltaY;
  stateTwo.deltaX = deltaX;
  stateTwo.deltaY = deltaY;
  stateThree.deltaX = deltaX;
  stateThree.deltaY = deltaY;
  stateFour.deltaX = deltaX;
  stateFour.deltaY = deltaY;
}

function main() {
  blackPlayScreen();
  button.addEventListener("click", () => {
    resetInitialState();
    resetTwo();
    resetThree();
    resetFour();
    loop();
  });
  window.addEventListener("keydown", keyDown);
}
main();
