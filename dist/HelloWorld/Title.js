"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const remotion_1 = require("remotion");
const Title = ({ titleText, titleColor }) => {
    const videoConfig = remotion_1.useVideoConfig();
    const frame = remotion_1.useCurrentFrame();
    const text = titleText.split(' ').map((t) => ` ${t} `);
    return (jsx_runtime_1.jsx("h1", Object.assign({ style: {
            fontFamily: 'SF Pro Text, Helvetica, Arial',
            fontWeight: 'bold',
            fontSize: 100,
            textAlign: 'center',
            position: 'absolute',
            bottom: 160,
            width: '100%',
        } }, { children: text.map((t, i) => {
            return (jsx_runtime_1.jsx("span", Object.assign({ style: {
                    color: titleColor,
                    marginLeft: 10,
                    marginRight: 10,
                    transform: `scale(${remotion_1.spring({
                        fps: videoConfig.fps,
                        frame: frame - i * 5,
                        config: {
                            damping: 100,
                            stiffness: 200,
                            mass: 0.5,
                        },
                    })})`,
                    display: 'inline-block',
                } }, { children: t }), t));
        }) }), void 0));
};
exports.Title = Title;
