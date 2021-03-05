export const draw = (sk, props = {}) => {
    const {
	display_plane = false
    } = props;

    sk.background(200);

    sk.ambientLight(60, 60, 60);
    sk.pointLight(255, 255, 255, 0, 0, 100);

    sk.noFill();
    sk.strokeWeight(4);
    sk.stroke(100, 100, 240);
    sk.box(300);

    sk.noStroke();
    sk.fill(0);
    sk.ambientMaterial(255, 10, 10);
    sk.sphere(30);

    for (let i = -1; i <= 1; ++i) {
	if (i == 0) {
	    continue;
	}

	for (let j = -1; j <= 1; ++j) {
	    if (j == 0) {
		continue;
	    }
	  
	    for (let k = -1; k <= 1; ++k) {
		if (k == 0) {
		    continue;
		}
	    
		sk.push();
		sk.translate(i * 150, j*150, k*150);
		sk.sphere(30);
		sk.pop();
	    }
	}
    }

    if (display_plane) {
	sk.push();
	sk.rotateY(Math.PI/4);
	sk.plane(500);
	sk.pop();
    }

    sk.orbitControl();
};
