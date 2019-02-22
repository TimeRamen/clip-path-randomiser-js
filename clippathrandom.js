var p = "%";var s = " ";var c = ",";var at= "at"+s;var ps = p + s;var pp = p + ")";
var clipString;var previousElement;var cString;
var x = 0; var y = 50; var arr = [-1,1];
rc();


//testing function
function rc(element){
	if ( element === void 0 ) {
		if ( previousElement === undefined ){
			element = document.querySelector("img");
		} else {
			element = previousElement;
		}
	}
	//setInterval(function(){spiralCirclePath(element)},10);
	setInterval(function(){spiralRandom(element)},100);
	//setInterval(function(){clipPathRandomiser(element,randNum(0,4),100 ,50, 20)},100)
}

function rRad(rnum){
	rnum = 50 - rnum;
	return (50 - Math.sqrt(50*50 - rnum*rnum));
}

function spiralRandom(element){
	if ( element === void 0 ) {
		if ( previousElement === undefined ){
			element = document.querySelector("body :first-child");
		} else {
			element = previousElement;
		}
	}
	x = 50 + randNum(1,10)*arr[randNum(0,2)];
	y = 50 + randNum(1,10)*arr[randNum(0,2)];
	cString = "circle(" + 50 + ps + at + x + ps + y + pp;
	clipString = 'clip-path:'+cString+';';
	element.setAttribute('style',clipString);
	
}

function spiralCirclePath(element,direction){
	if ( element === void 0 ) {
		if ( previousElement === undefined ){
			element = document.querySelector("body :first-child");
		} else {
			element = previousElement;
		}
	}
	if (direction === void 0) { direction = true; }
	
	//direction = true -> clockwise
	//direction = false -> anticlockwise

	if(direction){
		if(y >= 0 && y <= 50 && x<100){
			x++;
			y=rRad(x);
		}
		else if(y <= 100 && y >= 50){
			x--;
			y=100-rRad(x);
		}
	}else{
		if(y >= 0&& y <= 50){
			x--;
			y=100-rRad(x);
		}
		else if(y >= 50 && y <= 100){
			x++;
			y=rRad(x);
		}
	}
	
	cString = "circle(" + 50 + ps + at + x + ps + y + pp;
	clipString = 'clip-path:'+cString+';';
	element.setAttribute('style',clipString);
}


function clipPathRandomiser(element,clipType, clips, radius1, radius2){
	if ( element === void 0 ) {
		if ( previousElement === undefined ){
			element = document.querySelector("body :first-child");
		} else {
			element = previousElement;
		}
	}
	if (clipType === void 0) { clipType = randNum(0,4); }
	if (clips === void 0) { clips = randNum(3,100); }
	if (radius1 === void 0) { radius1 = 50; }
	if (radius2 === void 0) { radius2 = radius1; }
	switch(clipType){
		case 0:
			cString = "polygon(";var k = 0;
			if(clips > 2){
				for(i=0;i<clips*2;i++){
					cString += rn() + ps;
					k++;
					if((k == 2)&&(i != (clips*2)-1)){
						k = 0;
						cString += c +s;
					}
				}
				cString += ")"
			}
			break;
		case 1:
			cString = "ellipse(" + radius1 + ps + radius2 + ps + at + rn() + ps + rn() + pp;
			break;
		case 2:
			cString = "circle(" + radius1 + ps + at + rn() + ps + rn() + pp;
			break;
		case 3:
			cString = "inset(" + rn() + ps + rn() + ps + rn() + ps + rn() + pp;
			break;
		default:
	}
	clipString = 'clip-path:'+cString+';';
	element.setAttribute('style',clipString);
	previousElement = element;
	return cString;
}

function randNum(start,end){
	return Math.floor(Math.random() * (end-start))+start;
}
function numToString(num) {
    return num.toString();
}
function rn(){
	return numToString(randNum(0,100));
}