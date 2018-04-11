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
		
		//轮播
		var banArr = ['../img/banner1.jpg','../img/banner2.jpg'];
		var timer = setInterval(play,3000);
		var n =0;
		function play(){
				if(n==1){
					n=0
				}else{
					n++;
				}
				$('banner img').attr('src',banArr[n]);
			}
		$('banner').mouseenter(function(){
			clearInterval(timer);
		})
	    $('banner').mouseleave(function(){
			play();
		})
	    $('.bannerLeft').mouseenter(function(){
	    	$('.bannerLeft').css('background','url(../img/butL1.png) no-repeat');
	    	$('.bannerLeft').click(function(){
	    		if(n==1){
	    			n=0;
	    			$('banner img').attr('src',banArr[n]);
	    		}else{
	    			n=1;
	    			$('banner img').attr('src',banArr[n]);
	    		}
	    	})
	    })
	    $('.bannerLeft').mouseleave(function(){
	    	$('.bannerLeft').css('background','url(../img/but1.png) no-repeat right');
	    })
	    $('.bannerRight').mouseenter(function(){
	    	$('.bannerRight').css('background','url(../img/butR1.png) no-repeat');
	    	$('.bannerRight').click(function(){
	    		if(n==1){
	    			n=0;
	    			$('banner img').attr('src',banArr[n]);
	    		}else{
	    			n=1;
	    			$('banner img').attr('src',banArr[n]);
	    		}	
	    	})
	    })
	    $('.bannerRight').mouseleave(function(){
	    	$('.bannerRight').css('background','url(../img/but1.png) no-repeat left');
	    })
	    
	    //精品
	    //cakeShow1
	    $('.cakeShow1 .cakeImg').mouseenter(function(){
	    	$('.cakeImg img').attr('src','../img/cakeImg11.jpg');
	    })
	    $('.cakeShow1 .cakeImg').mouseleave(function(){
	    	$('.cakeImg img').attr('src','../img/cakeImg1.jpg');
	    })
	    $('.cakeList1 li img').eq(0).mouseenter(function(){
	    	$('.cakeList1 li img').eq(0).attr('src','../img/cakeList11.jpg');
	    })
	    $('.cakeList1 li img').eq(0).mouseleave(function(){
	    	$('.cakeList1 li img').eq(0).attr('src','../img/cakeList1-1.jpg');
	    })
	    $('.cakeList1 li img').eq(1).mouseenter(function(){
	    	$('.cakeList1 li img').eq(1).attr('src','../img/cakeList1-22.jpg');
	    })
	    $('.cakeList1 li img').eq(1).mouseleave(function(){
	    	$('.cakeList1 li img').eq(1).attr('src','../img/cakeList1-2.jpg');
	    })
	    $('.cakeList1 li img').eq(2).mouseenter(function(){
	    	$('.cakeList1 li img').eq(2).attr('src','../img/cakeList1-33.jpg');
	    })
	    $('.cakeList1 li img').eq(2).mouseleave(function(){
	    	$('.cakeList1 li img').eq(2).attr('src','../img/cakeList1-3.jpg');
	    })
	    //cakeShow2
	    $('.cakeShow2 .cakeImg').mouseenter(function(){
	    	$('.cakeImg img').attr('src','../img/cakeImg22.jpg');
	    })
	    $('.cakeShow2 .cakeImg').mouseleave(function(){
	    	$('.cakeImg img').attr('src','../img/cakeImg2.jpg');
	    })
	    //点击轮播
	    $('.cakebutL').click(function(){
	    	if($('.cakeShow1').css('display')=='block'){
	    		$('.cakeShow1').css('display','none');
	    		$('.cakeShow2').css('display','block');
	    	}else{
	    		$('.cakeShow1').css('display','block');
	    		$('.cakeShow2').css('display','none');
	    	}
	    })
	    $('.cakebutR').click(function(){
	    	if($('.cakeShow1').css('display')=='block'){
	    		$('.cakeShow1').css('display','none');
	    		$('.cakeShow2').css('display','block');
	    	}else{
	    		$('.cakeShow1').css('display','block');
	    		$('.cakeShow2').css('display','none');
	    	}
	    })
	    //更多精品蛋糕
	    $('.cakeBottom').mouseenter(function(){
	    	$('.cakeBottom').css('opacity','1')
	    })
	    $('.cakeBottom').mouseleave(function(){
	    	$('.cakeBottom').css('opacity','0.5')
	    })
	    //全部蛋糕
	    $('.allcake').mouseenter(function(){
	    	$('.allcake').css('opacity','1')
	    })
	    $('.allcake').mouseleave(function(){
	    	$('.allcake').css('opacity','0.5')
	    })
	    
	    //广告
	    $('.ad2 span').click(function(){
	    	$('.ad2').css('display','none');
	    })
	    $('.ad1').click(function(){
	    	$('.ad2').css('display','block');
	    })
	    
	    //登录页面
	    $('.newLogin header a').eq(0).click(function(){
	    	$('.logIn').css('display','block');
	    	$('.newLogin').css('display','none');
	    })
	    $('.register a').eq(0).click(function(){
	    	$('.setting').css('display','block');
	    	$('.logInBox').css('display','block');
	    	console.log($('.register a').eq(0));
	    })
	    $('.logIn header span').click(function(){
	    	$('.setting').css('display','none');
	    	$('.logInBox').css('display','none');
	    })
	    
	    
	    //注册页面
	    $('.logIn header a').eq(1).click(function(){
	    	$('.logIn').css('display','none');
	    	$('.newLogin').css('display','block');
	    })
	    $('.newLogin header span').click(function(){
	    	$('.setting').css('display','none');
	    	$('.newLogin').css('display','none');
	    })
	})
})