$(function(){
	$("#fullpage").fullpage({
		/*================ 初始配置 ==================*/

		// Navigation
		anchors:['firstPage', 'secondPage', 'thirdPage'],
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['开启新旅程', '团队介绍','分工&制作说明'],
		// Scrolling
		scrollingSpeed: 500,
		// Design
		sectionsColor: ['#ff5ca0', '#37df5f', '#58a8ec'],
		verticalCentered: false,

		// Afterload
		afterLoad: function (anchorLink,index){
			// 加载不同屏时 调用并执行相应的动画函数
			switch(index){
				case 1: // 1.0 index背景颜色渐变成nextIndex的背景颜色 获得融合效果
						flag=0;
						$(".section").css("background-color","#ff5ca0");
						setTimeout(function(){
						slider();
						},100);
						break;
				case 2: 
						break;
				case 3: /*在第三屏时，设置鼠标hover效果*/
				 $(function(){
							$(".team>h2,.work>h2").mouseover(function() {
							$(this).next("ul").show();
							});						
						});
						break;
			}
		},
		// Onleave
		onLeave: function (index,nextIndex,direction){
			// 1.1 index背景颜色渐变成nextIndex的背景颜色 获得融合效果
			switch(nextIndex){
				case 1:$(".section").css("background-color","#ff5ca0");break;
				case 2:$(".section").css("background-color","#37df5f");break;
				case 3:$(".section").css("background-color","#58a8ec");break;
			}
			// 离开不同屏时 调用并执行相应的函数 重置已被改变的样式
			switch(index){
				case 1: flag=1;
						setTimeout(function(){
						slider();
						},100);
						break;
				case 2: 
						break;
				case 3: /*离开第三屏，隐藏ul*/
				$(".team>h2,.work>h2").next("ul").hide();
						break;
			}
		},

	});
});
/*=========== page1 ============*/
var g = function (id) {
	return document.getElementById(id);
}
var flag;
function slider(){
	var sym=g('sym0');
	var sp=g('s1-pmove');
	if(flag==0){
		sym.className+=" sym_active";
		setTimeout(function() {sp.className+=" s1-p-active";},300);
		
	}
	else{
		sym.className=sym.className.replace(/ sym_active/,"");
		setTimeout(function() {sp.className=sp.className.replace(/ s1-p-active/,"");},300);
	}

}