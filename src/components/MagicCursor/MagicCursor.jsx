import React, { useState, useEffect } from "react";
import "./MagicCursor.css"
const MagicCursor = () => {
    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

    const moveCursor = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        setCursorXY({ x, y });
    };
    useEffect(() => {
        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            <div
                className="magic-cursor-out"
                style={{
                    transition:
                        "transform 0.25s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
                    transform: `translate3d(${cursorXY.x - 16}px, ${
                        cursorXY.y - 16
                    }px, 0)`,
                    zIndex: 60,
                    pointerEvents: "none"
                }}
            />
            <div
                className="magic-cursor-in"
                style={{
                    transition:
                    "transform 0.1s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
                    transform: `translate3d(${cursorXY.x - 2}px, ${
                        cursorXY.y - 2
                    }px, 0)`,
                    zIndex: 65,
                    pointerEvents: "none"
                }}
            />
        </>
    );
};
export default MagicCursor;
