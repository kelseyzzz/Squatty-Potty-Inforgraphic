function createParticle() {
	var particle = document.createElement("img");
	particle.src = 'assets/img/Poop-Emoji.png';
	document.body.appendChild(particle);

	var size = Math.round(Math.random()*60+1);
	particle.style.width = size + "px";
	particle.style.height = size + "px";
	

	particle.style.position = "absolute";
	particle.style.top = (0 - size) + "px";
	particle.style.left = Math.random()*(window.innerWidth + size) + "px";

	

	var leftCount,
		rightCount,
		threshold;

	leftCount = 0;
	rightCount = 0;


	var moveParticle = setInterval(function(){
		// get current left and top
		//set new left and top
		

		var currentLeft = parseInt(particle.style.left);
		var currentTop = parseInt(particle.style.top);
		var newLeft = currentLeft - 10;
		var newTop = currentTop +10;


//if off the scrren, remove particle and particle's interval
		if (newLeft < 0 - size ||
			newTop > window.innerHeight) {

			particle.remove();
			window.clearInterval(moveParticle);

			return;

		}

		particle.style.left = newLeft + "px";
		particle.style.top = newTop + "px";

	}, Math.random()*30+100);

}

window.addEventListener("keyup", function(e){
	if (e.keyCode == 32){
		window.clearInterval(particleCreator);
	}
});

var particleCreator = setInterval(function(){
	var particleAmount = document.body.children.length;
	if ( particleAmount < 100 ){
		createParticle();
	}
}, 63);
