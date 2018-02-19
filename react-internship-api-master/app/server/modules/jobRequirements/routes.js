'use strict';

const express = require('express');
const jobRequirementsRouter = express.Router();
const jobRequirementsController = require('./controller');

const PATH = "/jobrequirements";

/**
 * @swagger
 *  definitions:
 *    JobRequirement:
 *      type: object
 *      required:
 *        - name
 *        - jobId
 *      properties:
 *        id:
 *          type: number
 *        name:
 *          type: string
 *          example: "Minimum 3 years of JS"
 *        jobId:
 *          type: number
 *          example: 1
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
   * /jobrequirements/job/{jobId}:
   *   get:
   *     tags:
   *       - JobRequirements
   *     summary: Receive all job requirements available for a certain job
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: jobId
   *         in: path
   *         required: true
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *            $ref: "#/definitions/JobRequirement"
   */
  jobRequirementsRouter.get('/job/:jobId', (req, res) => {
      jobRequirementsController.findByJobId(req.params.jobId)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  jobRequirementsRouter.route('/')
    /**
     * @swagger
     * /jobrequirements:
     *   post:
     *     tags:
     *       - JobRequirements
     *     summary: Create a new job requirement
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/JobRequirement'
     *     responses:
     *       200:
     *         description: Successfully created
     *         schema:
     *            $ref: "#/definitions/JobRequirement"
     */
    .post((req, res) => {
      jobRequirementsController.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  jobRequirementsRouter.route('/:id')
  /**
   * @swagger
   * /jobrequirements/{id}:
   *   get:
   *     tags:
   *       - JobRequirements
   *     summary: Find information for a specific job requirement
   *     produces: application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         description: Job requirement identifier
   *         required: true
   *     responses:
   *       200:
   *         description: Successfully received
   *         schema:
   *            $ref: "#/definitions/JobRequirement"
   */
    .get((req, res) => {
      jobRequirementsController.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /jobrequirements/{id}:
     *   put:
     *     tags:
     *       - JobRequirements
     *     summary: Update information for a single job requirement
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: JobRequirement identifier
     *         required: true
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *          $ref: '#/definitions/JobRequirement'
     *     responses:
     *       200:
     *         description: Successfully updated
     *         schema:
     *            $ref: "#/definitions/JobRequirement"
     */
    .put((req, res) => {
      jobRequirementsController.update(req.body, req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /jobrequirements/{id}:
     *   delete:
     *     tags:
     *       - JobRequirements
     *     summary: Removes job from DB
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: JobRequirement identifier
     *         required: true
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .delete((req, res) => {
      jobRequirementsController.deleteById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  return jobRequirementsRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
