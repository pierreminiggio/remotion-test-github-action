"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const remotion_1 = require("remotion");
const Arc_1 = require("./Arc");
const Atom_1 = require("./Atom");
const Logo = ({ transitionStart }) => {
    const videoConfig = remotion_1.useVideoConfig();
    const frame = remotion_1.useCurrentFrame();
    const development = remotion_1.spring({
        config: {
            damping: 100,
            mass: 0.5,
        },
        fps: videoConfig.fps,
        frame,
    });
    const rotationDevelopment = remotion_1.spring({
        config: {
            damping: 100,
            mass: 0.5,
        },
        fps: videoConfig.fps,
        frame,
    });
    const scaleIn = remotion_1.spring({
        frame,
        config: {
            mass: 0.5,
        },
        fps: videoConfig.fps,
    });
    const translation = remotion_1.interpolate(remotion_1.spring({
        frame: frame - transitionStart,
        fps: videoConfig.fps,
        config: {
            damping: 100,
            mass: 0.5,
        },
    }), [0, 1], [0, -150]);
    const scale = frame < 50 ? scaleIn : 1;
    const logoRotation = remotion_1.interpolate(frame, [0, videoConfig.durationInFrames], [0, 360]);
    return (jsx_runtime_1.jsxs("div", Object.assign({ style: {
            position: 'absolute',
            width: videoConfig.width,
            height: videoConfig.height,
            transform: `scale(${scale}) translateY(${translation}px) rotate(${logoRotation}deg)`,
        } }, { children: [jsx_runtime_1.jsx(Arc_1.Arc, { rotateProgress: rotationDevelopment, progress: development, rotation: 30 }, void 0),
            jsx_runtime_1.jsx(Arc_1.Arc, { rotateProgress: rotationDevelopment, rotation: 90, progress: development }, void 0),
            jsx_runtime_1.jsx(Arc_1.Arc, { rotateProgress: rotationDevelopment, rotation: -30, progress: development }, void 0),
            jsx_runtime_1.jsx(Atom_1.Atom, { scale: rotationDevelopment }, void 0)] }), void 0));
};
exports.Logo = Logo;
