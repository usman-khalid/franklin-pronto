# Franklin + Vite
This repository contains a Franklin implementation that uses Vite to build all client side code with a structure set up for scalability.

## Environments
- Preview: https://main--franklin-vite--usman-khalid.hlx.page
- Live: https://main--franklin-vite--usman-khalid.hlx.live

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development
To run the vite build and deploy the contents to the `dist` folder:
```sh
npm run build
```
To run the vite build with the watch flag and run `hlx up` in parallel, run:

```sh
npm run dev
```

This command uses `cross-env` for cross-platform support and uses `concurrently` to run both commands in parallel. 

Changes to any client side code are reflected and refreshed locally.

## Features
### Vite 
[Vite](https://vitejs.dev/) is used to compile and minify all front-end code (including `lib-franklin.js` & `scripts.js`). This gives us many advantages aside from bundling and minification to improve performance, such as [OOTB PostCSS support](https://vitejs.dev/guide/features.html#postcss).

CSS and JS files are simply served from the `dist` folder instead of the source files.

### [CSS modules](https://css-tricks.com/css-modules-part-1-need/)
This is particularly useful due to the nature by which the Franklin content bus sends the HTML representation of the content to the browser. In most Franklin implementations, there is a lot of DOM manipulation for blocks, and classes need to be applied to certain elements within a block. Using CSS modules gives us a few advantages:
- **Avoiding unintended style collisions**: because the class names genereated by a CSS module contain a unique hash value, there is no risk of impacting another area of the site and we can be certain that our CSS styles are scoped and isolated to that block.
- **Ease of development**: Importing a CSS module gives us a neat little object with all the class names we need in the JS — we can simply use variables to apply these classes based on different logic in the block.
- **No CSS methodology compliance required**: Because class names are unique for each component, they can be short and meaningful without having to follow a rigid naming convention like BEM, for example. This avoids having to maintain complex CSS slectors.

*Note: Global Styles and styles for block variants can be styled with the `:global` selector as per the spec. See example for the [stacked card variation](https://github.com/usman-khalid/franklin-vite/blob/main/blocks/cards/cards.module.css#L35).*

### CSS Import Inlining
CSS files can be imported using `@import` notation via `postcss-import`.

### Native CSS Nesting
Vite has built in support for native CSS nesting via `postcss-nesting`.

### Mixins
The Vite config in this project adds an additional plugin, `postcss-mixins` to add support for CSS mixins. See an example [here](https://github.com/usman-khalid/franklin-vite/blob/main/blocks/header/header.module.css#L100) and [here](https://github.com/usman-khalid/franklin-vite/blob/main/assets/styles/_mixins.css).

### JS
Third party libraries can be imported the traditional way by installing them via `npm` and importing whatever is needed. Vite takes care of everything necessary to optimize the build and make things reusable import wise. There is a basic example of this in the [cards](https://github.com/usman-khalid/franklin-vite/blob/main/blocks/cards/cards.js#L30) block.

This, of course needs to be weighed against the impact on performance and lighthouse scores, and it may be a good idea to use an `IntersectionObserver` to load a script manually when a block is in view instead.

## Deployment
This repository contains a `franklin-build` workflow that runs the vite build on `push` and `pull_request` along with the linting.

Because Franklin serves the code directly from the github source, the `dist` folder must be committed to the repo.
