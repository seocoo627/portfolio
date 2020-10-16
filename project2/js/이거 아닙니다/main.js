$(function(){
	var n=0;
	var total=3;
	$(".slider_list li").eq(n).addClass("current");//가려졌던 opacity를 보이게한다.
	$(".pagination li").eq(n).addClass("current");//#fff;색상을 지정했던 current를 나타낸다

	$(".pagination li").click(function(e){//클릭시 이벤트가 활성화된다.
		e.preventDefault();//회원가입시 로그인 버튼을 누르면 상단으로 올라가는데 그러한 새로고침을 못하게 하는 이벤트다.
		n=$(this).index;//순차적으로
		$(".pagination li").removeClass("current");//''current가 지워지면
		$(this).addClass("current");//다음 current가 (추가)발생한다.
		$(".slider_list li").removeClass("current");//슬라이더가 지워지면?
		$(".slider_list li").eq(n).addClass("current");
	});
	/*
	$(".slider .right").click(function(e){
		e.preventDefault();
		if(n < 2){
			n=n+1;
		}
		else{
			return;
		}
		
		$(".pagination li").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
		$(".slider_list li").removeClass("current");
		$(".slider_list li").eq(n).addClass("current");
	});
	$(".slider .left").click(function(e){
		e.prventDafult();

		if(n > 0){
			n=n-1;
		}
		else{
			return;
		}

		$(".pagination li").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
		$(".slider_list li").removeClass("current");
		$(".slider_list li").eq(n).addClass("current");
	});
	*/
	setInterval(function(){
		if(n < 2){
			n=n+1;
		}
		else{
			n=0;
		}
		console.log(n);	
		$(".pagination li").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
		$(".slider_list li").removeClass("current");
		$(".slider_list li").eq(n).addClass("current");
	},5000);//5초씩 이동한다.
	
	/*#gnb*/


	$("#gnb > ul > li").hover(
		function(){
				$(this).addClass("active");
				$(".upper").stop().animate({height:300}, 300);
		},
		function(){
			$(this).removeClass("active");
			$(".upper").stop().animate({height:100}, 300);
		}
	);

	var offsetX=0;

	$("#footer #left").click(function(){
		offsetX=offsetX-180;
		$("#footer .ft_banner").animate({left : offsetX}, 500);
	});
	$("#footer #right").click(function(){
		offsetX=offsetX+180;
		$("#footer .ft_banner").animate({right : offsetX}, 500);
	});
	
	
});

