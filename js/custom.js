$(document).ready(function(){
	$(this).keydown(function(e){
		// console.log(e.which);
		var key = $(this).find('.key[data-key = '+e.which+']');
		var audio = $(this).find('audio[data-key='+e.which+']')[0];
		// console.log(key);
		key.toggleClass('playing');
		// console.log(audio);
		audio.play();
		audio.currentTime = 0;
	});

	$(this).keyup(function(e){
		// console.log(e.which);
		var key = $(this).find('.key[data-key='+e.which+']');
		// console.log(key);
		key.toggleClass('playing');
	});
});