import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins : [react()],
    root: "./src",
    base: "/",
    build: {
        outDir: "../dist"
    },
    // server: {
    //     port: 9999,
    //     open: true
    // }
});