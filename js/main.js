$(function(){
var goPage;
var topPage;
var n=0;
var t=0;

	$("#menu .nav a").click(function(e){
		e.preventDefault();
		goPage=$(this).attr("href");
		//console.log("goPage : "+goPage);
		topPos=$(goPage).offset().top;
		//console.log("topPage : "+topPage);
		$("html, body").animate({scrollTop:topPos}, 800);
	});
	
	$("#menu .fixed_nav a").click(function(e){
		e.preventDefault();
		goPage=$(this).attr("href");
		//console.log("goPage : ");
		topPos=$(goPage).offset().top;
		$("html, body").animate({scrollTop:topPos}, 800);
	});

	$(window).scroll(function(){
		t=$(this).scrollTop();
		//console.log("t : "+t);

	if(t < $("#area2").offset().top){
		n=0;
	}
	else if(t < $("#area3").offset().top){
		n=1;
	}
	else if(t < $("#area4").offset().top){
		n=2;
	}
	else if(t < $("#area5").offset().top){
		n=3;
	//}
	//else if(t < $("#area5").offset().top){
	//	n=4;
	
	
		if(t == Math.ceil($(document).height()-$(window).height())){
			n=4;
		}
	}
	else{
		n=4;
	}

	if(t > 80){
		if($("#menu .fixed_nav").hasClass("show") == false){
			$("#menu .fixed_nav").addClass("show");
		}
    }
	else{//80보다 같거나 작다.
        $("#menu .fixed_nav").removeClass("show");
	}
	
	$("#menu .nav a").removeClass("on");
    $("#menu .nav li").eq(n).find("a").addClass("on");
    $("#menu .fixed_nav a").removeClass("on");
    $("#menu .fixed_nav li").eq(n).find("a").addClass("on");

	});
	$(window).trigger("scroll");
});