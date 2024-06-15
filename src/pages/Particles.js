//https://www.electronjs.org/docs/latest/api/screen

import React from 'react'
import { useEffect, useRef } from "react";

export default function Particles(){

    useEffect(() => {
        var canvas = document.querySelector("#scene"),
        ctx = canvas.getContext("2d", {willReadFrequently: true}),
        particles = [],
        amount = 0,
        mouse = {x:0,y:0},
        // mouse = {x:100,y:10},
        radius = 0.5;
        

        var colors= ["#6b106a",
          "#670e6b",
          "#640d6b",
          "#600b6c",
          "#5b0a6d", 
          "#57096d",
          "#57096d",
          "#52096e",
          "#52096e",
          "#4e086f",
          "#480870",
          "#430970",
          "#3d0971"]

          var color = ["#ffffff"];
        
          var displayText = "O*"
          
          var ww = canvas.width = window.innerWidth;
          var wh = canvas.height = window.innerHeight;
          
          class Particle {
            constructor(x, y) {
              this.x = x;
              this.y = y;
              this.dest = {
                x: x,
                y: y
              };
        
            //   this.r = ww / 600;
            // this.r = ww/50
            this.r = ww/100
        
              this.vx = 0;
              this.vy = 0;
        
              this.accX = 0;
              this.accY = 0;
              this.friction = 0.7;
        
              this.color = color;
            }

            render() {
        
        
              this.accX = (this.dest.x - this.x) / 100;
              this.accY = (this.dest.y - this.y) / 100;
              this.vx += this.accX;
              this.vy += this.accY;
              this.vx *= this.friction;
              this.vy *= this.friction;
        
              this.x += this.vx;
              this.y += this.vy;
        
              ctx.fillStyle = this.color;
              ctx.beginPath();
        
              ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
        
              ctx.fill();
        
              var a = this.x - mouse.x;
              var b = this.y - mouse.y;
        
              var distance = Math.sqrt(a * a + b * b);
        
              if (distance < (radius * 60)) {
                this.accX = (this.x - mouse.x);
                this.accY = (this.y - mouse.y);
        
                this.vx += this.accX;
                this.vy += this.accY;
              }
              if (distance > (radius * 250)) {
                this.accX = (this.dest.x - this.x) / 10;
                this.accY = (this.dest.y - this.y) / 10;
                this.vx += this.accX;
                this.vy += this.accY;
              }
        
            }
          }
          
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
          
          function initScene(){
            ww = canvas.width = window.innerWidth;
            wh = canvas.height = window.innerHeight;
        
            if (ww < 500) {
              ctx.font = "400px Arial";
            }
        
            else {
          
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "400px Arial";
            }
        
            ctx.textAlign = "center";
            ctx.fillText(displayText, ww/2, wh/1.2);
          
            var data  = ctx.getImageData(0, 0, ww, wh).data;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
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

          function render() {
            requestAnimationFrame(render)
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < amount; i++) {
              particles[i].render();
            }
          };
          
          window.addEventListener("resize", initScene);
          window.addEventListener("mousemove", onMouseMove);
          window.addEventListener("touchmove", onTouchMove);
          window.addEventListener("mousedown", onMouseDown);
          window.addEventListener("mouseup", onMouseUp);
          window.addEventListener("touchend", onTouchEnd);
          initScene();
          requestAnimationFrame(render);

          return () => {
            window.removeEventListener("resize", initScene);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchend", onTouchEnd);
          };
        }, []);
        
          return (
            <div>
            <h1> Particles </h1>
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
                    id="scene">
                    </canvas>
        </div>    
          );
}
