import nunjucks from "vite-plugin-nunjucks";
import { viteStaticCopy } from 'vite-plugin-static-copy';


export default {
    plugins: [
        nunjucks(),
        viteStaticCopy({
            targets: [
                {
                    src: 'assets/resume.pdf',
                    dest: 'assets/', 
                }
            ]
        }),
    ],
    optimizeDeps: {
        include: ["nunjucks"],
    },
    root: "src",
    // base: "",
    build: {
        outDir: "../docs",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: "src/index.html",
            },
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: (file) => {
                    const ext = file.name.split(".").pop();
                    if (["png", "jpg", "jpeg", "gif", "svg", "ico"].includes(ext)) {
                        return `assets/img/${file.name}`;
                    }
                    return `assets/${file.name}`;
                },
            },
        },
    },
};

