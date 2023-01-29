import topLevelAwait from "vite-plugin-top-level-await";
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: false,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html') ,
                login: resolve(root, 'login.html') ,
                player: resolve(root, 'player.html') ,
            }
        }
    },
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        topLevelAwait({
            // The export name of top-level await promise for each chunk module
            promiseExportName: "__tla",
            // The function to generate import names of top-level await promise in each chunk module
            promiseImportName: i => `__tla_${i}`
        })
    ]
});