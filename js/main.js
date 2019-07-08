	function changeTab(s) {
		$('.container .row').find('div.tab').each(function(){
		console.log($( this ).attr("id"));
			$( this ).fadeOut(100);
		});
		$('.container .head-navbar').find('a').each(function(){
		console.log($( this ).attr("class"));
			$( this ).removeClass("active");
		});
		$("." + s).addClass("active");
		setTimeout(function(){ $("#" + s).fadeIn(100); }, 100);
		
	}