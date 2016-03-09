$(function(){
	$("#fullpage").fullpage({
		/*================ 初始配置 ==================*/

		// Navigation
		anchors:['firstPage', 'secondPage', 'thirdPage'],
		navigation: true,
		navigationPosition: 'left',
		// Design
		sectionsColor: ['#37df5f', '#58a8ec', '#ff5ca0'],
		verticalCentered: false,
		afterLoad: function (anchorLink,index){
			// 加载不同屏时 调用并执行相应的动画函数
			switch(index){
				case 1:$(".section").css("background-color","#37df5f");break;
				case 2:break;
				case 3:break;
			}
		},
		// Onleave
		onLeave: function (index,nextIndex,direction){
			// index背景颜色渐变成nextIndex的背景颜色 获得融合效果
			switch(nextIndex){
				case 1:$(".section").css("background-color","#37df5f");break;
				case 2:$(".section").css("background-color","#58a8ec");break;
				case 3:$(".section").css("background-color","#ff5ca0");break;
			}
		},
	});
});
