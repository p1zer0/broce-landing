import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 8192,
    cssMinify: 'lightningcss',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.debug'],
        passes: 2,
      },
      mangle: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // i18n is large — isolate it
          if (id.includes('i18n.js')) return 'i18n';
          // Intelligence layers — lazy-loadable
          if (id.includes('intelligence')) return 'intelligence';
          // Constellation effect — optional visual
          if (id.includes('constellation')) return 'effects';
        },
        assetFileNames: (assetInfo) => {
          // Hash images separately for long cache
          if (/\.(png|jpe?g|webp|gif|avif|svg)$/i.test(assetInfo.name)) {
            return 'assets/img/[name]-[hash][extname]';
          }
          if (/\.css$/i.test(assetInfo.name)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },
    },
    // Generate compressed versions
    reportCompressedSize: true,
    // Chunk size warning
    chunkSizeWarningLimit: 150,
    // Source maps for debugging
    sourcemap: false,
  },
  css: {
    devSourcemap: true,
    transformer: 'lightningcss',
    lightningcss: {
      drafts: {
        customMedia: true,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    // Pre-transform for faster dev
    warmup: {
      clientFiles: [
        './src/main.js',
        './src/pages/Main.js',
        './src/styles/*.css',
      ],
    },
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [],
    exclude: [],
  },
});
