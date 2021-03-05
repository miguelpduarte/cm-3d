import { setup_3d, preload_3d, rotate_3d, setup_2d } from "./common.js";
import { draw as draw_3d_ccc } from "./ccc_3d.js";
import { draw as draw_2d_ccc } from "./ccc_2d.js";
import { draw as draw_3d_wip } from "./wip_3d.js";

let mode_radio_el;

const my_settings_sketch = (sk) => {
    sk.setup = () => {
	mode_radio_el = sk.createRadio();
	mode_radio_el.option('CCC');
	mode_radio_el.option('CFC');
	mode_radio_el.option('HC');

	mode_radio_el.selected('CCC');
    };

    sk.draw = () => {

    };
}

const my_settings_p5 = new p5(my_settings_sketch, 'settings');

const my_3d_sketch = (sk) => {
    let roboto_font;

    sk.preload = () => {
	roboto_font = preload_3d(sk).roboto_font;
    }

    sk.setup = () => {
	setup_3d(sk);
	// TODO: Fix location probably
	sk.textFont(roboto_font);
    }

    sk.draw = () => {
	const mode = mode_radio_el.value();

	switch (mode) {
	    case 'CCC':
		draw_3d_ccc(sk);
		break;
	    default:
		draw_3d_wip(sk);
		break;
	}
    }
};

const my_3d_p5 = new p5(my_3d_sketch, 'cm_3d');

const my_2d_sketch = (sk) => {
    let radius_el;

    sk.setup = () => {
	radius_el = setup_2d(sk).radius_el;
    };

    sk.draw = () => {
	const mode = mode_radio_el.value();

	switch (mode) {
	    case 'CCC':
		const radius = radius_el.value();
		draw_2d_ccc(sk, {radius});
		break;
	    default:
		break;
	}
    };
};

const my_2d_p5 = new p5(my_2d_sketch, 'cm_2d');
