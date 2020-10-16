$(function(){
	//start swiperJS
	var activeNum=0;

	var swiper1=new Swiper("#start .swiper-container", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		on: {//이벤트를 작성합니다   //4)비디오 영역(.swiper-slide)에서는 좌우 버튼과 턴트롤을 표시하지 않습니다.
			init: function(){//초기화 이벤트입니다.
				//console.log("swiperJS가 로딩되었습니다.");
				$("#start .swiper-button-prev").hide();
				$("#start .swiper-button-next").hide();
			},
			transitionEnd: function(){
				//console.log("swiperJS페이지가 변경되었습니다.")
				activeNum=swiper1.activeIndex;

				//jQuery에서 순차적으로 노드를 읽는 방식입니다.
				//$("start .swiper-slide").each(function(i, ele){//i는 순서, ele는 대상
				if(activeNum == 0){//첫 번째 카테고리인 비디오 영역입니다 
					$("#start .swiper-button-prev").hide();
					$("#start .swiper-button-next").hide();
					video.play();
				}
				else{//비디오 영역이 아닙니다
					$("#start .swiper-button-prev").show();
					$("#start .swiper-button-next").show();
					//video.pause();
				}
			}
		},
//pagination------------------------>
		pagination: {
			el: '#start .swiper-pagination',
		}
	});
	
	

	// Start Video Control
	var video=document.getElementById("intro");
	var w, h;
	var videoW, videoH;

	video.muted=true;
	video.play();

	$(window).resize(function(){
		$("#intro").removeAttr("style");
		w=$(window).width();
		h=$(window).height();

		if(w > h){
			videoW=w;
			$("#intro").css({width:videoW});
			videoH=$("#intro").height();

			if(videoH < h){
				videoW="auto";
				videoH=h;
				$("#intro").css({width:videoW, height:videoH});
			}
		}
		else{
			videoH=h;
			$("#intro").css({height:videoH});
		}
	});
	video.addEventListener("loadeddata", function(){
		videoW=$("#intro").width();
		videoH=$("#intro").height();
		$(window).trigger("resize");
	});
	video.addEventListener("ended", function(){
		video.currentTime=0;
		video.play();
	});




	// Mobile Menu
	$(".upper .tab").click(function(e){
		e.preventDefault();
		$(".mobile_menu").addClass("active");
	});
	$(".mobile_menu .close").click(function(e){
		e.preventDefault();
		$(".mobile_menu").removeClass("active");

		$("#menu > ul > li").each(function(){
			if($(this).hasClass("active") == true){
				$(this).removeClass("active");
				$(this).find("ul").slideUp(300);
			}
		});
	});
	$("#menu > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#menu > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#menu ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else {
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});
	//#content swiper 
	var swiper1 = new Swiper('#content .store .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '#content .store .swiper-pagination',
        clickable: true,
      },
    });
	var swiper2 = new Swiper('#content .review .swiper-container', {
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        el: '#content .review .swiper-pagination',
        clickable: true,
      },
    });
});


/*
	//비디오 구현 내용입니다
	//1)비디오릐 방향에 상관없이 꽉 채워서 비디오를 표현합니다.

	var winW;
	var winH;
	var videoW;
	var videoH;
	var video=document.getElementById("intro");// <video id="intro">

	video.addEventListener("loadeddata", function(){ //비디오가 끝난시점
		var videoW=$("#intro").width();
		var videoH=$("#intro").height();
		//console.log(videoW+" : "+videoH); //비디오 원본 실제크기 1280 : 720
	});	
	

	$(window).resize(function(){
		$("#intro").removeAttr("style");//초기화됩니다.
		winW=$(window).width();
		winH=$(window).height();
		//console.log(winW+ " : " +winH);
		if(winW > winH){
			//console.log("가로방향입니다..");
			//비디오 가로 크기를 윈도우 가로 크기로 지정합니다
			$("#intro").css({width : winW});
			videoH=$("#intro").height();
			
			//iPad처럼 비디오 높이가 윈도우 세로 크기보다 작은 경우입니다.
			if(videoH < winH){
				$("#intro").css({width : "auto",height : winH});
			}
		}
		else{
			//console.log("세로방향입니다.");
			//비디오 세로 크기를 윈도우 세로 크기로 지정합니다
			$("#intro").css({height : winH});
		}
	});
	$(window).trigger("resize");
	
	//2) 자동실행이 되어야합니다
	video.muted=true;// <video src="" autoplay muted>
	video.play();

	

	//3) 비디오가 실행 완료되면, 다시 실행합니다.
	video.addEventListener("ended", function(){
		video.currenTime=0;
		video.play();
	});
	//4)비디오 영역(.swiper-slide)에서는 좌우 버튼과 턴트롤을 표시하지 않습니다. 상단에 적용
	//5)비디오 영역이 아니면 비디오를 실행하지 않고, 비디오 영역에 오면 실행합니다.
	


*/