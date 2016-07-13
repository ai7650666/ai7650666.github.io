// JavaScript Document


window.onload=function(){
	
	/*作品展示1开始*/
	drag()
	function drag(){
		var oWork1 = document.querySelector('.work1');
		var oUl=oWork1.querySelector("ul")
		var aLi = oWork1.querySelectorAll('ul li');
		var bOk = false;
		for(var i=0;i<aLi.length;i++){
			aLi[i].style.WebkitTransition = '1s all ease '+(aLi.length-i)*100+'ms';
			aLi[i].style.WebkitTransform = 'rotateY('+i*360/aLi.length+'deg) translateZ(350px)';
		}
		function tranEnd(){
			aLi[0].removeEventListener('transitionend',tranEnd,false);
			bOk = true;
		}
		aLi[0].addEventListener('transitionend',tranEnd,false);
		var x = 0;
		var y = 0;
		var iSpeedX = 0;
		var iSpeedY = 0;
		var lastX = 0;
		var lastY = 0;
		var timer = null;
		oUl.onmousedown=function(ev){
			if(!bOk)return;
			
			clearInterval(timer);
			var disX = ev.pageX-y;
			var disY = ev.pageY-x;
			document.onmousemove=function(ev){
				x = ev.pageY-disY;
				y = ev.pageX-disX;
				oUl.style.WebkitTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
				iSpeedX = ev.pageX-lastX;
				iSpeedY = ev.pageY-lastY;
				
				lastX = ev.pageX;
				lastY = ev.pageY;
			};
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
				clearInterval(timer);
				timer = setInterval(function(){
					iSpeedX*=0.95;
					iSpeedY*=0.95;
					x += iSpeedY;
					y += iSpeedX;
					oUl.style.WebkitTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
					
					if(Math.abs(iSpeedX)<1)iSpeedX=0;
					if(Math.abs(iSpeedY)<1)iSpeedY=0;
					if(iSpeedX==0&&iSpeedY==0){
						clearInterval(timer);
					}
				},30);
			};
			return false;
		};
	}
/*作品展示1结束*/

	/*作品展示2开始*/
	tans()
	function tans(){
		var oWork2=document.querySelector(".work2");
		var oPrev = document.getElementById('prev');
		var oNext = document.getElementById('next');
		var aLi = oWork2.querySelectorAll('ul li');
		
		
			var aClass = [];
			var bOk = false;
			for(var i=0;i<aLi.length;i++){
				aClass[i] = aLi[i].className;
			}
			oPrev.onclick=function(){
				if(bOk)return;
				bOk = true;
				aClass.unshift(aClass.pop());
				tab();
			};
			oNext.onclick=function(){
				if(bOk)return;
				bOk = true;
				aClass.push(aClass.shift());
				tab();
			};
			function tab(){
				var oCur = document.querySelector('.cur');
				for(var i=0;i<aLi.length;i++){
					aLi[i].className = aClass[i];
				}
				function tranEnd(){
					oCur.removeEventListener('transitionend',tranEnd,false);
					bOk = false;
				}
				oCur.addEventListener('transitionend',tranEnd,false);
			}
	}
	/*作品展示2开始*/

};