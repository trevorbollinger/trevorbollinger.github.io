function building(x,y,width,height, img,n){

	//actual x and y on the canvas
	this.truex = x;
	this.truey = y;
	this.width = width; 
	this.height = height;
	this.img = img;
	this.truex = x;
	this.truey = y;
	this.shittable;
	this.name = n;

	
	//offset amount that other items are moving with the world
	//subtract controlling.these from any coordinates to anchor to the world
	//also defines 0,0
	this.xc = 0;
	this.yc = 0;

	//x and y coordinates in extended map
	this.x = this.truex+this.xc; 
	this.y = this.truey+this.yc;

	this.update = function (){
		fill("grey");
		rect(this.x-controlling.xc, this.y-controlling.yc ,this.width, this.height);
		image(img, this.x-controlling.xc, this.y-controlling.yc ,this.width, this.height);
	}

}

function forklift(){
	//actual x and y coordinates on the canvas
	this.truex = ((canvas.width / 2));
	this.truey = ((canvas.height / 2));


	//offset amount that other items are moving with the world
	//subtract controlling.these from any coordinates to anchor to the world
	//also defines 0,0
	this.xc = 0;
	this.yc = 0; 

	//x and y coordinates in extended map
	this.x = this.truex+this.xc; 
	this.y = this.truey+this.yc;

	this.height = 100;
	this.width = 100;

	this.update = function(){
		fill("pink");
		rect(this.x - controlling.xc, this.y -controlling.yc, this.width, this.height);
	}

}