/*
 * 定义utils集
 */

(function(){
	
	var utils= {};
	
	//定义工具集
	utils.findEle = function(ele){
		return document.querySelector(ele);
	};
	
	//暴露外部接口
	window.u = {
		"$": utils.findEle
	}
	
}());
