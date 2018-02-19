'use strict';

const express = require('express');
const userSkillsRouter = express.Router();
const userSkillsController = require('./controller');

const PATH = "/userskills";

/**
 * @swagger
 *  definitions:
 *    UserSkill:
 *      type: object
 *      required:
 *        - skillId
 *        - userId
 *      properties:
 *        id:
 *          type: number
 *        skillId:
 *          type: number
 *          example: 1
 *        userId:
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
   * /userskills/user/{userId}:
   *   get:
   *     tags:
   *       - UserSkills
   *     summary: Receive all user skills available for a certain user
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: userId
   *         in: path
   *         required: true
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *            $ref: "#/definitions/UserSkill"
   */
  userSkillsRouter.get('/user/:userId', (req, res) => {
    userSkillsController.findByUserId(req.params.userId)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  });

  /**
   * @swagger
   * /userskills/skill/{skillId}/users:
   *   get:
   *     tags:
   *       - UserSkills
   *     summary: Receive all users that have a specific skill
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: skillId
   *         in: path
   *         required: true
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *            $ref: "#/definitions/UserSkill"
   */
  userSkillsRouter.get('/skill/:skillId/users', (req, res) => {
    userSkillsController.findUsersBySkillId(req.params.skillId)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  });

  userSkillsRouter.route('/')
  /**
   * @swagger
   * /userskills:
   *   post:
   *     tags:
   *       - UserSkills
   *     summary: Create a new user skill
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/UserSkill'
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *            $ref: "#/definitions/UserSkill"
   */
    .post((req, res) => {
      userSkillsController.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  userSkillsRouter.route('/:id')
  /**
   * @swagger
   * /userskills/{id}:
   *   get:
   *     tags:
   *       - UserSkills
   *     summary: Find information for a specific user skill
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
   *            $ref: "#/definitions/UserSkill"
   */
    .get((req, res) => {
      userSkillsController.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /userskills/{id}:
     *   put:
     *     tags:
     *       - UserSkills
     *     summary: Update information for a single user skill
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: UserSkill identifier
     *         required: true
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *          $ref: '#/definitions/UserSkill'
     *     responses:
     *       200:
     *         description: Successfully updated
     *         schema:
     *            $ref: "#/definitions/UserSkill"
     */
    .put((req, res) => {
      userSkillsController.update(req.body, req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /userskills/{id}:
     *   delete:
     *     tags:
     *       - UserSkills
     *     summary: Removes user from DB
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: UserSkill identifier
     *         required: true
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .delete((req, res) => {
      userSkillsController.deleteById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  return userSkillsRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
