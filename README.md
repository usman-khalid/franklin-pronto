# Franklin + Vite
This repository contains a Franklin implementation that uses Vite to build all client side code to further improve performance, while also providing a more streamlined developer workflow.

## Environments
- Preview: https://main--franklin-pronto--usman-khalid.hlx.page
- Live: https://main--franklin-pronto--usman-khalid.hlx.live

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development
- `npm run build` — runs the vite build and deploys the contents to the `dist` folder.
- `npm run dev` — runs the vite build with the watch option and runs `hlx up` in parallel to create a live dev server. Changes to any client side code are reflected automatically and refreshed locally.

## Features
#### Vite 
[Vite](https://vitejs.dev/) is used to compile and minify all front-end code (including `lib-franklin.js` & `scripts.js`).

#### Support for [CSS modules](https://css-tricks.com/css-modules-part-1-need/)
This is particularly useful due to the nature by which the Franklin content bus sends the HTML representation of the content to the browser. Any filename ending with `.module.css` is treated as a module.

#### CSS Import Inlining
CSS files can be imported using `@import` via `postcss-import`.

#### Native CSS Nesting
Vite has built in support for native CSS nesting. CSS code can be written in plain CSS and selectors can be nested.

#### Mixins
Mixins can be used via `postcss-mixins`. See example in `_mixins.css` and usage in `header.module.css`

#### JS Dependencies & Libraries
Each block is bundled independantly, so it can simply be loaded from the `dist` directory instead of `blocks`. This allows us to use npm modules for helper functionality without having to include an entire library or adding it manually into the `scripts` folder.
