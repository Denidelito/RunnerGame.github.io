let sp;

export class Npc extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, sprite, moveSpeed) {
        super(scene, x, y, sprite, moveSpeed);

        scene.add.existing(this);
        scene.physics.add.existing(this, false);

        this.setDepth(1);
        this.setBounce(0);
        this.setOrigin(0);
        this.body.immovable = false;

        console.log(this);

        sp = moveSpeed;
        this.body.setSize(160, 160);
    }

    move() {
        this.body.setVelocityX(-sp);
        this.scaleX = 1;
    }
}