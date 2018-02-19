'use strict';

const express = require('express');
const userEducationsRouter = express.Router();
const userEducationsController = require('./controller');

const PATH = "/usereducations";

/**
 * @swagger
 *  definitions:
 *    UserEducation:
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
 *          example: 'Univ. Tehnica Cluj Napoca - Telecomunicatii'
 *        description:
 *          type: string
 *          example: 'Bits ... bits everywhere'
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
   * /usereducations/user/{userId}:
   *   get:
   *     tags:
   *       - UserEducations
   *     summary: Receive all user educations available for a certain user
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
   *            $ref: "#/definitions/UserEducation"
   */
  userEducationsRouter.get('/user/:userId', (req, res) => {
    userEducationsController.findByUserId(req.params.userId)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  });

  userEducationsRouter.route('/')
  /**
   * @swagger
   * /usereducations:
   *   post:
   *     tags:
   *       - UserEducations
   *     summary: Create a new user education
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/UserEducation'
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *            $ref: "#/definitions/UserEducation"
   */
    .post((req, res) => {
      userEducationsController.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  userEducationsRouter.route('/:id')
  /**
   * @swagger
   * /usereducations/{id}:
   *   get:
   *     tags:
   *       - UserEducations
   *     summary: Find information for a specific user education
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
   *            $ref: "#/definitions/UserEducation"
   */
    .get((req, res) => {
      userEducationsController.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /usereducations/{id}:
     *   put:
     *     tags:
     *       - UserEducations
     *     summary: Update information for a single user education
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: UserEducation identifier
     *         required: true
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *          $ref: '#/definitions/UserEducation'
     *     responses:
     *       200:
     *         description: Successfully updated
     *         schema:
     *            $ref: "#/definitions/UserEducation"
     */
    .put((req, res) => {
      userEducationsController.update(req.body, req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /usereducations/{id}:
     *   delete:
     *     tags:
     *       - UserEducations
     *     summary: Removes user from DB
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: UserEducation identifier
     *         required: true
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .delete((req, res) => {
      userEducationsController.deleteById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  return userEducationsRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
