'use strict';

const express = require('express');
const countriesRouter = express.Router();
const countriesController = require('./controller');

const PATH = "/countries";

/**
 * @swagger
 *  definitions:
 *    Country:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        name:
 *          type: string
 *          example: "Romania"
 */
let router = () => {
  countriesRouter.route('/')
  /**
   * @swagger
   * /countries:
   *   get:
   *     tags:
   *       - Countries
   *     summary: Returns all countries
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: An array of contacts
   *         schema:
   *           $ref: '#/definitions/Country'
   */
    .get((req, res) => {
      countriesController.find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  countriesRouter.route('/:id')
  /**
   * @swagger
   * /countries/{id}:
   *   get:
   *     tags:
   *       - Countries
   *     summary: Find information for a single country
   *     produces: application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         description: The country identifier
   *         required: true
   *     responses:
   *       200:
   *         description: Successfully received
   *         schema:
   *            $ref: "#/definitions/Country"
   */
    .get((req, res) => {
      countriesController.findById(req.params.id, req.params.deep)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  return countriesRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
