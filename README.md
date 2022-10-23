# JS-101

## How to install (only first time)

To initialize the `kase`, `maxi`, `lucas` projects, we must execute the following commands:

1. First, move to the corresponding directory:

   ```bash
   
   cd kase
   ```

2. Then, install the dependencies:

    ```bash

    npm install --only-dev
    ```

## How to compile (nice way)

You need to keep this command running to automatically compile your TS files to JS files, if this is not running, your files won't be compiled.

First, move to the corresponding directory:

```bash

cd kase
```

```bash

npm run build:watcher
```

To stop the automatic compilation, you must press `ctrl+c` in the terminal that you executed the command.

## How to compile (ugly way)

To manually compile your files (not recommended), you can use the following command:

First, move to the corresponding directory:

```bash

cd kase
```

```bash

npm run build
```

This method is not recommended because you will have to manually compile the files each time you change something in typescript.
