//document.getElementById("room").setAttribute("onclick","cheat();");


Color Cube Game Hack: 
http://game.ioxapp.com/color/
dont click the different color, let javascript do it for you!
copy and paste this lines into the developer console:

function findOdd(arr){
	tmp = arr[0];
	for (i=0; i<arr.length;i++)
	{
		console.log(i);
		arr[i]=arr[i]-tmp;
	}
	console.log(arr);
	counter=0;
	for (i=0; i<arr.length;i++)
	{
		if (arr[i]==0) 
			counter++;
	}
	if (counter==1)
		return 0;
	for (i=0; i<arr.length;i++){
		if (arr[i]!=0) return i;

	}
}
function cheat(){
	box = document.getElementById("box").childNodes
	i=0
	length = box.length
	colors1 = []
	colors2 = []
	colors3 = []
	for (i=0; i<length; i++){
		a = box[i].getAttribute("style").substring(22).split(')')[0].split(',')
		colors1.push(a[0])
		colors2.push(a[1])
		colors3.push(a[2])
	}
	//box[findOdd(colors1)].setAttribute("style","background-color: rgb(0, 0, 0);"); 
	box[findOdd(colors1)].click();

}

window.setInterval("cheat()", 3000);
