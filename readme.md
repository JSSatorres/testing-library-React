# Instalación y configuracion de Jest + React Testing Library en proyectos de React + Vite

## Guias de instlacion 

## Instalar jest

1. Instalaciones:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
yarn add --dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: 
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.js__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.js__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

[Enlace con mas info](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177)

## instalar standarJS 

1. Instalaciones:
```
npm install standard --save-dev
```

2. Actualizar  __package.json__
```
 "eslintConfig": {
    "extends":"./node_modules/standard/eslintrc.json"
  }
```
