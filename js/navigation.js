//Teehan Lax Navigation JS
(function(){
	
	var preScroll = 0, //previous scroll position
		navOffset = 64, //height of menu (once scroll passed it, nav is hidden)
		detachPoint = 550, //point of detach(after scroll passed it, nav is fixed)
		hideShowOffset = 50, //scrolling value after which triggers hide/show nav
		scrolled = false;

	var $nav = $("nav"),
		$menuTrigger = $("#menuTrigger"),
		$menu = $("#menu"),
		$content = $("#content");

	$(window).scroll(function(){
		scrolled = true;
		if($nav.hasClass("visible")){
			return;
		}else{
			var currentScroll = $(this).scrollTop(),
				scrollDis = currentScroll - preScroll,
				scrollDiff = Math.abs(scrollDis);
			//console.log(currentScroll);
			if(scrollDis < 0){
				$nav.removeClass("invisible").addClass("fixed");
				// window.setTimeout(function(){
				// 	$nav.removeClass("fixed").addClass("invisible");
				// },3000);
			}else{
				if(scrollDis > hideShowOffset){
					$nav.removeClass("fixed").addClass("invisible");
				}
			}
			if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
				$nav.removeClass("invisible").addClass("fixed");
			}
			preScroll = currentScroll;
		}
	});

	$menuTrigger.click(function(ev){
		// ev.stopPropagation();
		if($nav.hasClass("expanded")){
			toggleNav("hide");
			$menuTrigger.removeClass("active");
		}else{
			toggleNav("show");
			$menuTrigger.addClass("active");
		}
	});


	$("body").keydown(function(ev){
		if($nav.hasClass("expanded") && (ev.keyCode === 27 || ev.keyCode === 77)){
			toggleNav("false");
			ev.preventDefault();
		}else{
			return;
		}
	});

	//show/hide menu 
	function toggleNav(flag){
		if(flag === "show"){
			//show the menu
			$content.addClass("blurred");
			// window.setTimeout(function(){  //fireFox hack, hide the scrollbar when the menu animation is done
			// 	$("body").addClass("no-scroll");
			// },50);
			$nav.removeClass("invisible").addClass("expanded");
			$menu.removeClass("hide");
			
			
		}else{
			//hide menu
			
			$nav.removeClass("expanded");
			$menu.addClass("hide");
			$content.removeClass("blurred");
			// window.setTimeout(function(){
			// 	$("body").removeClass("no-scroll");
			// },50);
		}

	}
}())