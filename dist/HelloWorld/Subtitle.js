"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtitle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const remotion_1 = require("remotion");
const config_1 = require("./config");
const Subtitle = () => {
    const frame = remotion_1.useCurrentFrame();
    const opacity = remotion_1.interpolate(frame, [0, 30], [0, 1]);
    return (jsx_runtime_1.jsxs("div", Object.assign({ style: {
            fontFamily: 'Helvetica, Arial',
            fontSize: 40,
            textAlign: 'center',
            position: 'absolute',
            bottom: 140,
            width: '100%',
            opacity,
        } }, { children: ["Edit", ' ', jsx_runtime_1.jsx("code", Object.assign({ style: {
                    color: config_1.COLOR_1,
                } }, { children: "src/Video.tsx" }), void 0), ' ', "and save to reload."] }), void 0));
};
exports.Subtitle = Subtitle;
