var dramaName = ["winter", "queen", "star", "masters_sun", "heir", //2013
				 "hotel","healer", "pride", "doctor", "emergency", "okay", "pinocchio", "surrounded", "king", //2014
				 "venus", "kill", "blood", "remember", "yongpai", "20", "ghost", "smell", "girlfriend", "night", "pretty", "1988", "school", //2015
				 "signal", "cheese", "sun", "jackpot"]; //2016
var dramaNameCh = ["那年冬天起風了", "奇皇后", "來自星星的你", "主君的太陽", "繼承者們", //2013
				   "酒店之王", "Healer", "傲慢與偏見", "異鄉人醫生", "急診男女", "沒關係是愛情啊", "皮諾丘", "你們被包圍了", "王的面孔", //2014
				   "我的維納斯", "Kill Me Heal Me", "Blood", "記得 兒子的戰爭", "龍八夷", "第二次二十歲", "我的鬼神君", "看見味道的少女", //2015
				   "前女友俱樂部", "夜行書生", "她很漂亮", "請回答 1988", "你是誰學校 2015", //2015
				   "信號", "奶酪陷阱", "太陽的後裔", "大發"]; //2016


$(function () {
	$("body").append("<img id='addCollectionButton' style='width: 73px; height: 73px; display: none; z-index: 5; cursor: pointer;' title='加入收藏'/>");
	var img = "basePicture/sWatermelon.png";
	var locatioin = 0.715;			// 按鈕出現在螢幕的高度
	var right = 13;					// 距離右邊 px 值
	var opacity = 0.8;				// 透明度
	var speed = 500;				// 捲動速度
	var $button = $("#addCollectionButton");
	var $body = $(document);
	var $win = $(window);
	
	$button.attr("src", img);
	$button.on({
		mouseover: function() {$button.css("opacity", 1);},
		mouseout: function() {$button.css("opacity", opacity);},
		click: function() {addCollection();}
	});
	var scrollH = $body.scrollTop();
	var winH = $win.height();
	var css = {"top": winH * locatioin + "px", "position": "fixed", "right": right, "opacity": opacity};
	$button.css(css);
	$button.fadeIn("slow");
	window.addCollection = function () {
		var name = getHTMLName();
		for(var i=0; i<dramaName.length; i++) {
			if(dramaName[i] == name) {
				localStorage.setItem(i, name);
				return;
			}
		}
	};
	function getHTMLName() {
		var path = window.location.pathname;
		var page = path.split("/").pop();
		var page2 = page.split(".");
		var name = page2[0].split("_")[1];
		if(name == "masters") name = "masters_sun";
		return name;
	}
});
