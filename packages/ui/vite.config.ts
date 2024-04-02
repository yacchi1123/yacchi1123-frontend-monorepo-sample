import path from 'node:path';
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({
    insertTypesEntry: true,
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.tsx'),
      name: '@monorepo-sample/ui',
      fileName: 'index',
      formats: ['cjs'],
    },
  },
});