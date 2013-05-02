/// <reference path="../../Phaser/Game.ts" />
/// <reference path="../../build/phaser-fx.d.ts" />
(function () {
    var myGame = new Phaser.Game(this, 'game', 800, 600, init, create, update);
    function init() {
        myGame.world.setSize(1216, 896);
        myGame.loader.addImageFile('backdrop', 'assets/pics/ninja-masters2.png');
        myGame.loader.load();
    }
    var mirror;
    var cam;
    function create() {
        //  What we need is a camera 800x400 pixels in size, the mirror effect will sit below it.
        //  So we resize our default camera to 400px
        myGame.camera.height = 400;
        //  Because it's our default camera we need to tell it to disable clipping, otherwise we'll never see the mirror effect
        myGame.camera.disableClipping = true;
        //  Add our effect to the camera
        mirror = myGame.camera.fx.add(Phaser.FX.Camera.Mirror);
        //  The first 2 parameters are the x and y coordinates we're going to display the mirror effect in STAGE coordinates
        //  The next is the rectangular region of the Camera that we'll create the effect from (in this case the whole camera)
        //  Finally we set the fill color that is put over the top of the mirror effect
        mirror.start(0, 400, new Phaser.Quad(0, 0, 800, 400), 'rgba(0, 0, 100, 0.7)');
        mirror.flipX = true;
        mirror.flipY = true;
        myGame.createSprite(0, 0, 'backdrop');
    }
    function update() {
        if(myGame.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            myGame.camera.scroll.x -= 4;
        } else if(myGame.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            myGame.camera.scroll.x += 4;
        }
        if(myGame.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            myGame.camera.scroll.y -= 4;
        } else if(myGame.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            myGame.camera.scroll.y += 4;
        }
    }
})();
