ReactJS frontend development and build.

All sources are in ./frontend, they're for dev only, compiled javascript goes to ./static, compiled html goes to ./index.html
The same is true for plugins.

Dev workflow:

1. run "npm install" here and in all plugin dirs which you want to modify
2. start trassir, start analytics core and plugins
3. run "npm start" here, the dev server will be available at http://localhost:3000, modify and test your frontend as usual ReactJS app
4. one you're done run ./build_generated.sh, it'll build core and all plugins
5. publish your scripts from trassir
