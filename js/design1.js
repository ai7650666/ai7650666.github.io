// JavaScript Document

window.onload=function(){
	/*音乐开始*/
	head()
	function head(){
		var oAudio=document.querySelector("audio");
		var oMiusic=document.querySelector(".miusic");
		var bl=true;
		oMiusic.onclick=function(){
			if(bl){
			oAudio.pause();
			}else{
				oAudio.play();
			}
			bl=!bl;
		}
	}
	/*音乐结束*/
	/*导航开始*/
	nav()
	function nav(){
		var oNav=document.getElementById("nav");
		var oUl=oNav.children[0];
		var oBar=oUl.children[5];
		
		var aLi=oUl.children;
		var timer=null;
		var l=0;
		var nowPos=0;
		for(var i=0;i<aLi.length-1;i++){
			aLi[i].onmouseover=function(){
				move(oBar,this.offsetLeft);
			};	
			aLi[i].onmouseout=function(){
				move(oBar,nowPos);
			};	
			aLi[i].onclick=function(){
				clearInterval(timer);
				oBar.style.left=this.offsetLeft+'px';
				nowPos=this.offsetLeft;
				l=nowPos;
			};	
		}
		function move(obj,iTarget){
			clearInterval(timer);
			var speed=0;
			timer=setInterval(function(){
				speed+=(iTarget-obj.offsetLeft)/5*(0.9);
				speed *= 0.7;	
				l+=speed;
				
				obj.style.left=Math.round(l)+'px';
				if(Math.abs(speed)<1) speed=0;
				
				if(obj.offsetLeft==iTarget && speed==0){
					clearInterval(timer);
					
				}
			},30);
		}
	}
	/*导航结束*/	
	/*banner播放开始*/
	banner()
	function banner(){
		var oPlay=document.getElementById('banner');
		var aHead=oPlay.children[2].children;
		var aContent=oPlay.children[1];	
		var oNext=oPlay.getElementsByClassName('next')[0];
		var oPrev=oPlay.getElementsByClassName('pre')[0];
		var now=0;
		var ready=true;
		
		aContent.innerHTML+=aContent.innerHTML;//复制一份
		aContent.style.width=aContent.children.length*1336+'px';
		
		for(var i=0;i<aHead.length;i++){
			(function(index){
				aHead[i].onclick=function(){
					now=index;
					tab();
				};	
			})(i);
		}
		
		function tab(){
			for(var i=0;i<aHead.length;i++){
				aHead[i].className='';	
			}
			if(now==aHead.length){
				aHead[0].className='active_a';	
			}else{
				aHead[now].className='active_a';		
			}
			move(aContent,{left:-now*1336},{fn:function(){
				ready=true;
				if(now==aHead.length){
					aContent.style.left=0;
					now=0;
				}
			}});
				
		}
		
		oNext.onclick=next;
		function next(){
			if(!ready) return;
			ready=false;
			now++;//计算
			
			tab();//使用
		};
		oPrev.onclick=function(){
			if(!ready) return;
			ready=false;
			if(now==0){
				aContent.style.left= -aContent.offsetWidth/2+'px';
				now=aHead.length-1;
			}else{
				now--;
			}
			
			tab();
		};
		
		var timer=setInterval(next,2000);
		oPlay.onmouseover=function(){
			clearInterval(timer);	
		};
		oPlay.onmouseout=function(){
			timer=setInterval(next,2000);
		};
	}
	/*banner播放结束*/	
	
	
/*work开始*/
	work()
	function work(){
		var arr = ["照片墙","拖拽banner","光照效果","视频","3D旋转","屏保","自动轮播图","蒙版","加载进度","小时钟","js柱状图","立方体","点击切换","放大镜","手风琴","拉钩"];
			var oShow=document.getElementById("show")
			var aLi = oShow.getElementsByTagName("li");
			var oDiv = document.getElementById("div1_a");
			for (var i = 0; i < aLi.length; i++) {
				aLi[i].index = i;
				aLi[i].onmouseover = function() {
					for (var i = 0; i < aLi.length; i++) {
						aLi[i].className = "";
					}
					this.className = "active";
					oDiv.innerHTML = '<img src="img/wk'+ (this.index + 1) +'.jpg"><div class="bg"></div><div class="txt"><a href="work'+ (this.index + 1) +'.html">'+ arr[this.index] +'</a></div>';
			};
		}
	}
/*work结束*/

/*头像闪动开始*/
   
/*头像闪动结束*/


/*skil开始*/

/*skil结束*/
}