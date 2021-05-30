"use strict";
/**
 * This is an example of a server that returns dynamic video.
 * Run `npm run server` to try it out!
 * If you don't want to render videos on a server, you can safely
 * delete this file.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bundler_1 = require("@remotion/bundler");
const renderer_1 = require("@remotion/renderer");
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const port = process.env.PORT || 8000;
const compositionId = 'HelloWorld';
const cache = new Map();
app.get('/', async (req, res) => {
    const sendFile = (file) => {
        fs_1.default.createReadStream(file)
            .pipe(res)
            .on('close', () => {
            res.end();
        });
    };
    try {
        if (cache.get(JSON.stringify(req.query))) {
            sendFile(cache.get(JSON.stringify(req.query)));
            return;
        }
        const bundled = await bundler_1.bundle(path_1.default.join(__dirname, './src/index.tsx'));
        const comps = await renderer_1.getCompositions(bundled);
        const video = comps.find((c) => c.id === compositionId);
        if (!video) {
            throw new Error(`No video called ${compositionId}`);
        }
        res.set('content-type', 'video/mp4');
        const tmpDir = await fs_1.default.promises.mkdtemp(path_1.default.join(os_1.default.tmpdir(), 'remotion-'));
        const { assetsInfo } = await renderer_1.renderFrames({
            config: video,
            webpackBundle: bundled,
            onStart: () => console.log('Rendering frames...'),
            onFrameUpdate: (f) => {
                if (f % 10 === 0) {
                    console.log(`Rendered frame ${f}`);
                }
            },
            parallelism: null,
            outputDir: tmpDir,
            inputProps: req.query,
            compositionId,
            imageFormat: 'jpeg',
        });
        const finalOutput = path_1.default.join(tmpDir, 'out.mp4');
        await renderer_1.stitchFramesToVideo({
            dir: tmpDir,
            force: true,
            fps: video.fps,
            height: video.height,
            width: video.width,
            outputLocation: finalOutput,
            imageFormat: 'jpeg',
            assetsInfo,
        });
        cache.set(JSON.stringify(req.query), finalOutput);
        sendFile(finalOutput);
        console.log('Video rendered and sent!');
    }
    catch (err) {
        console.error(err);
        res.json({
            error: err,
        });
    }
});
app.listen(port);
console.log([
    `The server has started on http://localhost:${port}!`,
    'You can render a video by passing props as URL parameters.',
    '',
    'If you are running Hello World, try this:',
    '',
    `http://localhost:${port}?titleText=Hello,+World!&titleColor=red`,
    '',
].join('\n'));
