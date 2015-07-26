var game = new Phaser.Game(1000, 600, Phaser.AUTO, 'gameCanvas', {preload: preload, create: create, update: update});
console.log(units);
console.log(units.worker.moveSpeedX, units.worker.moveSpeedY);

function spawnUnit(spawnX, spawnY, unitImageName, unitImageFrame){
  var newUnit = game.add.sprite(spawnX, spawnY, unitImageName, unitImageFrame);
  return newUnit;
}
function preload() {
  game.load.spritesheet('worker', 'assets/worker.png', 72, 72);
  game.load.spritesheet('orcs', 'assets/orcs.png');
}

function create() {
  //units.worker = spawnUnit(0, 530, 'worker', 2);
}

function update() {

}
