"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arc = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const remotion_1 = require("remotion");
const config_1 = require("./config");
const Arc = ({ progress, rotation, rotateProgress }) => {
    const config = remotion_1.useVideoConfig();
    const cx = config.width / 2;
    const cy = config.height / 2;
    const rx = config.height / 8;
    const ry = rx * 2.2;
    const arcLength = Math.PI * 2 * Math.sqrt((rx * rx + ry * ry) / 2);
    const strokeWidth = arcLength / 60;
    return (jsx_runtime_1.jsxs("svg", Object.assign({ viewBox: `0 0 ${config.width} ${config.height}`, style: {
            position: 'absolute',
            transform: `rotate(${rotation * rotateProgress}deg)`,
        } }, { children: [jsx_runtime_1.jsx("defs", { children: jsx_runtime_1.jsxs("linearGradient", Object.assign({ id: "gradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%" }, { children: [jsx_runtime_1.jsx("stop", { offset: "0%", stopColor: config_1.COLOR_1 }, void 0),
                        jsx_runtime_1.jsx("stop", { offset: "100%", stopColor: config_1.COLOR_2 }, void 0)] }), void 0) }, void 0),
            jsx_runtime_1.jsx("ellipse", { cx: cx, cy: cy, rx: rx, ry: ry, fill: "none", stroke: "url(#gradient)", strokeDasharray: arcLength, strokeDashoffset: arcLength - arcLength * progress, strokeLinecap: "round", strokeWidth: strokeWidth }, void 0)] }), void 0));
};
exports.Arc = Arc;
