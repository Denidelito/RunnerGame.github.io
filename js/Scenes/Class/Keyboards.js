let cursors,
    keyboards;

export class Keyboards {
    constructor(scene) {
         cursors = scene.input.keyboard.createCursorKeys();
         keyboards = scene.input.keyboard.addKeys('W, A, S, D, F, SPACE');
    }

    control_accept() {
        return keyboards['F'].isDown;
    }

    control_left() {
        return cursors.left.isDown || keyboards['A'].isDown;
    }

    control_right() {
        return cursors.right.isDown || keyboards['D'].isDown;
    }

    control_top() {
        return cursors.up.isDown || keyboards['W'].isDown;
    }

    control_bottom() {
        return cursors.down.isDown || keyboards['S'].isDown;
    }


    control_jump() {
        return cursors.up.isDown || keyboards['W'].isDown || keyboards['SPACE'].isDown;
    }
}