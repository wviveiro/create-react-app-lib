# Create Component with Create React App and Typescript

This module was created following the steps:

1. Create app using create-react-app

        create-react-app my-app
        cd my-app
    
2. Install dependencies for typescript and sass
    
    
        npm install -S typescript @types/react @types/react-dom @types/jest node-sass
   
3. Run npm start to create `tsconfig.json` file

    
        npm start

4. Create folder `tscompiler` and COPY tsconfig file there. The `tsconfig` inside `tscompiler` is used to create component. The one in the root folder is for testing component.

        mkdir tscompiler
        cp tsconfig.json tscompiler/tsconfig.json

5. Edit a few lines in tsconfig compuler to use `commonjs`, output the files in the `dist` folder, include ONLY folder `component` inside `src` and add declaration to output

6. Edit `package.json` to run `tsc` on build and set the main file of the project and `node-sass`. BE AWARE it only compiles the `index.scss` inside `src/styles`. If you have more than one scss, import them altogether inside this file. Do not include scss in your component folder.
7. Create folder `src/components` where component will be located
8. Create `src/lib` folder which are files that will be copied over only when build is run
9. Remove files not necessary created from CRA and organise other files for better experience only
10. create `.npmignore` to avoid source files fo be created when using npm install
