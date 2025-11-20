import { TooltipProps } from "./types";

export function calculateTooltipPosition(
    triggerRect: DOMRect,
    tooltipRect: DOMRect,
    position: TooltipProps["position"],
): { top: number; left: number } {
    let top = 0;
    let left = 0;

    switch (position) {
        case "top":
            top = triggerRect.top - tooltipRect.height - 8;
            left =
                triggerRect.left +
                triggerRect.width / 2 -
                tooltipRect.width / 2;
            break;
        case "bottom":
            top = triggerRect.bottom + 8;
            left =
                triggerRect.left +
                triggerRect.width / 2 -
                tooltipRect.width / 2;
            break;
        case "left":
            top =
                triggerRect.top +
                triggerRect.height / 2 -
                tooltipRect.height / 2;
            left = triggerRect.left - tooltipRect.width - 8;
            break;
        case "right":
            top =
                triggerRect.top +
                triggerRect.height / 2 -
                tooltipRect.height / 2;
            left = triggerRect.right + 8;
            break;
        default:
            throw new Error(`Unsupported tooltip position: ${position}`);
    }

    return {
        top: top + window.scrollY,
        left: left + window.scrollX,
    };
}
