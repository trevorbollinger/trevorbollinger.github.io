function physics(){
	if(keyIsDown(UP_ARROW) || keyIsDown(87)){
		controlling.yvel-=controlling.acceleration;
	} else {
		if(controlling.yvel<0){
			controlling.yvel+=controlling.acceleration;
		}
		
	}

	if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){
		controlling.yvel+=controlling.acceleration;

	} else {
		if(controlling.yvel<0){
			//controlling.yvel-=controlling.acceleration;
		}
		
	}

	if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
		controlling.xvel-=controlling.acceleration;
	} else {
		if(controlling.yvel<0){
			controlling.yvel+=controlling.acceleration;
		}
		
	}

	if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
		controlling.xvel+=controlling.acceleration;
	} else {
		if(controlling.yvel<0){
			//controlling.yvel-=controlling.acceleration;
		}
		
	}
	
}

function collide(o1,o2){
	if(o1.x+o1.width>o2.x && o1.y+o1.height>o2.y && o1.y<o2.y+o2.height && o1.x<o2.x+o2.width){
		return true;
	}
}
