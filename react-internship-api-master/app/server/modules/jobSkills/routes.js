'use strict';

const express = require('express');
const jobSkillsRouter = express.Router();
const jobSkillsController = require('./controller');

const PATH = "/jobskills";

/**
 * @swagger
 *  definitions:
 *    JobSkill:
 *      type: object
 *      required:
 *        - skillId
 *        - jobId
 *      properties:
 *        id:
 *          type: number
 *        skillId:
 *          type: number
 *          example: 1
 *        jobId:
 *          type: number
 *          example: 1
 *        rating:
 *          type: number
 *          example: 5
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
   * /jobskills/job/{jobId}:
   *   get:
   *     tags:
   *       - JobSkills
   *     summary: Receive all job skills available for a certain job
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
   *            $ref: "#/definitions/JobSkill"
   */
  jobSkillsRouter.get('/job/:jobId', (req, res) => {
    console.log('xxx');
    jobSkillsController.findByJobId(req.params.jobId)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  });

  jobSkillsRouter.route('/')
  /**
   * @swagger
   * /jobskills:
   *   post:
   *     tags:
   *       - JobSkills
   *     summary: Create a new job skill
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/JobSkill'
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *            $ref: "#/definitions/JobSkill"
   */
    .post((req, res) => {
      jobSkillsController.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  jobSkillsRouter.route('/:id')
  /**
   * @swagger
   * /jobskills/{id}:
   *   get:
   *     tags:
   *       - JobSkills
   *     summary: Find information for a specific job skill
   *     produces: application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         description: Job skill identifier
   *         required: true
   *     responses:
   *       200:
   *         description: Successfully received
   *         schema:
   *            $ref: "#/definitions/JobSkill"
   */
    .get((req, res) => {
      jobSkillsController.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /jobskills/{id}:
     *   put:
     *     tags:
     *       - JobSkills
     *     summary: Update information for a single job skill
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: JobSkill identifier
     *         required: true
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *          $ref: '#/definitions/JobSkill'
     *     responses:
     *       200:
     *         description: Successfully updated
     *         schema:
     *            $ref: "#/definitions/JobSkill"
     */
    .put((req, res) => {
      jobSkillsController.update(req.body, req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /jobskills/{id}:
     *   delete:
     *     tags:
     *       - JobSkills
     *     summary: Removes job from DB
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: JobSkill identifier
     *         required: true
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .delete((req, res) => {
      jobSkillsController.deleteById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  return jobSkillsRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
