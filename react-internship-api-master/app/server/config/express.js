'use strict';

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressValidator = require('express-validator');

module.exports.init = initExpress;

function initExpress(app) {
    app.use(expressValidator());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.disable('x-powered-by');

    app.use(async (req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      req.resources = req.resources || {};

      next();

        // ToDo add authorization
        // console.log(req.get('Authorization'));
        //
        // if (!req.get('Authorization')) {
        //   res.status(500).json('Unauthorized user')
        // } else {
        //   next();
        // }
    });
}
