'use strict';

const express = require('express');
const companiesRouter = express.Router();
const companiesController = require('./controller');

const PATH = "/companies";

/**
 * @swagger
 *  definitions:
 *    Company:
 *      type: object
 *      required:
 *        - name
 *        - userId
 *      properties:
 *        id:
 *          type: number
 *        name:
 *          type: string
 *          example: "Arobs"
 *        userId:
 *          type: number
 *        contactInfoId:
 *          type: number
 *        contactInfo:
 *          $ref: "#/definitions/ContactInfo"
 *        createdAt:
 *          type: string
 *          format: date
 *        updatedAt:
 *          type: string
 *          format: date
 */
let router = () => {
  /**
   * @swagger
   * /companies/user/{id}:
   *   get:
   *     tags:
   *       - Companies
   *     summary: Find all companies created by specific user
   *     produces: application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         description: User id
   *         required: true
   *     responses:
   *       200:
   *         description: Successfully received
   *         schema:
   *            $ref: "#/definitions/Company"
   */
  companiesRouter.get('/user/:id', (req, res) => {
    return companiesController.findByUserId(req.params.id)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  });

  companiesRouter.route('/')
  /**
   * @swagger
   * /companies:
   *   get:
   *     tags:
   *       - Companies
   *     summary: Returns all companies
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: An array of companies
   *         schema:
   *           $ref: '#/definitions/Company'
   */
    .get((req, res) => {
      companiesController.find({})
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /companies:
     *   post:
     *     tags:
     *       - Companies
     *     summary: Create a new company
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/Company'
     *     responses:
     *       200:
     *         description: Successfully created
     *         schema:
     *            $ref: "#/definitions/Company"
     */
    .post((req, res) => {
      companiesController.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  companiesRouter.route('/:id/:deep?')
  /**
   * @swagger
   * /companies/{id}/{deep}:
   *   get:
   *     tags:
   *       - Companies
   *     summary: Find information for a single company
   *     produces: application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         description: The current company identifier
   *         required: true
   *       - name: deep
   *         in: path
   *         description: Perform deep search to retrieve all the associated objects
   *     responses:
   *       200:
   *         description: Successfully received
   *         schema:
   *            $ref: "#/definitions/Company"
   */
    .get((req, res) => {
      companiesController.findById(req.params.id, req.params.deep)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /companies/{id}:
     *   put:
     *     tags:
     *       - Companies
     *     summary: Update information for a single company
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: The current company identifier
     *         required: true
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *          $ref: '#/definitions/Company'
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .put((req, res) => {
      companiesController.update(req.body, req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /companies/{id}:
     *   delete:
     *     tags:
     *       - Companies
     *     summary: Removes company from DB
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: The current company identifier
     *         required: true
     *     schema:
     *        $ref: '#/definitions/Company'
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .delete((req, res) => {
      companiesController.deleteById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  /**
   * @swagger
   * /companies/find:
   *   post:
   *     tags:
   *       - Companies
   *     summary: Find information for a single company based on search criteria
   *     produces: application/json
   *     parameters:
   *       - name: searchCriteria
   *         in: body
   *         description: Company related properties
   *         schema:
   *            $ref: "#/definitions/Company"
   *     responses:
   *       200:
   *         description: Successfully received
   *         schema:
   *            $ref: "#/definitions/Company"
   */
  companiesRouter.post('/find', (req, res) => {
    companiesController.find(req.body)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  });

  return companiesRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
