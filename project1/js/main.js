$(function(){
	var swiper1 = new Swiper('#header .swiper-container', {
	  navigation: {
		nextEl: '#header .swiper-button-next',
		prevEl: '#header .swiper-button-prev',
	  },
	  pagination: {
		el: '#header .swiper-pagination',
	  },
		on: {
			init: function(){
				// console.log("start!!");
				descriptionFunction();
			},
			transitionEnd: function(){
				// console.log("transition end!!");
				descriptionFunction()
			}
		}
	});
	function descriptionFunction(){
		$("#header .swiper-slide").each(function(){
			if($(this).hasClass("swiper-slide-active")){
				//console.log("this");
				$(this).find(".description").fadeIn(300);
			}
			else{
				$(this).find(".description").fadeOut(300);
			}
		});
	}
	
	$("#gnb > ul > li").hover(
		function(){
			$("#gnb").addClass("active");
			$(".menu_shadow").addClass("active");
			
		},
		function(){
			$("#gnb").removeClass("active");
			$(".menu_shadow").removeClass("active");
		}
	);
	/*
	$("#gnb > ul > li").hover(
		function(){
			$(this).parent().parent().stop().animate({height:202}, 400);
			$(this).parents("gnb").next(".menu_shadow").stop().animate({height:162}, 400);
		},
		function(){
			$(this).parent().parent().stop().animate({height:40}, 400);
			$(this).parents("gnb").next(".menu_shadow").stop().animate({height:0}, 400);
		}
	);
	*/
});