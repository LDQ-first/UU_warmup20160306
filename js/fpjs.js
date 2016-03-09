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
		sectionsColor: ['#ff5ca0', '#37df5f', '58a8ec'],
		verticalCentered: false,

		/*================ 各页面回调函数 ==================*/
		/*================ page1 ==================*/


	});
});
var g = function (id) {
			if (id.substr(0,1)=='.') {
				return document.getElementsByClassName(id.substr(1));
			}
			return document.getElementById(id);
		}
		function slider(){
			var universe=g('universe');
			universe.className+="_active";
			var university=g('university');
			university.className+="_active";
			var sym=g('sym');
			sym.className+="_active";
		}
window.onload = function(){
			setTimeout(function(){
				slider();
			},100);
		}		