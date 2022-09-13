import { SCT} from "../SCT.js";

export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCT.SCENES.LOAD
        });
    }
    init() {
    }
    preload() {
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0x0D7DCE
            }
        });

        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
        })

        this.load.on("complete", () => {
            // console.log('complete');
        })
    }
    create() {

        if (localStorage.getItem('fgtSave') === null) {
            let fgtSave = {x: 700, y: 880};

            localStorage.setItem('fgtSave', JSON.stringify(fgtSave));
        }


        this.scene.start(SCT.SCENES.GAME, "load complite");
    }
    update() {

    }
}