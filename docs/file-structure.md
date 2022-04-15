```
.
├── asbuild-dev.sh -- Compile AssemblyScript files for development environment
├── asbuild.sh -- Compile AssemblyScript files for production environment
├── asconfig.json -- Assemblyscript config file
├── docs -- documentation files
│   ├── file-structure.html
│   ├── index.html
│   ├── README.md
│   └── _sidebar.md
├── node_modules -- Libraries
├── i18n.ts -- Generate language .ts files, and compile to wasm files
├── index.js -- Main entry for this library
├── LICENSE -- Don't worry, it's all for free :)
├── package.json -- Profile file of the library
├── postcss.config.js -- Postcss config file for Tailwind CSS
├── public -- The public folder. The website's root directory
│   ├── 200.html
│   ├── 404.html
│   ├── assets -- Assets folder
│   │   ├── styles -- Tailwind CSS styles
│   │   │   ├── index.css
│   │   │   └── tailwind.css
│   ├── build -- Built js & wasm files
│   │   ├── bundle.js
│   │   ├── bundle.js.map
│   │   ├── checkbox.optimized.d.ts
│   │   ├── checkbox.optimized.js
│   │   ├── checkbox.optimized.wasm
│   │   ├── dev.optimized.d.ts
│   │   ├── dev.optimized.js
│   │   ├── dev.optimized.wasm
│   │   ├── en-US.optimized.d.ts
│   │   ├── en-US.optimized.js
│   │   ├── en-US.optimized.wasm
│   │   ├── zh-CN.optimized.d.ts
│   │   ├── zh-CN.optimized.js
│   │   ├── zh-CN.optimized.wasm
│   │   ├── zh-TW.optimized.d.ts
│   │   ├── zh-TW.optimized.js
│   │   └── zh-TW.optimized.wasm
│   └── index.html -- The Web starts here....
├── README.md
├── rollup.config.js -- Config file for rollup.js, the packaging library
├── src -- All source files are here
│   ├── assembly -- AssemblyScript files
│   │   ├── components
│   │   │   └── checkbox.ts
│   │   ├── dev
│   │   │   └── dev.ts
│   │   ├── i18n -- Language files
│   │   │   ├── interface.ts
│   │   │   ├── json -- Edit language data here
│   │   │   │   ├── en-US.json
│   │   │   │   ├── zh-CN.json
│   │   │   │   └── zh-TW.json
│   │   │   └── ts
│   │   │       ├── en-US.ts
│   │   │       ├── zh-CN.ts
│   │   │       └── zh-TW.ts
│   │   └── tsconfig.json
│   ├── components -- Shared components
│   │   ├── checkbox.svelte
│   │   └── right-click-menu.svelte
│   ├── constants -- Constants
│   │   └── page-style.constant.svelte
│   ├── functions -- Shared functions
│   │   ├── i18n.function.js
│   │   └── i18n.function.ts
│   ├── interfaces -- Interfaces for TypeScript
│   │   ├── cols.interface.js
│   │   ├── cols.interface.ts
│   │   ├── data.interface.js
│   │   ├── data.interface.ts
│   │   ├── i18n.interface.js
│   │   └── i18n.interface.ts
│   ├── main-dev.ts -- Main entry for development (testing) environment
│   ├── main.ts -- Main entry for library
│   ├── table-body.svelte -- Table body
│   └── table.svelte -- Table root
├── svelte.config.js
├── tailwind.config.js
├── tsconfig.json
├── uglify.sh
└── yarn.lock
```
