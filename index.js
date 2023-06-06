// querySelector(), can select based on class or id
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

// const canvasWidth = canvas.width;
// const canvasHeight = canvas.height;

// const gridWidth = 24;
// const gridHeight = 24;

// const cellWidth = canvasWidth / gridWidth;
// const cellHeight = canvasHeight / gridWidth;
const cellWidth = 20;
const cellHeight = 20;

// tetris is 10 cells wide
function drawCell(x, y) {
  context.fillStyle = "white";
  context.fillRect(x, y, cellWidth, cellHeight);
}

function renderOrangeRicky() {
  drawCell(50, 20);
  drawCell(50, 41);
  drawCell(50, 62);
  drawCell(71, 62);
}

function renderBlueRickey() {
  drawCell(100, 20);
  drawCell(121, 20);
  drawCell(121, 41);
  drawCell(121, 62);
}

function smashBoy() {
  drawCell(160, 20);
  drawCell(160, 41);
  drawCell(181, 41);
  drawCell(181, 20);
}

function clevelandZ() {
  drawCell(220, 20);
  drawCell(241, 41);
  drawCell(241, 20);
  drawCell(262, 41);
}

function rhodeIslandZ() {
  drawCell(290, 41);
  drawCell(311, 41);
  drawCell(311, 20);
  drawCell(332, 20);
}

function teeWee() {
  drawCell(50, 121);
  drawCell(71, 121);
  drawCell(71, 100);
  drawCell(92, 121)
}

function hero() {
  drawCell(130, 100);
  drawCell(151, 100);
  drawCell(172, 100);
  drawCell(193, 100);
}

renderOrangeRicky();
renderBlueRickey();
smashBoy();
teeWee();
clevelandZ();
rhodeIslandZ();
hero();
