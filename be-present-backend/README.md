# Backend for Be Present

## Setup

1. Clone the repo
2. Go to be-present-backend folder
3. Run `yarn`
4. Run `yarn dev`

## Folder Structure

```
be-present-backend
├── README.md
├── package.json
├── eslintignore
├── eslintrc
├── tsconfig.json
├── yarn.lock
├── nodemon.json
├── src
│   ├── app.ts
```

## Scripts

- `yarn dev` - Starts the server in development mode
- `yarn build` - Builds the project
- `yarn start` - Starts the server in production mode
- `yarn lint` - Runs eslint
- `yarn lint:fix` - Runs eslint with --fix

## Note

1. Make sure you add .env file inside the be-present-backend folder and add the necessary env variables in order to run the project.
2. Make sure you have the latest version of node installed.
3. Make sure you have yarn installed.
4. Always use yarn:lint before pushing the code. If you have active errors in your code, it will not let you merge the code.
