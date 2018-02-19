'use strict';

const express = require('express');
const skillsRouter = express.Router();
const skillsController = require('./controller');

const PATH = "/skills";

/**
 * @swagger
 *  definitions:
 *    Skill:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        id:
 *          type: number
 *        name:
 *          type: number
 *          example: 'JavaScript'
 *        createdAt:
 *          type: string
 *          format: date
 *        updatedAt:
 *          type: string
 *          format: date
 */
let router = () => {
  skillsRouter.route('/')
  /**
   * @swagger
   * /skills:
   *   get:
   *     tags:
   *       - Skills
   *     summary: Receive all available skills
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *            $ref: "#/definitions/Skill"
   */
    .get((req, res) => {
      skillsController.find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
  /**
   * @swagger
   * /skills:
   *   post:
   *     tags:
   *       - Skills
   *     summary: Create a new skill
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Skill'
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *            $ref: "#/definitions/Skill"
   */
    .post((req, res) => {
      skillsController.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  skillsRouter.route('/:id')
  /**
   * @swagger
   * /skills/{id}:
   *   get:
   *     tags:
   *       - Skills
   *     summary: Find information for a specific skill
   *     produces: application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         description: skill identifier
   *         required: true
   *     responses:
   *       200:
   *         description: Successfully received
   *         schema:
   *            $ref: "#/definitions/Skill"
   */
    .get((req, res) => {
      skillsController.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /skills/{id}:
     *   put:
     *     tags:
     *       - Skills
     *     summary: Update information for a single skill
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Skill identifier
     *         required: true
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *          $ref: '#/definitions/Skill'
     *     responses:
     *       200:
     *         description: Successfully updated
     *         schema:
     *            $ref: "#/definitions/Skill"
     */
    .put((req, res) => {
      skillsController.update(req.body, req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /skills/{id}:
     *   delete:
     *     tags:
     *       - Skills
     *     summary: Removes skill from DB
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Skill identifier
     *         required: true
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .delete((req, res) => {
      skillsController.deleteById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  return skillsRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
