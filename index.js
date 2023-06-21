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
const initialState = {};

function resetInitialState() {
  initialState.x = 14;
  initialState.y = -1;
  initialState.deltaX = 0;
  initialState.deltaY = 1;
  initialState.delay = 600;
}

function loop() {
  // simulate
  // initial tetros stay in bounds of game
  if (initialState.x > 10 && initialState.x < 17) {
    initialState.x += initialState.deltaX;
  }
  if (initialState.y === 22) {
    return;
  }
  // this is what makes the tetromino go down
  initialState.y += initialState.deltaY;

  blackPlayScreen();
  // if initialState.y ===22, hits the bottom stops
  orangeRicky(initialState.x, initialState.y);
  // blueRicky(initialState.x, initialState.y);
  // smashBoy(initialState.x, initialState.y);
  // rhodeIslandZ(initialState.x, initialState.y);
  // teeWee(initialState.x, initialState.y);
  // clevelandZ(initialState.x, initialState.y);

  // // if (initalState.x < 10 || initalState.x > 17 || initalState.y === 24) return;
  // initialState.y += initialState.deltaY;
  // orangeRickyTwo(initialState.x, initialState.y);
  // orangeRickyThree(initialState.x, initialState.y);
  // orangeRickyFour(initialState.x, initialState.y);
  // blueRickyTwo(initialState.x, initialState.y);
  // blueRickyThree(initialState.x, initialState.y);
  // blueRickyFour(initialState.x, initialState.y);
  // FUTURE CLEVELANDZS
  // hero(initialState.x, initialState.y);
  // heroTwo(initialState.x, initialState.y);
  // heroThree(initialState.x, initialState.y);
  // set up next loop
  setTimeout(loop, initialState.delay);
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

function clevelandZTwo(x, y) {
  setContextColorUsingPalleteName("clevelandZ");
  // drawCell(x - 3, y + 1);
  // drawCell(x - 2, y + 1);
  drawCell(x - 1, y);
  drawCell(x - 2, y);
  setContextColorUsingPalleteName("default");
}

function clevelandZThree(x, y) {
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
function heroTwo(x, y) {
  setContextColorUsingPalleteName("hero");
  drawCell(x - 3, y - 1);
  drawCell(x - 3, y - 2);
  drawCell(x - 3, y - 3);
  drawCell(x - 3, y - 4);
  setContextColorUsingPalleteName("default");
}

function heroThree(x, y) {
  setContextColorUsingPalleteName("hero");
  drawCell(x - 2, y - 1);
  drawCell(x - 2, y - 2);
  drawCell(x - 2, y - 3);
  drawCell(x - 2, y - 4);
  setContextColorUsingPalleteName("default");
}

function keyDown(event) {
  const { keyCode } = event;
  let deltaX = 0;
  let deltaY = 0;
  if (keyCode === 68 && initialState.x < 17) deltaX = 1; // D
  if (keyCode === 65 && initialState.x > 10) deltaX = -1; // A
  if (keyCode === 83) deltaY = 1; // S
  if (keyCode === 87) deltaY = 0; // W
  initialState.x += deltaX;
  initialState.y += deltaY;
}

function main() {
  blackPlayScreen();
  button.addEventListener("click", () => {
    resetInitialState();
    loop();
  });
  window.addEventListener("keydown", keyDown);
}
main();
