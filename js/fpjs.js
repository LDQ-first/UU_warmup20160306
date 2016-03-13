/* 通用函数 */
var g = function (id) {
	if ( id.substr(0,1)=='.' ) {
		return document.getElementsByClassName(id.substr(1));
	}
	return document.getElementById(id);
}

$(function(){
	$("#fullpage").fullpage({
		/*================ 初始配置 ==================*/

		// Navigation
		anchors:['Page1', 'Page2', 'Page3'],
		navigation: true,
		navigationPosition: 'left',
		// Scrolling
		scrollingSpeed: 500,
		// Design
		sectionsColor: ['#ff5ca0', '#37df5f', '#37aedf'],
		verticalCentered: false,
		menu:"#menu",
		
		// Afterload
		afterLoad: function (anchorLink,index){
			// 加载不同屏时 调用并执行相应的动画函数
			switch(index){
				case 1: // 1.0 index背景颜色渐变成nextIndex的背景颜色 获得融合效果
						$(".section").css("background-color","#ff5ca0");

						flag=0;
						setTimeout(function(){
						slider();
						},10);
						break;
				case 2: b = 0;
						c=1;
						setTimeout(function(){
							ray();
						},1000);
						break;
				case 3: /*在第三屏时，设置鼠标hover效果*/
				 $(function(){
							/*$(".team>h2,.work>h2").mouseover(function() {
							$(this).next("ul").show();
							});*/		
							$(".team>h2").mouseover(function() {
								$(this).next("ul").show(500);
								$(".work>h2").next("ul").hide(500);
							});	
							$(".work>h2").mouseover(function() {
								$(this).next("ul").show(500);
								$(".team>h2").next("ul").hide(500);
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
				case 3:$(".section").css("background-color","#37aedf");break;
			}
			// 离开不同屏时 调用并执行相应的函数 重置已被改变的样式
			switch(index){
				case 1: flag=1;
						setTimeout(function(){
						slider();
						},100);
						break;
				case 2:b = 1;
						c=0;
						setTimeout(function(){
							ray1();
						},0);
						break;
				case 3: /*离开第三屏，隐藏ul*/
				$(".team>h2,.work>h2").next("ul").hide();
						break;
			}
		},

	});
});
/*=========== page1 ============*/

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
		sp.className=sp.className.replace(/ s1-p-active/,"");
	}

}

/*=========== page2 ============*/
var b;
var c;
var tid;
function ray(){
	$('#team,#intro').animate({opacity: 1}, 1800);
}
function ray1(){
	$('#team,#intro').animate({opacity: 0}, 1800);
}

$('.intro_box').bind('mouseover',function(){$(this).css({'width':'231px','height':'275px'});})
			   .bind('mouseout', function(){$(this).css({'width':'210px','height':'250px'});});