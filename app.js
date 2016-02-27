$(document).ready(function() {
	var menuOpen = false;
	
	function openMenu(){
		$('.menu').animate({
			left: "0px"
		}, 200);

		$('body').animate({
			left: "285px"
		}, 200);
	}
	
	function closeMenu(){
		$('.menu').animate({
			left: "-285px"
		}, 200);

		$('body').animate({
			left: "0px"
		}, 200);
	}

	$('.icon-menu').click(function() {
		if(menuOpen){
			closeMenu();
			menuOpen = false;
		}
		else {
			openMenu();
			menuOpen = true;
		}
	});
	
	$('.projectbottomtogglebutton').click(function() {
		var projectBottom = $(this).parents('.project').find('.projectbottom').toggle(200);
		$(this).toggleClass("rotate");
	});
});
