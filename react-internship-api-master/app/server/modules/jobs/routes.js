'use strict';

const express = require('express');
const jobsRouter = express.Router();
const jobsController = require('./controller');

const PATH = "/jobs";

/**
 * @swagger
 *  definitions:
 *    Job:
 *      type: object
 *      required:
 *        - name
 *        - companyId
 *      properties:
 *        id:
 *          type: number
 *        name:
 *          type: string
 *          example: "Full stack developer"
 *        description:
 *          type: string
 *          example: "We are looking for a passionate web developer"
 *        isAvailable:
 *          type: boolean
 *          example: "true"
 *        companyId:
 *          type: integer
 *          example: 1
 *        createdAt:
 *          type: string
 *          format: date
 *        updatedAt:
 *          type: string
 *          format: date
 */
let router = () => {
  jobsRouter.route('/')
  /**
   * @swagger
   * /jobs:
   *   get:
   *     tags:
   *       - Jobs
   *     summary: Returns all jobs
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: An array of users
   *         schema:
   *           $ref: '#/definitions/Job'
   */
    .get((req, res) => {
      jobsController.find({})
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /jobs:
     *   post:
     *     tags:
     *       - Jobs
     *     summary: Create a new job
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/Job'
     *     responses:
     *       200:
     *         description: Successfully created
     *         schema:
     *            $ref: "#/definitions/Job"
     */
    .post((req, res) => {
      jobsController.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  jobsRouter.route('/:id')
  /**
   * @swagger
   * /jobs/{id}:
   *   get:
   *     tags:
   *       - Jobs
   *     summary: Find information for a specific job
   *     produces: application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         description: The current user's identifier
   *         required: true
   *     responses:
   *       200:
   *         description: Successfully received
   *         schema:
   *            $ref: "#/definitions/Job"
   */
    .get((req, res) => {
      jobsController.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /jobs/{id}:
     *   put:
     *     tags:
     *       - Jobs
     *     summary: Update information for a single job
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Job identifier
     *         required: true
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *          $ref: '#/definitions/Job'
     *     responses:
     *       200:
     *         description: Successfully updated
     *         schema:
     *            $ref: "#/definitions/Job"
     */
    .put((req, res) => {
      jobsController.update(req.body, req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /jobs/{id}:
     *   delete:
     *     tags:
     *       - Jobs
     *     summary: Removes job from DB
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Job identifier
     *         required: true
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .delete((req, res) => {
      jobsController.deleteById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  return jobsRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
