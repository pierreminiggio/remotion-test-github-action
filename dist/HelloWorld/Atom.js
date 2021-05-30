"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atom = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const remotion_1 = require("remotion");
const config_1 = require("./config");
const Atom = ({ scale }) => {
    const config = remotion_1.useVideoConfig();
    return (jsx_runtime_1.jsxs("svg", Object.assign({ viewBox: `0 0 ${config.width} ${config.height}`, style: {
            position: 'absolute',
            transform: `scale(${scale})`,
        } }, { children: [jsx_runtime_1.jsx("defs", { children: jsx_runtime_1.jsxs("linearGradient", Object.assign({ id: "gradient2", x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, { children: [jsx_runtime_1.jsx("stop", { offset: "0%", stopColor: config_1.COLOR_1 }, void 0),
                        jsx_runtime_1.jsx("stop", { offset: "100%", stopColor: config_1.COLOR_2 }, void 0)] }), void 0) }, void 0),
            jsx_runtime_1.jsx("circle", { r: 70, cx: config.width / 2, cy: config.height / 2, fill: "url(#gradient2)" }, void 0)] }), void 0));
};
exports.Atom = Atom;
