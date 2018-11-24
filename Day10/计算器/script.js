var  oChu=document.getElementById('J_chu');
var  oCheng=document.getElementById('J_cheng');
var  oJian=document.getElementById('J_jian');
var  oJia=document.getElementById('J_jia');
var  oDengyu=document.getElementById('J_dengyu');
var  oTable=document.getElementById('J_table');
var oBox1=document.getElementById('J_box1');
 
  var aTd=oTable.getElementsByTagName('td');
   for(var i=0;i<aTd.length;i++){
   	    aTd[i].onclick=function{
   		aTd[i]=i;
   		oBox1.value=i;
   }
}
    