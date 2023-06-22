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
const state = {};

function resetState() {
  state.x = 14;
  state.y = -1;
  state.deltaX = 0;
  state.deltaY = 1;
  state.delay = 1000;
  state.currentRotationState = 1;
}

const orangeRotationState = {
  1: orangeRickyOne,
  2: orangeRickyTwo,
  3: orangeRickyThree,
  4: orangeRickyFour,
};

const blueRotationState = {
  1: blueRickyOne,
  2: blueRickyTwo,
  3: blueRickyThree,
  4: blueRickyFour,
};

const clevelandZState = {
  1: clevelandZOne,
  2: clevelandZTwo,
  3: clevelandZThree,
  4: clevelandZFour,
};

const rhodeIslandZState = {
  1: rhodeIslandZOne,
  2: rhodeIslandZTwo,
  3: rhodeIslandZThree,
  4: rhodeIslandZFour,
};

const teeWeeState = {
  1: teeWeeOne,
  2: teeWeeTwo,
  3: teeWeeThree,
  4: teeWeeFour,
};

const heroState = {
  1: heroOne,
  2: heroTwo,
  3: heroThree,
  4: heroFour,
};

function loop() {
  //bounds of game
  if (state.x > 10 && state.x < 17) {
    state.x += state.deltaX;
  }
  if (state.y === 22) {
    return;
  }
  // this is what makes the tetromino go down
  state.y += state.deltaY;
  blackPlayScreen();
  // if initialState.y ===22, hits the bottom stops
  orangeRicky(state.x, state.y, state.currentRotationState);
  // blueRicky(state.x, state.y, state.currentRotationState);
  // smashBoy(state.x, state.y);
  // rhodeIslandZ(state.x, state.y, state.currentRotationState);
  // teeWee(state.x, state.y, state.currentRotationState);
  // clevelandZ(state.x, state.y, state.currentRotationState);
  // if (initalState.x < 10 || initalState.x > 17 || initalState.y === 24) return;
  // hero(state.x, state.y, state.currentRotationState);
  // set up next loop
  setTimeout(loop, state.delay);
}

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

/*tetrominos*/

// orangeRicky
function orangeRicky(x, y) {
  setContextColorUsingPalleteName("orangeRicky");
  orangeRotationState[state.currentRotationState](x, y);
  setContextColorUsingPalleteName("default");
}

function orangeRickyOne(x, y) {
  drawCell(x - 1, y);
  drawCell(x - 3, y);
  drawCell(x - 2, y);
  drawCell(x - 1, y + 1);
}

function orangeRickyTwo(x, y) {
  drawCell(x - 2, y - 2);
  drawCell(x - 3, y);
  drawCell(x - 2, y);
  drawCell(x - 2, y - 1);
}

function orangeRickyThree(x, y) {
  drawCell(x - 1, y - 1);
  drawCell(x - 3, y - 2);
  drawCell(x - 3, y - 1);
  drawCell(x - 2, y - 1);
}

function orangeRickyFour(x, y) {
  drawCell(x - 2, y - 3);
  drawCell(x - 3, y - 3);
  drawCell(x - 3, y - 2);
  drawCell(x - 3, y - 1);
}

function blueRicky(x, y) {
  setContextColorUsingPalleteName("blueRicky");
  blueRotationState[state.currentRotationState](x, y);
  setContextColorUsingPalleteName("default");
}

function blueRickyOne(x, y) {
  drawCell(x - 3, y + 1);
  drawCell(x - 1, y);
  drawCell(x - 2, y);
  drawCell(x - 3, y);
}

function blueRickyTwo(x, y) {
  drawCell(x - 2, y - 2);
  drawCell(x - 3, y - 2);
  drawCell(x - 2, y);
  drawCell(x - 2, y - 1);
}

function blueRickyThree(x, y) {
  drawCell(x - 1, y);
  drawCell(x - 3, y);
  drawCell(x - 2, y);
  drawCell(x - 1, y - 1);
}

function blueRickyFour(x, y) {
  drawCell(x - 2, y - 2);
  drawCell(x - 2, y);
  drawCell(x - 1, y);
  drawCell(x - 2, y - 1);
}

// no rotation necessary
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
  clevelandZState[state.currentRotationState](x, y);
  setContextColorUsingPalleteName("default");
}

function clevelandZOne(x, y) {
  drawCell(x - 3, y + 1);
  drawCell(x - 2, y + 1);
  drawCell(x - 1, y);
  drawCell(x - 2, y);
}

function clevelandZTwo(x, y) {
  drawCell(x - 2, y - 1);
  drawCell(x - 1, y + 1);
  drawCell(x - 1, y);
  drawCell(x - 2, y);
}

