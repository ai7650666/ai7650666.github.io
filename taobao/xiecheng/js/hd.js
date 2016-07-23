var hh = document.getElementById('hd');
window.mySwipe = Swipe(
	hh, 
	{	
		startSlide: 0,		//轮播开始的图片编号
		auto: 3000,         //自动轮播的间隔
		continuous: true,   //是否再来一轮
		disableScroll: true,  //是否在上面阻止默认的滚轮事件，不用改
		stopPropagation: true,   //是否组织冒泡，不用改。
		callback: function(index, element) {
			//点的业务
			$(".chart ul li").eq(index).addClass("cur").siblings().removeClass("cur");
		}
	}
);


$(".chart ul li").click(
	function(){
		mySwipe.slide($(this).index(),1000);
	}
);
 