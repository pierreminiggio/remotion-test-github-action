"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemotionVideo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const remotion_1 = require("remotion");
const HelloWorld_1 = require("./HelloWorld");
const Logo_1 = require("./HelloWorld/Logo");
const Subtitle_1 = require("./HelloWorld/Subtitle");
const RemotionVideo = () => {
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(remotion_1.Composition, { id: "HelloWorld", component: HelloWorld_1.HelloWorld, durationInFrames: 150, fps: 30, width: 1920, height: 1080, defaultProps: {
                    titleText: 'Welcome to Remotion',
                    titleColor: 'black',
                } }, void 0),
            jsx_runtime_1.jsx(remotion_1.Composition, { id: "Logo", component: Logo_1.Logo, durationInFrames: 200, fps: 30, width: 1920, height: 1080 }, void 0),
            jsx_runtime_1.jsx(remotion_1.Composition, { id: "Title", component: Subtitle_1.Subtitle, durationInFrames: 100, fps: 30, width: 1920, height: 1080 }, void 0)] }, void 0));
};
exports.RemotionVideo = RemotionVideo;
