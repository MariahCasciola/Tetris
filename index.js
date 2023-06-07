// querySelector(), can select based on class or id
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

const displayWidth = canvas.width;
const displayHeight = canvas.height;

// grid should be 10 by 20, tetris is 10 by 20
// or 10 x 24
const gridWidth = 24;
const gridHeight = 24;

const cellWidth = displayWidth / gridWidth;
const cellHeight = displayHeight / gridHeight;

// x, y, width, height is the fillRect parameters

// canvas is black
function main() {
  context.fillStyle = "black";
  context.fillRect(0, 0, displayWidth, displayHeight);
  // for (let x = 0; x < gridWidth; x++) {
  //   for (let y = 0; y < gridHeight; y++) {
  //     drawCell(x, y);
  //   }
  // }
  // 7 x
  context.fillStyle = "grey";
  context.fillRect(0, 0, displayWidth / 4 + 18, displayHeight);
  // context.fillStyle = "purple";
  // context.fillRect(23, 23, displayWidth /4 , displayHeight);
}
main();

// tetris is 10 cells wide and 20 cells tall
function drawCell(x, y) {
  context.fillStyle = "white";
  context.fillRect(
    x * cellWidth + 2.5,
    y * cellHeight + 2.5,
    cellWidth - 1,
    cellHeight - 1
  );
}

// test cells

drawCell(7, 23);
drawCell(8, 23);
drawCell(9, 23);
drawCell(10, 23);
drawCell(11, 23);
drawCell(12, 23);
drawCell(13, 23);
drawCell(14, 23);
drawCell(15, 23);
drawCell(16, 23);
// drawCell(23, 23);

// tetrominos
function orangeRicky() {}

function blueRickey() {}

function smashBoy() {}

function clevelandZ() {}

function rhodeIslandZ() {}

function teeWee() {}

function hero() {}

// function calls for tetrominos
orangeRicky();
blueRickey();
smashBoy();
teeWee();
clevelandZ();
rhodeIslandZ();
hero();
