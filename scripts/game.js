'use strict';

var game = new Phaser.Game(240, 128, Phaser.AUTO, 'scene', { preload: preload, create: create, update: update, render: render });

function preload () { 
  game.load.image('cave','cave.png');

}

function create () {
  game.add.tileSprite(0, 0, 240, 128, 'cave');
}

function update () {
}

function render () {
}
