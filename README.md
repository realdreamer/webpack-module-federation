Webpack module federation demo
==============================

This demo has few applications

*   console - is the main host app
*   pumbaa and simbaa is the remote app
*   utils is the helper utils

#### To run the demo

run `yarn start` from the root directory

*   `http://localhost:3001/` - console app
*   `http://localhost:3002/` - simba app
*   `http://localhost:3003/` - pumbaa app

Remote apps are lazy loaded based on the routes
