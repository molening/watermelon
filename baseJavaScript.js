$(function(){
	$("#slice1").hover(function(){
		$(this).stop(true,false).animate({top: 190}, 1200, "easeOutBounce");
	},function(){
		$(this).stop(true,false).animate({top: -90}, 1500, "easeOutBounce");
	});
	$("#slice2").hover(function(){
		$(this).stop(true,false).animate({top: 190}, 1200, "easeOutBounce");
	}, function(){
		$(this).stop(true,false).animate({top: -90}, 1500, "easeOutBounce");
	});
});
//alarm
$(function () {
	$("body").append("<img id='alarm' style='display: none; z-index: 5; cursor: pointer;' title='alarm'/>");
	var img = "basePicture/clockShadow.png";
	var locatioin = 0.73;			// 按鈕出現在螢幕的高度
	var right = 15;					// 距離右邊 px 值
	var opacity = 0.8;				// 透明度
	var speed = 500;				// 捲動速度
	var $button = $("#alarm");
	var $body = $(document);
	var $win = $(window);
	
	$button.attr("src", img);
	$button.on({
		mouseover: function() {$button.css("opacity", 1);},
		mouseout: function() {$button.css("opacity", opacity);},
		click: function() {$("html, body").animate({scrollTop: 0}, speed);}
	});	
});
//back
$(function () {
	$("body").append("<img id='goTopButton' style='width: 71px; height: 71px; display: none; z-index: 5; cursor: pointer;' title='回到頂端'/>");
	var img = "basePicture/back.png";
	var locatioin = 0.85;			// 按鈕出現在螢幕的高度
	var right = 12;					// 距離右邊 px 值
	var opacity = 0.3;				// 透明度
	var speed = 1600;				// 捲動速度
	var $button = $("#goTopButton");
	var $body = $(document);
	var $win = $(window);
	
	$button.attr("src", img);
	$button.on({
		mouseover: function() {$button.css("opacity", 1);},
		mouseout: function() {$button.css("opacity", opacity);},
		click: function() {$("html, body").animate({scrollTop: 0}, speed);}
	});
	window.goTopMove = function () {
		var scrollH = $body.scrollTop();
		var winH = $win.height();
		var css = {"top": winH * locatioin + "px", "position": "fixed", "right": right, "opacity": opacity};
		
		if(scrollH > 20) {
			$button.css(css);
			$button.fadeIn("slow");
		}
		else $button.fadeOut("slow");
		
	};
	$win.on({
		scroll: function() {goTopMove();},
		resize: function() {goTopMove();}
	});
});
function getHTMLName() {
	var path = window.location.pathname;
	var page = path.split("/").pop();
	var page2 = page.split(".");
	var name = page2[0].split("_")[1];
	if(name == "masters") name = "masters_sun";
	return name;
}
//算總高度
$(function(){
	var containerH = $('#container').height();
	var centerH = $('#center').height();
	var documentH = $(document).height();
	
	console.log(containerH);
	console.log(centerH);
	console.log($(document).height());
	
	if(containerH + centerH < documentH) {console.log("in");
		var temp = documentH - containerH - centerH;
		if('home' == getHTMLName()) 
			$("<div style = 'float:left; width: 100%; height: " + temp/2 + "px;'></div>").insertBefore("#footer", this);
		else $("<div style = 'float:left; width: 100%; height: " + temp + "px;'></div>").insertBefore("#footer", this);
		
		containerH = $('#container').height();
		centerH = $('#center').height();
		documentH = $(document).height();
		console.log(containerH);
		console.log(centerH);
		console.log($(document).height());
	}
});

   