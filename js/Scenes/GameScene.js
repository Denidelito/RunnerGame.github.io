import { SCT} from "../SCT.js";
import {Player} from "./Class/Player.js";

let player,
    ground,
    bg;

export class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCT.SCENES.GAME
        });
    }
    init() {
        ground = this.add.image(0, 1080 - 32, 'ground').setOrigin(0);
        this.physics.add.existing(ground, true);

        bg = this.physics.add.staticGroup();
        bg.create(0, 0,'sky').setOrigin(0);
        bg.create(1920, 0,'sky').setOrigin(0);

        player = new Player(this, 0, 0, 'idle');

        this.physics.add.collider(player, ground);
    }
    create() {




    }
    update(time, delta) {


        bg.getChildren().forEach((item, key) => {
            if (item.x === -(item.width - 10)) {
                item.x = item.width;
            } else {
                item.x = item.x - 10;
            }
        });

        player.move();
    }
}