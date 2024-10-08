import { fileURLToPath } from 'node:url';
import { extname, relative, resolve } from 'path';
import react from '@vitejs/plugin-react';
import glob from 'glob';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { peerDependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: 'lib/**/!(*d|*.stories|*.test).{ts,tsx}' }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react/jsx-runtime'].concat(Object.keys(peerDependencies)),
      input: Object.fromEntries(
        glob.sync('lib/**/!(*d|*.stories|*.test).{ts,tsx}').map((file) => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative('lib', file.slice(0, file.length - extname(file).length)),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
});
