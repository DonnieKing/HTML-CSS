var oIntro = document.getElementById('J_intro');
var aDiv = oIntro.getElementsByTagName('div');

for(var i=0;i<aDiv.length;i++)
{
	aDiv[i].onmouseover = movedown;
	aDiv[i].onmouseout = moveup;
}

// 定义一个鼠标移入函数
function movedown(){
	this.className = "item active";
}

// 定义一个鼠标移出函数
function moveup(){
	this.className = "item unactive";
}			



// var oIntro=document.getElementById('intro');
// var aDiv=oIntro.getElementsByTagName('div');
// for(var i=0;i<aDiv.length;i++){
// 	aDiv[i].onmouseover=function{
// 		 this.className="item active";
// 	}
// 	aDiv[i].onmouseout=function(){
// 		this.className="item unactive";
// 	}
// }