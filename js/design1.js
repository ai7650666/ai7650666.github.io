// JavaScript Document

window.onload=function(){
	/*head开始*/
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
	
	
	nav()
	function nav(){
		var oHead=document.getElementById("head");
		var oUl=oHead.children[2];
		var oBar=oUl.children[4];
		
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
				speed+=(iTarget-obj.offsetLeft)/6*(0.7);
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
	
	
/*head结束*/
/*吸顶条开始*/
var oHead=document.getElementById("head");
var oUl=oHead.children[2];
var oldT=oUl.offsetTop
window.onscroll=function(){
	var newT=document.documentElement.scrollTop||document.body.scrollTop;
	//alert(newT)
	if(newT>=oldT){
		oUl.style.top="0px";
		oUl.style.position="fixed";
		//oUl.style.right="50px";
		
	}else{
		oUl.style.position="0";
		//oUl.style.bottom='200px';
		//oUl.style.right='50px';
	}
}
/*吸顶条开始*/



/*skil开始*/

/*skil结束*/
}