function clevelandZThree(x, y) {
  drawCell(x - 3, y + 1);
  drawCell(x - 2, y + 1);
  drawCell(x - 1, y);
  drawCell(x - 2, y);
}

function clevelandZFour(x, y) {
  drawCell(x - 2, y - 1);
  drawCell(x - 1, y + 1);
  drawCell(x - 1, y);
  drawCell(x - 2, y);
}

function rhodeIslandZ(x, y) {
  setContextColorUsingPalleteName("rhodeIslandZ");
  rhodeIslandZState[state.currentRotationState](x, y);
  setContextColorUsingPalleteName("default");
}

function rhodeIslandZOne(x, y) {
  drawCell(x - 1, y + 1);
  drawCell(x - 2, y);
  drawCell(x - 2, y + 1);
  drawCell(x - 3, y);
}

function rhodeIslandZTwo(x, y) {
  drawCell(x - 1, y - 1);
  drawCell(x - 2, y);
  drawCell(x - 2, y + 1);
  drawCell(x - 1, y);
}

function rhodeIslandZThree(x, y) {
  drawCell(x - 1, y + 1);
  drawCell(x - 2, y);
  drawCell(x - 2, y + 1);
  drawCell(x - 3, y);
}

function rhodeIslandZFour(x, y) {
  drawCell(x - 1, y - 1);
  drawCell(x - 2, y);
  drawCell(x - 2, y + 1);
  drawCell(x - 1, y);
}

function teeWee(x, y) {
  setContextColorUsingPalleteName("teeWee");
  teeWeeState[state.currentRotationState](x, y);
  setContextColorUsingPalleteName("default");
}

function teeWeeOne(x, y) {
  drawCell(x - 3, y);
  drawCell(x - 2, y);
  drawCell(x - 1, y);
  drawCell(x - 2, y + 1);
}

function teeWeeTwo(x, y) {
  drawCell(x - 3, y);
  drawCell(x - 2, y);
  drawCell(x - 2, y - 1);
  drawCell(x - 2, y + 1);
}
function teeWeeThree(x, y) {
  drawCell(x - 3, y + 1);
  drawCell(x - 2, y);
  drawCell(x - 1, y + 1);
  drawCell(x - 2, y + 1);
}
function teeWeeFour(x, y) {
  drawCell(x - 2, y + 1);
  drawCell(x - 2, y - 1);
  drawCell(x - 1, y);
  drawCell(x - 2, y);
}

function hero(x, y) {
  setContextColorUsingPalleteName("hero");
  heroState[state.currentRotationState](x, y);
  setContextColorUsingPalleteName("default");
}

function heroOne(x, y) {
  drawCell(x - 1, y);
  drawCell(x - 2, y);
  drawCell(x - 3, y);
  drawCell(x - 4, y);
}

function heroTwo(x, y) {
  drawCell(x - 2, y - 1);
  drawCell(x - 2, y - 2);
  drawCell(x - 2, y - 3);
  drawCell(x - 2, y - 4);
}

function heroThree(x, y) {
  drawCell(x - 1, y);
  drawCell(x - 2, y);
  drawCell(x - 3, y);
  drawCell(x - 4, y);
}
// drawCell(x - 3, y - 1);
// drawCell(x - 3, y - 2);
// drawCell(x - 3, y - 3);
// drawCell(x - 3, y - 4);

function heroFour(x, y) {
  drawCell(x - 2, y - 1);
  drawCell(x - 2, y - 2);
  drawCell(x - 2, y - 3);
  drawCell(x - 2, y - 4);
}
// drawCell(x - 3, y - 1);
// drawCell(x - 3, y - 2);
// drawCell(x - 3, y - 3);
// drawCell(x - 3, y - 4);

function keyDown(event) {
  const { keyCode } = event;
  let deltaX = 0;
  let deltaY = 0;
  if (keyCode === 68 && state.x < 17) deltaX = 1; // D
  if (keyCode === 65 && state.x > 10) deltaX = -1; // A
  if (keyCode === 83) deltaY = 1; // S
  state.x += deltaX;
  state.y += deltaY;
}

function handleRotation(event) {
  // if 87 is pressed change rotation state
  const { keyCode } = event;
  // W
  if (keyCode === 87) {
    state.currentRotationState += 1;
    if (state.currentRotationState === 5) {
      state.currentRotationState = 1;
    }
  }
}

function main() {
  blackPlayScreen();
  button.addEventListener("click", () => {
    resetState();
    loop();
  });
  window.addEventListener("keydown", keyDown);
  window.addEventListener("keydown", handleRotation);
}
main();
