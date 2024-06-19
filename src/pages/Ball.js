//https://playcode.io/slingshot


import React, { useEffect } from 'react';

export default function Ball() {


    useEffect(() => {
        const canvasBall = document.querySelector("#sceneBall");
        const ctx = canvasBall.getContext("2d", { willReadFrequently: true });
        const mouse = { x: 0, y: 0 };
        const radius = 25;
        let isDragging = false;

        let ww = window.innerWidth;
        let wh = window.innerHeight;


        let centerX = ww / 4;
        let centerY = (wh / 3) * 2;


        let ballX = centerX;
        let ballY = centerY;
        let vx = 0; 
        let vy = 0; 

        const damping = 0.9; 
        const stiffness = 0.1; 
        const color = getComputedStyle(document.documentElement).getPropertyValue('--particle-color') || 'black';
        const gravity = 0.5; 

        let isReleased = false; 
        
        const onMouseMove = (e) => {
            if (isDragging) {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
                ballX = mouse.x;
                ballY = mouse.y;
            }
        };

        const onTouchMove = (e) => {
            if (e.touches.length > 0 && isDragging) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
                ballX = mouse.x;
                ballY = mouse.y;
            }
        };

        const onTouchEnd = () => {
            // if (isDragging) {
            //     isDragging = false;
            // }
            if (isDragging) {
                isDragging = false;
                const dx = centerX - ballX;
                const dy = centerY - ballY;
                vx = -dx * 0.1; 
                vy = -dy * 0.1; 

                // isReleased = true;
                // console.log('Released', isReleased)
            }
        };

        const onMouseDown = (e) => {
            const dist = Math.hypot(e.clientX - ballX, e.clientY - ballY);
            if (dist < radius) {
                isDragging = true;
            }
        };

        const onMouseUp = () => {
            if (isDragging) {
                isDragging = false;
                const dx = centerX - ballX;
                const dy = centerY - ballY;
                vx = -dx * 0.1;
                vy = -dy * 0.1; 
                isReleased = true;
                console.log('Released', isReleased)
            }
        };

        const initscene = () => {
            ww = canvasBall.width = window.innerWidth;
            wh = canvasBall.height = window.innerHeight;
            centerX = ww / 4;
            centerY = (wh/3)*2;
            ballX = centerX;
            ballY = centerY;
            vx = 0;
            vy = 0;
            render();
        };

        const resizeScene = () => {
            ww = canvasBall.width = window.innerWidth;
            wh = canvasBall.height = window.innerHeight;
            centerX = ww / 4;
            centerY = (wh / 3) * 2;
            ballX = centerX;
            ballY = centerY;
            vx = 0;
            vy = 0;
        }


        const render = () => {
            if (!isDragging) {
                if (!isReleased || (isReleased && (Math.abs(centerX - ballX) > 5 || Math.abs(centerY - ballY) > 5))) {
                    const dx = centerX - ballX;
                    const dy = centerY - ballY;
                    const ax = dx * stiffness;
                    const ay = dy * stiffness + gravity; // Apply gravity

                    vx += ax;
                    vy += ay;
                    vx *= damping;
                    vy *= damping;

                }
            else {
                vy += gravity;
                }

                ballX += vx;
                ballY += vy;


                // vy += gravity;
                // ballX += vx;
                // ballY += vy;


                if (ballY + radius > canvasBall.height) {
                    ballY = canvasBall.height - radius;
                    vy *= -damping;
                }

                if (ballX + radius > canvasBall.width || ballX - radius < 0) {
                    vx *= -damping;
                    if (ballX + radius > canvasBall.width) ballX = canvasBall.width - radius;
                    if (ballX - radius < 0) ballX = radius;
                }
            } else {
                vx = 0;
                vy = 0;
            }

            //     const dx = centerX - ballX;
            //     const dy = centerY - ballY;
            //     const ax = dx * stiffness;
            //     const ay = dy * stiffness;
            //     vx += ax;
            //     vy += ay;
            //     vx *= damping;
            //     vy *= damping;
            //     ballX += vx;
            //     ballY += vy;
            // } else {
            //     vx = 0;
            //     vy = 0;
            // }



            ctx.clearRect(0, 0, canvasBall.width, canvasBall.height);

            //ball
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(ballX, ballY, radius, 0, Math.PI * 2);
            ctx.fill();

            requestAnimationFrame(render);
        };


        window.addEventListener("resize", resizeScene);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("touchend", onTouchEnd);
        initscene();

        return () => {
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
            <h1>Ball</h1>
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
                id="sceneBall">
            </canvas>
        </div>
    );
}


// import React, { useEffect, useRef, useState } from 'react';

// export default function Ball() {
//     const canvasRef = useRef(null);
//     const [shot, setShot] = useState(null)
//     const [mouse, setMouse] = useState({ down: false, x: null, y: null });

//     useEffect(() => {
//         const canvasBall = canvasRef.current;
//         const ctx = canvasBall.getContext("2d", { willReadFrequently: true });

//         let ww = window.innerWidth;
//         let wh = window.innerHeight;

//         let centerX = ww / 4;
//         let centerY = (wh / 3) * 2;

//         let ballX = centerX;
//         let ballY = centerY;

//         const radius = 25;
//         const damping = 0.9; 
//         const gravity = 0.5; 
//         const color = getComputedStyle(document.documentElement).getPropertyValue('--particle-color') || 'black';

//         const resizeScene = () => {
//             ww = canvasBall.width = window.innerWidth;
//             wh = canvasBall.height = window.innerHeight;
//             centerX = ww / 4;
//             centerY = (wh / 3) * 2;
//         }

//         const updateShot = (shot) => {
//             shot.x += -shot.xDirection / 30;
//             shot.y += -shot.yDirection / 30;
//             if (shot.x >= canvasBall.width || shot.x <= 0) shot.xDirection = -shot.xDirection;
//             if (shot.y >= canvasBall.height || shot.y <= 0) shot.yDirection = -shot.yDirection;
//         };

//         // const drawShot = (shot) => {
//         //     shot.x += -shot.xDirection / 30;
//         //     shot.y += -shot.yDirection / 30;
//         //     if (shot.x >= canvasBall.width || shot.x <= 0) shot.xDirection = -shot.xDirection;
//         //     if (shot.y >= canvasBall.height || shot.y <= 0) shot.yDirection = -shot.yDirection;

//         //     ctx.beginPath();
//         //     ctx.arc(shot.x, shot.y, radius, 0, 2 * Math.PI);
//         //     ctx.fill();
//         // };



//         const render = () => {
//             ctx.clearRect(0, 0, canvasBall.width, canvasBall.height);

//             ctx.strokeStyle = "#fff";
//             ctx.fillStyle = color;

//                 ctx.beginPath();
//                 ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
//                 ctx.fill();

//             if (mouse.down)  {
//                 // ctx.beginPath();
//                 // ctx.arc(ballX, ballY, radius, 0, Math.PI * 2);
//                 // ctx.fill();

//                 ctx.beginPath();
//                 ctx.moveTo(centerX,centerY)
//                 ctx.lineTo(mouse.x, mouse.y);
//                 ctx.stroke();

//                 ctx.beginPath();
//                 ctx.arc(mouse.x, mouse.y, radius, 0, 2 * Math.PI);
//                 ctx.fill();
//             }

//             requestAnimationFrame(render);
//         };

//         const handleMouseMove = (e) => {
//             setMouse((prevMouse) => ({ ...prevMouse, x: e.clientX, y: e.clientY }));
//         };

//         const handleMouseDown = (e) => {
//             setMouse({ down: true, x: e.clientX, y: e.clientY });
//         };

//         const handleMouseUp = () => {
//             if (mouse.down) {
//                 const newShot = {
//                     x: mouse.x,
//                     y: mouse.y,
//                     xDirection: mouse.x - centerX,
//                     yDirection: mouse.y - centerY,
//                 };
//             setShot(newShot); 
//             }
//             setMouse((prevMouse) => ({ ...prevMouse, down: false }));
//         };

//         window.addEventListener("resize", resizeScene);
//         window.addEventListener("mousemove", handleMouseMove);
//         window.addEventListener("mousedown", handleMouseDown);
//         window.addEventListener("mouseup", handleMouseUp);

//         resizeScene();
//         render();

//         return () => {
//             window.removeEventListener("resize", resizeScene);
//             window.removeEventListener("mousemove", handleMouseMove);
//             window.removeEventListener("mousedown", handleMouseDown);
//             window.removeEventListener("mouseup", handleMouseUp);
//             cancelAnimationFrame(render);
//         };
//     }, [shot, mouse]);

//     return (
//         <div>
//             <h1>Ball</h1>
//             <canvas
//                 ref={canvasRef}
//                 style={{
//                     width: '100vw',
//                     height: '100vh',
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     overflow: 'hidden',
//                     zIndex: -10
//                 }}
//                 id="sceneBall">
//             </canvas>
//         </div>
//     );
// }
