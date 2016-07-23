function hx(hxsj,jgsj) {
	var nowimg = 0;
	var timer = setInterval(youanniuyewu,jgsj);
	$("#banner").mouseenter(
		function() {
			clearInterval(timer);	
		}
	);
	$("#banner").mouseleave(
		function() {
			clearInterval(timer);	
			timer = setInterval(youanniuyewu,jgsj);
		}
	);
	$("#hx .anniu .rightbut").click(youanniuyewu);
	function youanniuyewu(){
		if(!$("#banner .tutu li").is(":animated")){
			$("#banner .tutu li").eq(nowimg).fadeOut(hxsj);
			if(nowimg < $("#banner .tutu li").length - 1){
				nowimg = nowimg + 1;
			}else{
				nowimg = 0;
			}
			$("#banner .tutu li").eq(nowimg).fadeIn(hxsj);
			$("#banner .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		}
	}
	$("#hx .anniu .leftbut").click(
		function(){
			if(!$("#banner .tutu li").is(":animated")){
				$("#banner .tutu li").eq(nowimg).fadeOut(hxsj);
				if(nowimg > 0){
					nowimg = nowimg - 1;
				}else{
					nowimg = $("#banner .tutu li").length - 1;
				}
				$("#banner .tutu li").eq(nowimg).fadeIn(hxsj);
				$("#banner .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
			}
		}
	);
	$("#banner .dianul li").click(
		function(){
			$("#banner .tutu li").eq(nowimg).fadeOut(hxsj);
			nowimg = $(this).index();	
			$("#banner .tutu li").eq(nowimg).fadeIn(hxsj);
			$("#banner .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		}
	);
}