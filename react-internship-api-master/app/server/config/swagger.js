'use strict';
const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');
const serveStatic = require('serve-static');

module.exports.init = initSwagger;

function initSwagger(app, routes) {
  const swaggerDefinition = {
    info: {
      title: 'AROBS web insternship API',
      version: '1.0.0',
      description: 'Describing our RESTful API with Swagger',
    },
    host: 'localhost:4000',
    basePath: '/',
    securityDefinitions: {
      auth: {
        type: 'basic',
        name: 'Authorization',
        in: 'header'
      }
    },
    security: [
      { auth: [] }
    ]
  };

  const options = {
    swaggerDefinition: swaggerDefinition,
    apis: routes.getRouteFilePaths(app),
  };

  const swaggerSpec = swaggerJSDoc(options);

  app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  app.use(serveStatic(path.join(app.get('root'), 'public')));
}
