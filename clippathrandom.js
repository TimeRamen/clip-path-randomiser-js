var p = "%";var s = " ";var c = ",";var at= "at"+s;var ps = p + s;var pp = p + ")";
var clipString;var previousElement;
var x = 0; var y = 50;
rc();

/*

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
		if((x >= 50 && y >= 0)&&(x < 100 && y < 50)){
			x++;
			y++;
		}
		if((x <= 100 && y >= 50)&&(x > 50 && y < 100)){
			x--;
			y++;
		}
		if((x <= 50 && y <= 100)&&(x >= 0 && y >= 50)){
			x--;
			y--;
		}
		if((x >= 0 && y <= 50)&&(x <=50 && y >=0)){
			x++;
			y--;
		}
	}else{
		if((x >= 50 && y >= 0)&&(x < 100 && y < 50)){
			x--;
			y--;
		}
		if((x <= 100 && y >= 50)&&(x > 50 && y < 100)){
			x++;
			y--;
		}
		if((x <= 50 && y <= 100)&&(x >= 0 && y >= 50)){
			x++;
			y++;
		}
		if((x >= 0 && y <= 50)&&(x <=50 && y >=0)){
			x--;
			y++;
		}
	}
	
	cString = "circle(" + 50 + ps + at + x + ps + y + pp;
	clipString = 'clip-path:'+cString+';';
	element.setAttribute('style',clipString);
}





			50,0
			start
	
	
	0,50			100,50
	
	
			50,100

function rRad(rnum){
	return Math.sqrt(Math.abs(50*50 - rnum*rnum))
}*/

function rRad(rnum){
	rnum = 50 - rnum;
	return (50 - Math.sqrt(50*50 - rnum*rnum));
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

function rc(element){
	if ( element === void 0 ) {
		if ( previousElement === undefined ){
			element = document.querySelector("img");
		} else {
			element = previousElement;
		}
	}
	setInterval(function(){spiralCirclePath(element)},10);
}


function clipPathRandomiser(element,clipType, clips, radius1, radius2){
	if ( element === void 0 ) {
		if ( previousElement === undefined ){
			element = document.querySelector("body :first-child");
		} else {
			element = previousElement;
		}
	}
	if (clipType === void 0) { clipType = randNum(0,3); }
	if (clips === void 0) { clips = randNum(3,100); }
	if (radius1 === void 0) { radius1 = 50; }
	if (radius2 === void 0) { radius2 = radius1; }
	var cString;
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



/*












function spiralCirclePath(element,direction){
	if ( element === void 0 ) {
		if ( previousElement === undefined ){
			element = document.querySelector("img");
		} else {
			element = previousElement;
		}
	}
	if (direction === void 0) { direction = true; }
	
	var rx = x;
	var ry = y;
	//direction = true -> clockwise
	//direction = false -> anticlockwise
	

	if(direction){
		if((x >= 50 && y >= 0)&&(x < 100 && y < 50)){
			x=rRad(rx);
			y=rRad(ry);
		}
		if((x <= 100 && y >= 50)&&(x > 50 && y < 100)){
			x=rRad(rx);
			y=rRad(ry);
		}
		if((x <= 50 && y <= 100)&&(x >= 0 && y >= 50)){
			x=rRad(rx);
			y=rRad(ry);
		}
		if((x >= 0 && y <= 50)&&(x <=50 && y >=0)){
			x=rRad(rx);
			y=rRad(ry);
		}
	}else{
		if((x >= 50 && y >= 0)&&(x < 100 && y < 50)){
			x-=rRad(rx);
			y-=rRad(ry);
		}
		if((x <= 100 && y >= 50)&&(x > 50 && y < 100)){
			x+=rRad(rx);
			y-=rRad(ry);
		}
		if((x <= 50 && y <= 100)&&(x >= 0 && y >= 50)){
			x+=rRad(rx);
			y+=rRad(ry);
		}
		if((x >= 0 && y <= 50)&&(x <=50 && y >=0)){
			x-=rRad(rx);
			y+=rRad(ry);
		}
	}
	
	cString = "circle(" + 50 + ps + at + x + ps + y + pp;
	clipString = 'clip-path:'+cString+';';
	element.setAttribute('style',clipString);
}











var clipPath;
(function (clipPath) {
    clipPath[clipPath["polygon"] = 0] = "polygon";
    clipPath[clipPath["ellipse"] = 1] = "ellipse";
    clipPath[clipPath["circle"] = 2] = "circle";
    clipPath[clipPath["inset"] = 3] = "inset";
})(clipPath || (clipPath = {}));



function clipPathRandomiser(element,cString){
	if ( element === void 0 ) {
		if ( previousElement === undefined ){
			element = document.querySelector("body :first-child");
		} else {
			element = previousElement;
		}
	}
	if ( cString === void 0 ) { cString = clipTypeString(); }
	clipString = 'clip-path:'+cString+';';
	element.setAttribute('style',clipString);
	previousElement = element;
}

function clipTypeString(clipType, clips, radius1, radius2){
	if (clipType === void 0) { clipType = randNum(0,3); }
	if (clips === void 0) { clips = randNum(3,100); }
	if (radius1 === void 0) { radius1 = 50; }
	if (radius2 === void 0) { radius2 = radius1; }
	var cString;
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
	return cString;
}


function clipTypeString(clipType, clips, radius1, radius2){
	if (clipType === void 0) { clipType = 'polygon'; }
	if (clips === void 0) { clips = randNum(3,100); }
	if (radius1 === void 0) { radius1 = 50; }
	if (radius2 === void 0) { radius2 = radius1; }
	var cString;
	switch(clipType){
		case 'polygon':
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
		case 'ellipse':
			cString = "ellipse(" + radius1 + ps + radius2 + ps + at + rn() + ps + rn() + pp;
			break;
		case 'circle':
			cString = "circle(" + radius + ps + at + rn() + ps + rn() + pp;
			break;
		case 'inset':
			cString = "inset(" + rn() + ps + rn() + ps + rn() + ps + rn() + pp;
			break;
		default:
	}
	return cString;
}
*/
