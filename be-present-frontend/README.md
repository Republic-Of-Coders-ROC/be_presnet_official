# Be-Present Frontend

This project is created using vite.js and react.

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

### Prerequisites

1. Node.js 14.0.0 or higher
2. npm
3. yarn

4. Clone the repo
5. Change directory to `be-present-frontend`
6. Install dependencies

```bash
yarn
```

4. Start the development server

```bash
yarn dev
```

## Folder Structure

1. `src` - Contains all the source code of the project
2. `src/components` - Contains all the components of the project. Add your components inside this folder.
3. `src/assets` - Contains all the assets of the project. Add your assets inside this folder.
4. `src/styles` - Contains all the styles of the project. Add your css files inside this folder.
5. `src/utils` - Contains all the utility functions of the project. Add your utility functions inside this folder.
6. `src/App.tsx` - Contains the main component of the project.
7. `src/index.tsx` - Contains the entry point of the project.
8. `src/vite-env.d.ts` - Contains the typescript declaration files of the project.

## Before you commit

1. Make sure to run the following command before you commit

```bash
yarn lint
```

2. If there are any errors, fix them and then commit. else the code will fail in github CI and won't merge.
