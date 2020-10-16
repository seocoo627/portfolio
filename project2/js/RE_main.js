$(function(){
	var n=0;
	var total=3;
	$(".slider_list li").eq(n).addClass("current");//가려졌던 opacity를 보이게한다.
	$(".pagination li").eq(n).addClass("current");//#fff;색상을 지정했던 current를 나타낸다

/**/
	$(".pagination li").click(function(e){//클릭시 이벤트가 활성화된다.
		e.preventDefault();//회원가입시 로그인 버튼을 누르면 상단으로 올라가는데 그러한 새로고침을 못하게 하는 이벤트다.
		n=$(this).index();//순차적으로

		sliderAction();
	});
	setInterval(function(){
		
		if(n < 2){
			n=n+1;
		}
		else{
			n=0;
		}
		sliderAction();	
	},5000);//5초씩 이동한다.
	
	function sliderAction(){
		$(".pagination li").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
		$(".slider_list li").removeClass("current");
		$(".slider_list li").eq(n).addClass("current");
	}

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

	/*footer_banner*/
	var offsetX=0;
	var flag=false;

	$("#left").click(function(){
      if(!flag){
         flag=true;
         offsetX=offsetX-200;

         $("#footer .ft_banner").animate({left : offsetX}, 500, function(){
            // console.log("왼쪽으로 이동했습니다.");
            $("#footer .ft_banner ul").append($("#footer .ft_banner li:first-child"));
            offsetX=offsetX+200;//오른쪽으로 이동시킵니다.
            $("#footer .ft_banner").css({left : offsetX});
            flag=false;
         });
      }
   });


	$("#right").click(function(){
      if(!flag){
         flag=true;
         // console.log("오른쪽으로 이동했습니다.");
         $("#footer .ft_banner ul").prepend($("#footer .ft_banner li:last-child"));
         offsetX=offsetX-200;
         $("#footer .ft_banner").css({left : offsetX});
         offsetX=offsetX+200;
         $("#footer .ft_banner").animate({left : offsetX}, 500, function(){
            flag=false;
         });
      }
   });

});

	