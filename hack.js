Color Cube Game Hack: 
http://game.ioxapp.com/color/
dont click the different color, let javascript do it for you!
copy and paste this lines into the developer console:

//document.getElementById("room").setAttribute("onclick","cheat();");



function findOdd(arr){
	tmp = arr[0];
	for (i=0; i<arr.length;i++)
	{
		arr[i]=arr[i]-tmp;
	}
	counter=0;
	for (i=0; i<arr.length;i++)
	{
		if (arr[i]==0) 
			counter++;
		if (counter>1) break;
	}
	if (counter==1)
		return 0;
	for (i=0; i<arr.length;i++){
		if (arr[i]!=0) return i;

	}
	return -1;
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
	odd = findOdd(colors1);
	if (odd==-1) {
		odd = findOdd(colors2);
		if (odd==-1){
			odd = findOdd(colors3);
		}
	}
	box[odd].setAttribute("style","background-color: rgb(0, 0, 0);"); 

	box[odd].click();

}

window.setInterval("cheat()", 100);
