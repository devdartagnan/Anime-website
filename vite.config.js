import topLevelAwait from "vite-plugin-top-level-await";
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                login: './login.html',
                player: './player.html',
                // ...
                // List all files you want in your build
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