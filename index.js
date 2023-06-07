// querySelector(), can select based on class or id
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

const displayWidth = canvas.width;
const displayHeight = canvas.height;

// grid should be 10 by 20, tetris is 10 by 20
// or 10 x 24 
const gridWidth = 10;
const gridHeight = 20;

const cellWidth = displayWidth / gridWidth;
const cellHeight = displayHeight / gridHeight;

// x, y, width, height is the fillRect parameters
// canvas is black
function main() {
  context.fillStyle = "black";
  context.fillRect(0, 0, displayWidth, displayHeight);
}
main();

// tetris is 10 cells wide and 20 cells tall
function drawCell(x, y) {
  context.fillStyle = "white";
  context.fillRect(x, y, cellWidth, cellHeight)
}

drawCell(1,1)
drawCell(cellWidth, cellHeight);
drawCell(cellWidth*2, cellHeight*2);

// function renderOrangeRicky() {
//   drawCell(50, 20);
//   drawCell(50, 41);
//   drawCell(50, 62);
//   drawCell(71, 62);
// }

// function renderBlueRickey() {
//   drawCell(100, 20);
//   drawCell(121, 20);
//   drawCell(121, 41);
//   drawCell(121, 62);
// }

// function smashBoy() {
//   drawCell(160, 20);
//   drawCell(160, 41);
//   drawCell(181, 41);
//   drawCell(181, 20);
// }

// function clevelandZ() {
//   drawCell(220, 20);
//   drawCell(241, 41);
//   drawCell(241, 20);
//   drawCell(262, 41);
// }

// function rhodeIslandZ() {
//   drawCell(290, 41);
//   drawCell(311, 41);
//   drawCell(311, 20);
//   drawCell(332, 20);
// }

// function teeWee() {
//   drawCell(50, 121);
//   drawCell(71, 121);
//   drawCell(71, 100);
//   drawCell(92, 121);
// }

// function hero() {
//   drawCell(130, 100);
//   drawCell(151, 100);
//   drawCell(172, 100);
//   drawCell(193, 100);
// }

// renderOrangeRicky();
// renderBlueRickey();
// smashBoy();
// teeWee();
// clevelandZ();
// rhodeIslandZ();
// hero();
