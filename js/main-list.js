//配置路径
require.config({
	paths:{
		'jquery':'jquery-1.11.3.min',
	}
})
//代码的出入口，相当于C语言中的main函数
require(['jquery'],function($){
	$(function(){
		//nav
		function changeNav(){
			var lis = $('nav li');
			var navA = $('nav li a');
			for(let i = 0,len=lis.length;i<len;i++){
				lis[i].onmouseenter=function(){
					$(this).css('background',"url(../img/libg.jpg) no-repeat");
					for(let j=0,len=navA.length;j<len;j++){
						if(j==i){
							$(navA[j]).css('color',"#DC4F45");
						}
					}
				}
				lis[i].onmouseleave=function(){
					$(this).css('background',"#555555");
					for(let j=0,len=navA.length;j<len;j++){
						$(navA[j]).css('color',"#FFFFFF");
					}
				}
			}
		}
		changeNav();
	})
})