# Commander Demo

## Display todo list with color

    node index.js list

## Bin bash

Add this on top on your index.js

    #!/usr/bin/env node

Add into package.json :

    "bin": {
        "contacts-nodejs-cli": "./index.js"
    }

npm i -g

Et ensuite on peut utiliser :

    contacts-nodejs-cli

Where command line is stored :

    where contacts-nodejs-cli

into : /Users/tanguybernard/.nvm/versions/node/v18.14.2/bin/


### Liste les paquets installé globalement

    npm list -g

### Desinstallation

La desinstalltion c'est pas la commande, c'est le nom du package dans package.json

    npm uninstall -g commander-demo



https://blog.logrocket.com/creating-a-cli-tool-with-node-js/


## Test

https://dummyjson.com/docs/todos

node --test tests/*.js

node --test tests/test.spec.js


EDIT(26 juillet 2023) : Pas besoin de

    NODE_OPTIONS=--experimental-vm-modules jest

source: https://stackoverflow.com/questions/60372790/node-v13-jest-es6-native-support-for-modules-without-babel-or-esm


## Credits

https://code-boxx.com/write-csv-nodejs/
