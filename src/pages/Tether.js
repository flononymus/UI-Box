import React, { useEffect } from 'react';


export default function Tether() {

    let initSceneCalls = 0;

    useEffect(() => {
        const canvasTether = document.querySelector("#sceneTether");
        const ctx = canvasTether.getContext("2d", { willReadFrequently: true });
        const mouse = { x: 0, y: 0 };
        const radius = 50;
        let isDragging = false;

        let ww = window.innerWidth;
        let wh = window.innerHeight;
        let centerX = ww / 2;
        let centerY = wh / 2;
        let particleX = centerX;
        let particleY = centerY;
        let vx = 0; 
        let vy = 0; 
        const damping = 0.9; 
        const stiffness = 0.1; 
        const color = getComputedStyle(document.documentElement).getPropertyValue('--particle-color') || 'black';

        
        const onMouseMove = (e) => {
            if (isDragging) {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
                particleX = mouse.x;
                particleY = mouse.y;
            }
        };

        const onTouchMove = (e) => {
            if (e.touches.length > 0 && isDragging) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
                particleX = mouse.x;
                particleY = mouse.y;
            }
        };

        const onTouchEnd = () => {
            if (isDragging) {
                isDragging = false;
            }
        };

        const onMouseDown = (e) => {
            const dist = Math.hypot(e.clientX - particleX, e.clientY - particleY);
            if (dist < radius) {
                isDragging = true;
            }
        };

        const onMouseUp = () => {
            if (isDragging) {
                isDragging = false;
            }
        };

        const initscene = () => {
            ww = canvasTether.width = window.innerWidth;
            wh = canvasTether.height = window.innerHeight;
            centerX = ww / 2;
            centerY = wh / 2;
            particleX = centerX;
            particleY = centerY;
            vx = 0;
            vy = 0;
            render();
            initSceneCalls++;
            console.log(initSceneCalls);
        };

        const resizeScene = () => {
            ww = canvasTether.width = window.innerWidth;
            wh = canvasTether.height = window.innerHeight;
            centerX = ww / 2;
            centerY = wh / 2;
            particleX = centerX;
            particleY = centerY;
            vx = 0;
            vy = 0;
        }


        const render = () => {
            if (!isDragging) {
                const dx = centerX - particleX;
                const dy = centerY - particleY;
                const ax = dx * stiffness;
                const ay = dy * stiffness;
                vx += ax;
                vy += ay;
                vx *= damping;
                vy *= damping;
                particleX += vx;
                particleY += vy;
            } else {
                vx = 0;
                vy = 0;
            }

            ctx.clearRect(0, 0, canvasTether.width, canvasTether.height);
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(particleX, particleY, radius, 0, Math.PI * 2);
            ctx.fill();

            requestAnimationFrame(render);
        };


        // window.addEventListener("resize", initscene);
        window.addEventListener("resize", resizeScene);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("touchend", onTouchEnd);
        initscene();

        return () => {
            // window.removeEventListener("resize", initscene);
            window.removeEventListener("resize", resizeScene);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchend", onTouchEnd);
            cancelAnimationFrame(render);
        };
    }, []);


    return (
        <div>
            <h1>Tether</h1>
            <canvas
                style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    overflow: 'hidden',
                    zIndex: -10
                }}
                id="sceneTether">
            </canvas>
        </div>
    );
}
