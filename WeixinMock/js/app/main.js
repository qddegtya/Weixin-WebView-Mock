/*
 * main.js
 * 主要入口
 */

(function(){
	
	//plus api 环境就绪
	document.addEventListener("plusready", function(){
		
		//定义webview样式
		var wxMockStyle = {
			top: "47px",
			bottom: "0px"
		};
		
		//toast样式
		var toastStyle = {
			align: "center",
			verticalAlign: "center",
			duration: "3s"
		};
		
		//初始化一个webview
		var wxMockWebView = plus.webview.create("http://10.10.0.114:7077", "wxmock", wxMockStyle);
		
		//预加载与注入
		wxMockWebView.appendJsFile("js/app/WeixinJSBridge.js");
		wxMockWebView.appendJsFile("js/app/checkwx.js");
		
		//显示
		wxMockWebView.show();
		
		//开始加载时注入
		wxMockWebView.addEventListener("loading", function(){
			
		});
		
		//事件监听
		wxMockWebView.addEventListener("loaded", function(event){
			methods.showToast("操作完成", toastStyle);
		});
		
		//定义方法集合
		var methods = {};
		
		methods.openUrl = function(url){
			wxMockWebView.loadURL(url);
		};
		
		//toast方法
		methods.showToast = function(m, o){
			plus.nativeUI.toast(m, o);
		}
		
		//键盘事件监听
		methods.keyListener = function(t, c, callback){
			plus.key.addEventListener(t, function(k){
				if(k.keyCode === (c || k.keyCode)){
					callback.apply(this, arguments);
				}
			});
		};
		
		//check
		methods.checkUrl = function(url){
			return /^(https|http):\/\/.*$/g.test(url);
		}
		
		//事件定义
		if(window.u){
			var __url;
			u.$("#gourl").onclick = function(event){
				if(methods.checkUrl(__url)){
					methods.openUrl(__url);
				} else {
					methods.showToast("地址不合法", toastStyle);
				}
			};
			
			u.$("#mockurl").onchange = function(event){
				__url = this.value;
				if(methods.checkUrl(__url)){
					methods.openUrl(__url);
				} else {
					methods.showToast("地址不合法", toastStyle);
				}
			};
		}
	});	
}());
