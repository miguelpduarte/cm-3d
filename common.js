// Perform setup for 3d drawing, to ensure consistency between different types
export const setup_3d = (sk) => {
    sk.textFont('sans-serif');
    sk.createCanvas(600, 600, sk.WEBGL);
    sk.normalMaterial();
};

export const preload_3d = (sk) => {
    const roboto_font = sk.loadFont('assets/Roboto-Regular.ttf');
    return { roboto_font };
};

// TODO: Move HTML elements to a separate sketch (?)
// Perform setup for 2d drawing, to ensure consistency between different types
export const setup_2d = (sk) => {
    const default_radius = 50;

    sk.createCanvas(400, 400);
    const radius_el = sk.createSlider(0, 200, default_radius);

    return { radius_el };
};

export const rotate_3d = (sk, is_rotating) => {
    if (is_rotating) {
	sk.rotateY(sk.frameCount * 0.01);
    }
}
