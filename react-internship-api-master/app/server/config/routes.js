'use strict';

const fs = require('fs');
const path = require('path');

module.exports.init = initRoutes;
module.exports.getRouteFilePaths = getRouteFilePaths;

function getRouteFilePaths(app, onlyRoute) {
    let routePaths = [];
    const appsPath = app.get('root') + '/modules/';

    fs.readdirSync(appsPath).filter(function (folder) {
        let routesPath = path.join(appsPath, folder);
        if (fs.statSync(routesPath).isDirectory()) {
            fs.readdirSync(routesPath).filter(function (route) {
                if (onlyRoute) {
                    if (route === 'routes.js') {
                        routePaths.push(path.join(routesPath, route));
                    }
                } else {
                    routePaths.push(path.join(routesPath, route));
                }
            });
        }
    });
    return routePaths;
}

function initRoutes(app) {
    let routes = getRouteFilePaths(app, true);
    routes.forEach((routePath) => {
        let route = require(routePath);

        app.use(route.PATH, route.route);
    });
}
