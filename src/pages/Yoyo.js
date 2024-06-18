import React, {useEffect,useRef,useState} from 'react'

export default function Yoyo() {

    useEffect(() => {
        var canvasYoyo= document.querySelector("#sceneYoyo"),
        ctx = canvasYoyo.getContext("2d", {willReadFrequently: true}),
        mouse = {x:0,y:0},
        radius = 0.5;
        
          const color = [getComputedStyle(document.documentElement).getPropertyValue('--particle-color')];

          var ww = canvasYoyo.width = window.innerWidth;
          var wh = canvasYoyo.height = window.innerHeight;

          var particleX = ww/2
          var particleY = wh/2
          
          
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

          const onMouseDown = (e) => {
            console.log('mouse down')
            particleX = e.clientX
            particleY = e.clientY
            console.log(particleX,particleY)
          }

          const onMouseUp = () => {
            console.log('mouse up')
          }
          
          function initscene(){
            ww = canvasYoyo.width = window.innerWidth;
            wh = canvasYoyo.height = window.innerHeight;
        
            ctx.clearRect(0, 0, canvasYoyo.width, canvasYoyo.height);
            ctx.globalCompositeOperation = "screen";

            ctx.fillStyle = color;
            ctx.beginPath();
      
            ctx.arc(particleX, particleY, 50, Math.PI * 2, false);
      
            ctx.fill();
          }

          function render() {
            requestAnimationFrame(render)
            ctx.clearRect(0, 0, canvasYoyo.width, canvasYoyo.height);
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(particleX, particleY, 50, Math.PI * 2, false);
      
            ctx.fill();
          };
          
          window.addEventListener("resize", initscene);
          window.addEventListener("mousemove", onMouseMove);
          window.addEventListener("touchmove", onTouchMove);
          window.addEventListener("mousedown", onMouseDown);
          window.addEventListener("mouseup", onMouseUp);
          window.addEventListener("touchend", onTouchEnd);
          initscene();
          requestAnimationFrame(render);

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