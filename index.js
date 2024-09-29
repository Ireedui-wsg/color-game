// massive/array -> [] olon utga zereg hadgalna
var toonuud = [5,6,456,654,4,"hi",null,false];
console.log(toonuud);
// index -> elementiin bairshil. 0-ees ehelne
console.log(toonuud[0]); // massaviin hamgiin ehnii utga
//var item = ["pistol","sheild"];
console.log(toonuud[toonuud.length-1]);
for(var i=0; i<=toonuud.length-1;i++){
	console.log(toonuud[i]);
}
var too = [2,3,4,5,6];
console.log(too[0]);
console.log(too[too.length-1]);
console.log(too[0]*too[too.length-1]);
for(var i=0; i<=too.length-1;i++){
	if(i%2==0){
		console.log("tegsh "+too[i]);
	}else{
		console.log("sondgoi "+too[i])
	}
}
var tooo = [2,3,4,5,6,7,8,9,10,11];
var niilber=0, vrjver=1;
for(var i=0; i<=tooo.length-1;i++){
	niilber =niilber+tooo[i];
	vrjver = vrjver*tooo[i];
}
console.log("niilber:"+niilber);
console.log("vrjver:"+vrjver)
var body = document.getElementsByTagName("body")[0];
var colors = ["green","yellow","blue","red","purple"];
var i=-1;
function change(){
	i++;
	body.style.backgroundColor=colors[i];
	if(i==colors.length-1){
		i=0;
	}
}
function prev(){
	i--;
	if(i<=0){
		i=4;
	}
	body.style.backgroundColor=colors[i];
}
// setTimeout -> func-iig her hugatsaani daraa ajilhiig zaana
var s;
var autoBtn = document.querySelector(".auto");
var stopBtn = document.querySelector(".stop");
function auto(){
	i++;
	if(i>4){
		i=0;
	}
	body.style.backgroundColor=colors[i];
	s=setTimeout(auto,500);
	autoBtn.disabled = true;
	stopBtn.disabled = false;
}
function stop(){
	clearTimeout(s)
	stopBtn.disabled = true;
	autoBtn.disabled = false;
}
