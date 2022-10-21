import { defineConfig, loadEnv } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    server: {
      port: 3000,
    },
    plugins: [
      tsconfigPaths(),
      ...VitePluginNode({
        adapter: 'nest',
        appPath: './src/main.ts',
        exportName: 'viteNodeApp',
        tsCompiler: 'swc',
      }),
    ],
    optimizeDeps: {
      exclude: [
        '@nestjs/microservices',
        '@nestjs/websockets',
        'cache-manager',
        'class-transformer',
        'class-validator',
      ],
    },
  };
});
