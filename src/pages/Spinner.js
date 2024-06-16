// https://github.com/Hackinet/fidget-spinner
// https://codepen.io/guyom/pen/rmXyvR



import React, { useRef, useEffect, useState } from 'react';

export default function Spinner() {

    const spinnerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [dragStartAngle, setDragStartAngle] = useState(0);
    const [initialRotation, setInitialRotation] = useState(0);

    const [velocity, setVelocity] = useState(0);
    const friction = 0.8;

    const handleWheel = (event) => {
        const scrollAmount = event.deltaY;
        const rotationIncrement = 3;

        const direction = scrollAmount < 0 ? 1 : -1;

        const currentRotation = spinnerRef.current.style.transform;
        const currentRotationValue = parseInt(currentRotation.replace('rotate(', '').replace('deg)', ''), 10) || 0;

        const newRotation = currentRotationValue + direction * rotationIncrement;

        spinnerRef.current.style.transform = `rotate(${newRotation}deg)`;
        setVelocity((prevVelocity) => prevVelocity + direction * rotationIncrement);
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

    const calculateAngle = (e) => {
        const rect = spinnerRef.current.getBoundingClientRect();
        const spinnerX = rect.left + rect.width / 2;
        const spinnerY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - spinnerY, e.clientX - spinnerX) * (180 / Math.PI);
        return angle;
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStartAngle(calculateAngle(e));
        setInitialRotation(rotation);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const currentAngle = calculateAngle(e);
            const angleDiff = currentAngle - dragStartAngle;


            setRotation(initialRotation + angleDiff);
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
    }, [isDragging, dragStartAngle, initialRotation]);

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
                        <div className="spinnerCircle" style={{ top: '50%', left: '50%' }}></div>
                        <div className="spinnerCircle" style={{ top: '75%', left: '6.5%' }}></div>
                        <div className="spinnerCircle" style={{ top: '75%', left: '93.5%' }}></div>
                </div>
                </div>
        </div>    
    )
}

{/* <div className="spinnerCircle" style={{ top: '100%', left: '50%' }}></div>
<div className="spinnerCircle" style={{ top: '50%', left: '0%' }}></div>
<div className="spinnerCircle" style={{ top: '50%', left: '100%' }}></div> */}