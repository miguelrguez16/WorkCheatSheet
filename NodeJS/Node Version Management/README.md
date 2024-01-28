# Node Version Management

Permite manejar multiples versiones de Node en windows

[Repositorio de GitHub para NVM](https://github.com/coreybutler/nvm-windows)

[Guía de FreeCodeCamp para instalación](https://www.freecodecamp.org/news/nvm-for-windows-how-to-download-and-install-node-version-manager-in-windows-10/)

## Comandos NVM

### Comandos principales

```bash
nvm install node-version # install a version of Node
nvm list # see the versions of Node you have installed on your machine
nvm use node-version # use a specific version of Node
```

### Instalar la ultima version de node

```bash
nvm install latest
```

### Instalar la version LTS de node

```bash
nvm install lts
```

### Instalar una version especifica de node

Primero chuequear versiones disponibles con:

```bash
nvm list available
```

Para instalar la versión especifica de node:

```bash
nvm install node-version-number
```

**NOTA**: Una vez que instalas una versión de Node, la versión correspondiente de NPM se instala por ti. Así que no necesitas instalar NPM por separado.

Si la version de npm que quieres usar no esta disponible se puede:

```bash
npm install @npm version-number -g # instalar
```

Lista de versiones instaladas de node

```bash
nvm list
```

Para utilizar una versión específica de Node, ejecute:

```bash
nvm use latest # para utilizar la última versión
nvm use lts # para utilizar la versión de soporte a largo plazo
nvm use version-number # para utilizar cualquier otra versión que tenga instalada
```
