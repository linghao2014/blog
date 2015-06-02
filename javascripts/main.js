console.log('This would be the main JS file.');
window.onload=function(){
	var oTime=document.getElementById('time');
	var oDate=new Date();

	var oYear=oDate.getFullYear();
	var oMonth=oDate.getMonth()+1;
	var oDay=oDate.getDate();
	var oHours=oDate.getHours();
	var oMinutes=oDate.getMinutes();
	var oSeconds=oDate.getSeconds();

	//oTime.innerHTML=oYear+"-"+oMonth+"-"+oDay+" "+oHours+":"+oMinutes+":"+oSeconds;
}