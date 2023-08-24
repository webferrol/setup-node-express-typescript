# Setup

[How to set up Node, TypeScript and Express](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)

## Iniciación de proyecto node

```sh
npm init -y
```

## TypeScript

### Instalación de TypeScript y paquete que contiene la definición de tipos para Node.js

```sh
npm i -D -E typescript
npm i -E --save-dev @types/node
```
### tsconfig.json

```sh
npx tsc --init
```
## ts-standard

### Instalación

```sh
npm i -D -E ts-standard
```

### Configuracion

Añadir en el package.json las siguientes líneas:

```json
{
  "eslintConfig": {
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "extends": ["./node_modules/ts-standard/eslintrc.json"]
  }
}
```

## ts-node-dev: Servidor y transpilador en uno

Una dependencia entre __nodemon__ y compilador de __TypeScript__

```sh
npm i -D -E ts-node-dev
```
## Express

```sh
npm i -E express
npm i -D @types/express
```
## dotenv

```sh
npm install dotenv --save
```