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

	});
});
