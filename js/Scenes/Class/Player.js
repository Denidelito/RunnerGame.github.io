import {Keyboards} from "./Keyboards.js";

const moveSpeed = 450;

let keyboard;

export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture);

        scene.add.existing(this);
        scene.physics.add.existing(this, false);

        this.setBounce(0);
        this.body.setGravityY(320);

        this.body.collideWorldBounds = true;
        //animation sprite player


        this.anims.create({
            key: 'idleAnimation',
            frames: 'idle',
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'runAnimation',
            frames: 'run',
            frameRate: 8,
            repeat: -1
        });

        this.anims.play('runAnimation', true);

        keyboard = new Keyboards(scene);
    }
    move() {
        //add move player to button down
        if (keyboard.control_right()) {
            this.move_right();

        } else if (keyboard.control_left()) {
            this.move_left();

        } else {
            this.setVelocityX(0);
        }

        //add jump player
        if ((keyboard.control_jump()) && this.body.touching.down) {
            this.jump();

        }
    }

    move_left() {
        this.body.setVelocityX(-moveSpeed);
        this.scaleX = 1;
    }

    move_right() {
        this.body.setVelocityX(moveSpeed);
        this.scaleX = 1;
    }
    jump() {
        this.body.setVelocityY(-700);
    }
}