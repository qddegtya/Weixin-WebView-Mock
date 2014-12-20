(function(){
	
	if(typeof window.WeixinJSBridge === "undefined"){
		if(document.addEventListener){
			document.addEventListener("WeixinJSBridgeReady", function(){
				WeixinJSBridge.call("hideOptionMenu");
			});
		}
	} else {
		WeixinJSBridge.call("hideOptionMenu");
	}
	
}());
