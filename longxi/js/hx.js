function hx(hxsj,jgsh) {
	var nowimg = 0;
	var timer = setInterval(youanniuyewu,jgsh);
	$("#hx").mouseenter(
		function() {
			clearInterval(timer);	
		}
	);
	$("#hx").mouseleave(
		function() {
			clearInterval(timer);	
			timer = setInterval(youanniuyewu,jgsh);
		}
	);
	$("#hx .anniu .rightbut").click(youanniuyewu);
	function youanniuyewu(){
		if(!$("#hx .tuul li").is(":animated")){
			$("#hx .tuul li").eq(nowimg).fadeOut(hxsj);
			if(nowimg < $("#hx .tuul li").length - 1){
				nowimg = nowimg + 1;
			}else{
				nowimg = 0;
			}
			$("#hx .tuul li").eq(nowimg).fadeIn(hxsj);
			$("#hx .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		}
	}
	$("#hx .anniu .leftbut").click(
		function(){
			if(!$("#hx .tuul li").is(":animated")){
				$("#hx .tuul li").eq(nowimg).fadeOut(hxsj);
				if(nowimg > 0){
					nowimg = nowimg - 1;
				}else{
					nowimg = $("#hx .tuul li").length - 1;
				}
				$("#hx .tuul li").eq(nowimg).fadeIn(hxsj);
				$("#hx .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
			}
		}
	);

	$("#hx .dianul li").click(
		function(){
			$("#hx .tuul li").eq(nowimg).fadeOut(hxsj);
			nowimg = $(this).index();	
			$("#hx .tuul li").eq(nowimg).fadeIn(hxsj);
			$("#hx .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		}
	);
}