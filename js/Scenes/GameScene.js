import { SCT} from "../SCT.js";
import {Player} from "./Class/Player.js";
import {Npc} from "./Class/Npc.js";

let player,
    ground,
    bg,
    npcGroup = [];

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

        npcGroup.push(new Npc(this, 1920 - 160, 0, 'npc', 100));



        player = new Player(this, 0, 0, 'idle');

        this.physics.add.collider(player, [ground]);
        this.physics.add.collider(player, npcGroup);
        this.physics.add.collider(ground, npcGroup);

        console.log(npcGroup)

    }
    create() {




    }
    update(time, delta) {

        // console.log()

        npcGroup.forEach((npc, key) => {
            if (npc.x <= 0) {
                console.log(npc.x)
                delete npcGroup[key]

                npcGroup.push(new Npc(this, 1920 - 160, 0, 'npc', 100));
                npcGroup[npcGroup.length - 1].move();

                console.log(npcGroup);
            } else {
                npc.move();
            }
        });


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