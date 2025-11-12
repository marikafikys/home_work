import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import s from "./Tooltip.module.css";
import { calculateTooltipPosition } from "./TooltipPosition";
import { TooltipProps } from "./types";

const PARENT_ID = "tooltip-root";

export const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    position = "top",
    delay = 0,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });

    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<number | null>(null);

    const show = () => {
        timeoutRef.current = window.setTimeout(() => {
            setIsVisible(true);
        }, delay);
    };

    const hide = () => {
        if (timeoutRef.current !== null) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsVisible(false);
    };

    useEffect(() => {
        if (!isVisible || !triggerRef.current || !tooltipRef.current) return;

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        setCoords(calculateTooltipPosition(triggerRect, tooltipRect, position));
    }, [isVisible, position]);

    const portalRoot = document.getElementById(PARENT_ID);
    if (!portalRoot) {
        console.warn("Tooltip container #tooltip-root not found");
        return children;
    }

    return (
        <>
            <div
                ref={triggerRef}
                onMouseEnter={show}
                onMouseLeave={hide}
                style={{ display: "inline-block" }}
            >
                {React.cloneElement(children)}
            </div>

            {isVisible &&
                createPortal(
                    <div
                        ref={tooltipRef}
                        className={s.tooltip}
                        style={{
                            top: `${coords.top}px`,
                            left: `${coords.left}px`,
                        }}
                    >
                        {content}
                    </div>,
                    portalRoot,
                )}
        </>
    );
};
