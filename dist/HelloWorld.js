"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorld = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const remotion_1 = require("remotion");
const Logo_1 = require("./HelloWorld/Logo");
const Subtitle_1 = require("./HelloWorld/Subtitle");
const Title_1 = require("./HelloWorld/Title");
const HelloWorld = ({ titleText, titleColor }) => {
    const frame = remotion_1.useCurrentFrame();
    const videoConfig = remotion_1.useVideoConfig();
    const opacity = remotion_1.interpolate(frame, [videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15], [1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });
    const transitionStart = 25;
    return (jsx_runtime_1.jsx("div", Object.assign({ style: { flex: 1, backgroundColor: 'white' } }, { children: jsx_runtime_1.jsxs("div", Object.assign({ style: { opacity } }, { children: [jsx_runtime_1.jsx(remotion_1.Sequence, Object.assign({ from: 0, durationInFrames: videoConfig.durationInFrames }, { children: jsx_runtime_1.jsx(Logo_1.Logo, { transitionStart: transitionStart }, void 0) }), void 0),
                jsx_runtime_1.jsx(remotion_1.Sequence, Object.assign({ from: transitionStart + 10, durationInFrames: Infinity }, { children: jsx_runtime_1.jsx(Title_1.Title, { titleText: titleText, titleColor: titleColor }, void 0) }), void 0),
                jsx_runtime_1.jsx(remotion_1.Sequence, Object.assign({ from: transitionStart + 50, durationInFrames: Infinity }, { children: jsx_runtime_1.jsx(Subtitle_1.Subtitle, {}, void 0) }), void 0)] }), void 0) }), void 0));
};
exports.HelloWorld = HelloWorld;
