import React, { useRef, useEffect, useState } from 'react';

export default function Spinner() {

    const spinnerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [rotation, setRotation] = useState(0);

    const [dragStartAngle, setDragStartAngle] = useState(0);
    const [initialRotation, setInitialRotation] = useState(0);

    const [velocity, setVelocity] = useState(0);
    const friction = 0.99;

    const [lastTime, setLastTime] = useState(0);
    const maxSpeed = 10

    const handleWheel = (event) => {
        const scrollAmount = event.deltaY;
        const rotationIncrement = 8;
        const direction = scrollAmount < 0 ? -1 : 1;
        const newVelocity = Math.min(maxSpeed, Math.max(-maxSpeed, velocity + direction * rotationIncrement));
        setVelocity(newVelocity)
    };

    useEffect(() => {
        let animationFrameId;
        const updateRotation = () => {
            setVelocity((prevVelocity) => {
                const newVelocity = prevVelocity * friction;
                if (Math.abs(newVelocity) < 0.001) {
                    return 0;
                }
                setRotation((prevRotation) => prevRotation + newVelocity);
                return newVelocity;
            });
            animationFrameId = requestAnimationFrame(updateRotation);
        };
        updateRotation();
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);


    const calculateAngle = (x, y) => {
        const rect = spinnerRef.current.getBoundingClientRect();
        const spinnerX = rect.left + rect.width / 2;
        const spinnerY = rect.top + rect.height / 2;
        return Math.atan2(y - spinnerY, x - spinnerX) * (180 / Math.PI);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        const angle = calculateAngle(e.clientX, e.clientY);
        setDragStartAngle(angle);
        setInitialRotation(rotation);
        setLastTime(Date.now());
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const currentAngle = calculateAngle(e.clientX, e.clientY);
            const angleDiff = currentAngle - dragStartAngle;

            const currentTime = Date.now();
            const timeDiff = (currentTime - lastTime); 

            setRotation(initialRotation + angleDiff);
            if (timeDiff > 0) {
                const newVelocity = Math.min(maxSpeed, Math.max(-maxSpeed, angleDiff / timeDiff));
                setVelocity(newVelocity);
            }
            setLastTime(currentTime);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragStartAngle, initialRotation, lastTime]);

    return(
        <div>
            <h1> Spinner </h1>
            <div className="spinnerDiv">
                <div
                    className="spinner"
                    ref={spinnerRef}
                    onMouseDown={handleMouseDown}
                    style={{ transform: `rotate(${rotation}deg)` }}
                    >
                        <div className="spinnerCircle" style={{ top: '0%', left: '50%' }}></div>
                        <div className="spinnerCircleCenter" style={{ top: '50%', left: '50%' }}></div>
                        <div className="spinnerCircle" style={{ top: '75%', left: '6.5%' }}></div>
                        <div className="spinnerCircle" style={{ top: '75%', left: '93.5%' }}></div>

                        <div className="line" style={{ top: '0%', left: '49%', height: '50%'}}></div>
                        <div className="line" style={{ top: '36%', left: '29%', height: '50%', transform:'rotate(60deg'}}></div>
                        <div className="line" style={{ top: '36%', left: '70%', height: '50%', transform:'rotate(120deg'}}></div>
                </div>
                </div>
        </div>    
    )
}