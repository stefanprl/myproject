'use strict';

const express = require('express');
const jobBenefitsRouter = express.Router();
const jobBenefitsController = require('./controller');

const PATH = "/jobbenefits";

/**
 * @swagger
 *  definitions:
 *    JobBenefit:
 *      type: object
 *      required:
 *        - name
 *        - jobId
 *      properties:
 *        id:
 *          type: number
 *        name:
 *          type: string
 *          example: "We have a pool table"
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
   * /jobbenefits/job/{jobId}:
   *   get:
   *     tags:
   *       - JobBenefits
   *     summary: Receive all job benefits available for a certain job
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
   *            $ref: "#/definitions/JobBenefit"
   */
  jobBenefitsRouter.get('/job/:jobId', (req, res) => {
      jobBenefitsController.findByJobId(req.params.jobId)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  jobBenefitsRouter.route('/')
  /**
   * @swagger
   * /jobbenefits:
   *   post:
   *     tags:
   *       - JobBenefits
   *     summary: Create a new job benefit
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/JobBenefit'
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *            $ref: "#/definitions/JobBenefit"
   */
    .post((req, res) => {
      jobBenefitsController.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  jobBenefitsRouter.route('/:id')
  /**
   * @swagger
   * /jobbenefits/{id}:
   *   get:
   *     tags:
   *       - JobBenefits
   *     summary: Find information for a specific job benefit
   *     produces: application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         description: Job benefit identifier
   *         required: true
   *     responses:
   *       200:
   *         description: Successfully received
   *         schema:
   *            $ref: "#/definitions/JobBenefit"
   */
    .get((req, res) => {
      jobBenefitsController.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /jobbenefits/{id}:
     *   put:
     *     tags:
     *       - JobBenefits
     *     summary: Update information for a single job benefit
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: JobBenefit identifier
     *         required: true
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *          $ref: '#/definitions/JobBenefit'
     *     responses:
     *       200:
     *         description: Successfully updated
     *         schema:
     *            $ref: "#/definitions/JobBenefit"
     */
    .put((req, res) => {
      jobBenefitsController.update(req.body, req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /jobbenefits/{id}:
     *   delete:
     *     tags:
     *       - JobBenefits
     *     summary: Removes job from DB
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: JobBenefit identifier
     *         required: true
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .delete((req, res) => {
      jobBenefitsController.deleteById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  return jobBenefitsRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
