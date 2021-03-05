export const draw = (sk, props = {}) => {
    const {
	radius
    } = props;

    sk.background(220);

    sk.stroke(0);
    sk.fill(255);
    for (let i = 0; i < 3; ++i) {
	for (let j = 0; j < 2; ++j){
	    sk.ellipse(50 + i*radius, 50 + radius*j, radius);  
	}
    }

    sk.noFill();
    sk.stroke(255, 0, 0);
    sk.rect(50, 50, 2*radius, radius);
}
