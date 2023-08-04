/* eslint-disable import/no-extraneous-dependencies */
const { defineConfig } = require('vite');
const postCSSMixinsPlugin = require('postcss-mixins');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const blocks = fs
  .readdirSync(path.resolve(__dirname, './blocks'), { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name);

const blockEntries = glob.sync(path.resolve(__dirname, 'blocks/**/*.{css,js}'));

export default defineConfig({
  css: {
    postcss: {
      plugins: [postCSSMixinsPlugin()],
    },
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  build: {
    rollupOptions: {
      preserveEntrySignatures: true,
      input: [
        path.resolve(__dirname, 'scripts', 'delayed.js'),
        path.resolve(__dirname, 'scripts', 'lib-franklin.js'),
        path.resolve(__dirname, 'scripts', 'scripts.js'),
        path.resolve(__dirname, 'assets', 'styles', 'styles.css'),
        path.resolve(__dirname, 'assets', 'styles', 'lazy-styles.css'),
        path.resolve(__dirname, 'assets', 'styles', 'fonts.css'),
        ...blockEntries,
      ],
      output: {
        assetFileNames: (assetInfo) => {
          const { name } = assetInfo;
          const blockName = name.split('.')[0];
          const isBlock = blocks.includes(blockName);

          return isBlock
            ? `blocks/${blockName}/${blockName}.min.[ext]`
            : 'assets/[name].min.[ext]';
        },
        entryFileNames: (entry) => {
          const { name } = entry;
          const blockName = name.split('.')[0];
          const isBlock = blocks.includes(blockName);
          const isModule = name.endsWith('.module');
          const fileName = isModule ? `${blockName}.classes` : `${name}`;

          return isBlock
            ? `blocks/${blockName}/${fileName}.min.js`
            : 'lib/[name].min.js';
        },
        chunkFileNames: 'lib/[name].min.js',
      },
    },
  },
});
