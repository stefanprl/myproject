'use strict';

const express = require('express');
const userWorkExperiencesRouter = express.Router();
const userWorkExperiencesController = require('./controller');

const PATH = "/userworkexperiences";

/**
 * @swagger
 *  definitions:
 *    UserWorkExperience:
 *      type: object
 *      required:
 *        - institution
 *        - startDate
 *        - endDate
 *        - userId
 *      properties:
 *        id:
 *          type: number
 *        userId:
 *          type: number
 *          example: 1
 *        institution:
 *          type: string
 *          example: 'AROBS'
 *        description:
 *          type: string
 *          example: 'Making buttons red or blue'
 *        startDate:
 *          type: string
 *          format: date
 *          example: '2009-09-01'
 *        endDate:
 *          type: string
 *          format: date
 *          example: '2013-09-01'
 */
let router = () => {
  /**
   * @swagger
   * /userworkexperiences/user/{userId}:
   *   get:
   *     tags:
   *       - UserWorkExperiences
   *     summary: Receive all user work experiences available for a certain user
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
   *            $ref: "#/definitions/UserWorkExperience"
   */
  userWorkExperiencesRouter.get('/user/:userId', (req, res) => {
    userWorkExperiencesController.findByUserId(req.params.userId)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  });

  userWorkExperiencesRouter.route('/')
  /**
   * @swagger
   * /userworkexperiences:
   *   post:
   *     tags:
   *       - UserWorkExperiences
   *     summary: Create a new user skill
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/UserWorkExperience'
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *            $ref: "#/definitions/UserWorkExperience"
   */
    .post((req, res) => {
      userWorkExperiencesController.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  userWorkExperiencesRouter.route('/:id')
  /**
   * @swagger
   * /userworkexperiences/{id}:
   *   get:
   *     tags:
   *       - UserWorkExperiences
   *     summary: Find information for a specific user work experience
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
   *            $ref: "#/definitions/UserWorkExperience"
   */
    .get((req, res) => {
      userWorkExperiencesController.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /userworkexperiences/{id}:
     *   put:
     *     tags:
     *       - UserWorkExperiences
     *     summary: Update information for a single user work experience
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: UserWorkExperience identifier
     *         required: true
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *          $ref: '#/definitions/UserWorkExperience'
     *     responses:
     *       200:
     *         description: Successfully updated
     *         schema:
     *            $ref: "#/definitions/UserWorkExperience"
     */
    .put((req, res) => {
      userWorkExperiencesController.update(req.body, req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /userworkexperiences/{id}:
     *   delete:
     *     tags:
     *       - UserWorkExperiences
     *     summary: Removes user from DB
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: UserWorkExperience identifier
     *         required: true
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .delete((req, res) => {
      userWorkExperiencesController.deleteById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  return userWorkExperiencesRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
