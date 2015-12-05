// State: EOC.boot

'use strict';


var EOC = {
  score: 0
};

EOC.Boot = function () {};

EOC.Boot.prototype = {

  init: function () {
    console.log("%c~~~ Booting EOC ~~~\n Compliments of SkilStak", "color:#fdf6e3; background:#073642");
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },

  preload: function () {
    game.input.onDown.add(function() {game.parent.style.display = "none"});
  },

  create: function () {
    this.game.stage.backgroundColor = "#073642";
  }

};

