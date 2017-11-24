//scroll to a section
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

			var target = $(this.hash);

			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

//scroll up
$(function() {
	$('.scroll_up').click(function(){
		$('html, body').animate({scrollTop: 0}, 1200)

	});
});

//show scroll
$(window).scroll(function() {
	if($(this).scrollTop()>300) $('.scroll_up').fadeIn();
	else $('.scroll_up').fadeOut();
});

//scroll down
$(function() {
	$('#hero_button').click(function(){
		$('html, body').animate({
			scrollTop: $('#section-lessons').offset().top}, 1000)
	})
});
$(function() {
	$('#aboutus_button').click(function(){
		$('html, body').animate({
			scrollTop: $('#section-map').offset().top}, 1000)
	})
});

//slider
var actual = 0;

function choosePhoto(n){
	var cp = document.getElementsByClassName("dots");
	for(i = 0; i<cp.length; i++){
		if(cp[i].className.includes("active")){
			cp[i].className = cp[i].className.replace("active","")
			break;
		}
	}
	cp[n].className += " active";
};

function slider(n){
	var images = document.getElementsByClassName("image");
	for(i = 0; i<images.length; i++){
		if(images[i].className.includes("actual")){
			images[i].className = images[i].className.replace("actual","");
			break;
		}
	}
	actual = n;
	images[n].className += " actual";
	choosePhoto(n);
};

function nextPhoto(){
	actual++;
	if(actual>2) {
		actual = 0;
	}
	slider(actual);
};

function prevPhoto(){
	actual--;
	if(actual<0) {
		actual = 2;
	}
	slider(actual);
};

