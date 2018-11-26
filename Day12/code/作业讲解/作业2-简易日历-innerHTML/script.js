var aActivity = [
					"快过年了",
					"过年ing",
					"快开学了",
					"愚人节",
					"劳动节",
					"儿童节",
					"建党节",
					"建军节",
					"教师节",
					"国庆节",
					"11.11",
					"圣诞节"
			];

var oTab = document.getElementById('tab');

var oUl = oTab.getElementsByTagName('ul')[0];

var aLi = oUl.getElementsByTagName('li');

var oDiv = oTab.getElementsByTagName('div')[0];

// console.log(aLi.length);


for(var i=0;i<aLi.length;i++)
{
	// console.log(i);
	aLi[i].index = i;
	aLi[i].onmouseover = function(){
		// console.log(i);
		for(var j=0;j<aLi.length;j++){
			aLi[j].className = "";
		}

		this.className = "active";

		oDiv.innerHTML = "<h2>" + (this.index+1) + "月活动</h2><p>" + aActivity[this.index] + "</p>";
	}
}

