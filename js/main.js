import {LoadScene} from "./Scenes/LoadScene.js";
import {GameScene} from "./Scenes/GameScene.js";

let game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 320 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        min: {
            width: 320,
            height: 568
        },
        max: {
            width: '100%',
            height: '100%'
        },
        zoom: 1,
    },
    scene: [
        LoadScene, GameScene,

    ]
});
