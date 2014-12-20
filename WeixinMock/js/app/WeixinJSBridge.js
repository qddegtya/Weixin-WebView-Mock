/*
 * 模拟微信webview的行为
 * 调试，测试时可以使用
 * 作者：Archer_小A
 */


(function(){
	
	var __wx = {};
	
	//call
	__wx.__call = function(m){
        __wx.callMethods[m]();
	}
	
	//invoke
	__wx.__invoke = function(m, args, callback){
		__wx.invokeMethods[m](args, callback);
	}
	
	//on
	__wx.__on = function(m, handler){
		__wx.__events[m](handler);
	}
	
	//invokes
	__wx.invokeMethods = {
		
		//分享到微博
		"shareWeibo": function(args, callback){
			alert(args["url"]);
		},
		
		//分享到朋友圈
		"shareTimeline": function(args, callback){
			alert(args["title"]);
		},
		
		//发送给好友
		"sendAppMessage": function(args, callback){
			alert(args["title"]);
		}
		
	}
	
	//接口
	__wx.callMethods = {
		//隐藏右上角按钮
		"hideOptionMenu": function(){
			alert("你调用了隐藏右上角按钮");
		}
	}
	
	//eventlistener
	__wx.__events = {
		
		//菜单-分享到微博
		"menu:share:weibo": function(handler){
			handler.apply(this, arguments);
		},
		
		//菜单-发送给好友
		"menu:share:appmessage": function(handler){
			handler.apply(this, arguments);
		},
		
		//菜单-分享到朋友圈
		"menu:share:timeline": function(handler){
			handler.apply(this, arguments);
		}
		
	}
	
	
	//暴露给window的WeixinJSBridge
	window.WeixinJSBridge = {
		"call": __wx.__call,
		"invoke": __wx.__invoke,
		"on": __wx.__on
	}
	
}());
