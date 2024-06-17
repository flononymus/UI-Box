import React, {useEffect,useRef,useState} from 'react'

export default function Yoyo() {

    useEffect(() => {
        var canvasYoyo= document.querySelector("#sceneYoyo"),
        ctx = canvasYoyo.getContext("2d", {willReadFrequently: true}),
        particles = [],
        amount = 0,
        mouse = {x:0,y:0},
        radius = 0.5;
        
          const color = [getComputedStyle(document.documentElement).getPropertyValue('--particle-color')];

          var ww = canvasYoyo.width = window.innerWidth;
          var wh = canvasYoyo.height = window.innerHeight;
          
        //   class Particle {
        //     constructor(x, y) {
        //       this.x = x;
        //       this.y = y;
        //       this.dest = {
        //         x: x,
        //         y: y
        //       };
        
        //         this.r = ww/100
        
        //       this.vx = 0;
        //       this.vy = 0;
        
        //       this.accX = 0;
        //       this.accY = 0;
        //       this.friction = 0.7;
        
        //       this.color = color;
        //     }

        //     render() {
        
        
        //       this.accX = (this.dest.x - this.x) / 100;
        //       this.accY = (this.dest.y - this.y) / 100;
        //       this.vx += this.accX;
        //       this.vy += this.accY;
        //       this.vx *= this.friction;
        //       this.vy *= this.friction;
        
        //       this.x += this.vx;
        //       this.y += this.vy;
        
        //       ctx.fillStyle = this.color;
        //       ctx.beginPath();
        
        //       ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
        
        //       ctx.fill();
        
        //       var a = this.x - mouse.x;
        //       var b = this.y - mouse.y;
        
        //       var distance = Math.sqrt(a * a + b * b);
        
        //       if (distance < (radius * 60)) {
        //         this.accX = (this.x - mouse.x);
        //         this.accY = (this.y - mouse.y);
        
        //         this.vx += this.accX;
        //         this.vy += this.accY;
        //       }
        //       if (distance > (radius * 250)) {
        //         this.accX = (this.dest.x - this.x) / 10;
        //         this.accY = (this.dest.y - this.y) / 10;
        //         this.vx += this.accX;
        //         this.vy += this.accY;
        //       }
        
        //     }
        //   }
          
          const onMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
          }
        
            const onTouchMove = (e) => {
            if(e.touches.length > 0 ){
              mouse.x = e.touches[0].clientX;
              mouse.y = e.touches[0].clientY;
            }
          }

          const onTouchEnd = (e) => {
          mouse.x = -9999;
          mouse.y = -9999;
          }

          const onMouseDown = () => {
            radius = 2;
          }

          const onMouseUp = () => {
              radius = 0.5;
          }
          
          function initscene(){
            ww = canvasYoyo.width = window.innerWidth;
            wh = canvasYoyo.height = window.innerHeight;
        
            if (ww < 500) {
              ctx.font = "400px Arial";
            }
        
            else {
          
            ctx.clearRect(0, 0, canvasYoyo.width, canvasYoyo.height);
            ctx.font = "400px Arial";
            }
        
            ctx.textAlign = "center";
          
            var data  = ctx.getImageData(0, 0, ww, wh).data;
            ctx.clearRect(0, 0, canvasYoyo.width, canvasYoyo.height);
            ctx.globalCompositeOperation = "screen";
        
            var divider = 50
          
            particles = [];
            for(var i=0;i<ww;i+=Math.round(ww/divider)){
              for(var j=0;j<wh;j+=Math.round(ww/divider)){
                if(data[((i + j*ww)*4) + 3] >divider){
                  particles.push(new Particle(i,j));
                }
              }
            }
            amount = particles.length;
          
          }

        //   function render() {
        //     requestAnimationFrame(render)
        //     ctx.clearRect(0, 0, canvasYoyo.width, canvasYoyo.height);
        //     for (var i = 0; i < amount; i++) {
        //       particles[i].render();
        //     }
        //   };
          
          window.addEventListener("resize", initscene);
          window.addEventListener("mousemove", onMouseMove);
          window.addEventListener("touchmove", onTouchMove);
          window.addEventListener("mousedown", onMouseDown);
          window.addEventListener("mouseup", onMouseUp);
          window.addEventListener("touchend", onTouchEnd);
          initscene();
        //   requestAnimationFrame(render);

          return () => {
            window.removeEventListener("resize", initscene);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchend", onTouchEnd);
          };
        }, []);

    return(
        <div>
            <h1> Yoyo </h1>
            <canvas style={{
                    width:window.innerWidth, 
                    height:window.innerHeight,
                    position:'absolute',
                    top:0,
                    left:0,
                    width:'100vw',
                    height:'100vh',
                    overflow:'hidden',
                    zIndex:-10
                    }} 
                    id="sceneYoyo">
            </canvas>
        </div>    
    )
}