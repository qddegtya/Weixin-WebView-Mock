(function(){
	if(typeof window.WeixinJSBridge === "undefined"){
		console.log("WeixinJSBridge is not ready!!!");
	} else {
		//定义WeixinJSBridgeReady事件
		var WeixinJSBridgeReadyEvent = new CustomEvent("WeixinJSBridgeReady", {
			event: {
				origin: WeixinJSBridge
			},
		});
		
		//触发WeixinJSBridgeReady事件
		document.dispatchEvent(WeixinJSBridgeReadyEvent);
	}
}());
