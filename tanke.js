/*
* @Author: Administrator
* @Date:   2017-02-11 17:01:10
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-11 23:44:58
*/

'use strict';
//坦克对象，属性：行驶方向，行驶速度
//方法：行驶，加速，改变方向
function Tank(option){
	this._init(option);
}
Tank.prototype = {
	//初始化坦克
	_init:function(option){
		this.dir =  0;
	this.speedX = 0;
	this.speedY = 1;
	this.img = new Image();
	this.img.src = "./TANK-G14D.png";
	this.pom = -1;
	this.temp = 0;//记录速度的变化
	var self = this;
	
	 this.oh = 300/4;
	 this.ow = 200/4;//坦克原始宽、高

   
    this.index = 0;
    this.ox = option.ox || 0;  //坦克在画布上的x坐标
    this.oy = option.oy || 0;  //坦克在画布上的y坐标
    

   },
	//准备阶段
	start:function(ctx){
		var self = this;
		this.img.onload = function(){
			ctx.drawImage(this, 0,0,self.ow, self.oh,self.ox,self.oy,self.ow, self.oh);
		}
		// ctx.drawImage(this.img, 0,0,this.ow, this.oh,this.ox,this.oy,this.ow, this.oh);
		
	},

	//行驶  默认往下走
	move:function(){
		var self = this;
		clearInterval(self.timer);

		self.timer = setInterval(function(){
	    			ctx.clearRect(0, 0, cas.width, cas.height);
	    			
    			if(self.pom == 1){

	    				switch(self.dir){
	    			case 0:
	    				self.speedY == 0?self.speedY = Math.abs(self.speedX):self.speedY = Math.abs(self.speedY);
	    				self.speedY++;
	    				
	    				break;
	    				case 1:
	    				self.speedX == 0?self.speedX = -Math.abs(self.speedY):self.speedX = -Math.abs(self.speedX);
	    				self.speedX--;
	    				
	    				break;
	    				case 2:
	    				self.speedX == 0?self.speedX = Math.abs(self.speedY):self.speedX = Math.abs(self.speedX);
	    				self.speedX ++;
	    				
	    				break;
	    				case 3:
	    				self.speedY == 0?self.speedY = -Math.abs(self.speedX):self.speedY = -Math.abs(self.speedY);
	    				self.speedY --;
	    				break;
	    				
	    			}
	    			self.pom = -1;
    			}else if(self.pom == 0){
	    				switch(self.dir){
	    			case 0:
	    				self.speedY == 0?self.speedY = Math.abs(self.speedX):self.speedY = Math.abs(self.speedY);
	    				self.speedY--;
	    				
	    				break;
	    				case 1:
	    				self.speedX == 0?self.speedX = -Math.abs(self.speedY):self.speedX = -Math.abs(self.speedX);
	    				self.speedX++;
	    				
	    				break;
	    				case 2:
	    				self.speedX == 0?self.speedX = Math.abs(self.speedY):self.speedX = Math.abs(self.speedX);
	    				self.speedX --;
	    				
	    				break;
	    				case 3:
	    				self.speedY == 0?self.speedY = -Math.abs(self.speedX):self.speedY = -Math.abs(self.speedY);
	    				self.speedY ++;
	    				break;
	    				
	    				
	    			}
	    			self.pom = -1;
    			}
	    			ctx.drawImage(self.img,self.ow*self.index,self.dir*self.oh,self.ow,self.oh,self.ox+=self.speedX,self.oy+=self.speedY,self.ow, self.oh);
	    			self.index++;
	    			self.index = self.index % 4;
	    			//到边界时自动掉头
	    			if(self.ox >=1000  ){
	    				self.dir = 1;
	    				self.afterChangeDir();
	    				
	    			}
	    			if( self.ox <= 0){
	    				self.dir = 2;
	    				self.afterChangeDir();
	    			}
	    			if( self.oy <= 0){
	    				self.dir = 0;
	    				self.afterChangeDir();
	    			}
	    			if( self.oy >= 600){
	    				self.dir = 3;
	    				self.afterChangeDir();
	    			}


	    		}, 50);
	},

	//改变行驶方向
	changeDir:function(dir){
		this.dir = dir;
		this.afterChangeDir();
		
		this.move();
		
	},

	//加速，减速
	changeSpeed:function(pom){
		
		this.pom = pom;
		
	},
	afterChangeDir:function(){
		switch(this.dir){
	    				case 0:
	    				
	    				this.speedY == 0?this.speedY = Math.abs(this.speedX):this.speedY = Math.abs(this.speedY);
	    				this.speedX = 0;
	    				
	    				
	    				break;
	    				case 1:
	    				
	    				
	    				this.speedX == 0?this.speedX = -Math.abs(this.speedY):this.speedX = -Math.abs(this.speedX);
	    				this.speedY = 0;
	    				break;
	    				case 2:
	    				this.speedX == 0?this.speedX = Math.abs(this.speedY):this.speedX = Math.abs(this.speedX);
	    				this.speedY = 0;
	    				break;
	    				case 3:
	    				
	    				this.speedY == 0?this.speedY = -Math.abs(this.speedX):this.speedY = -Math.abs(this.speedY);
	    				this.speedX = 0;
	    				break;
	    				
	    			}
	}
	

};