'use strict';

const express = require('express');
const userJobApplicationsRouter = express.Router();
const userJobApplicationsController = require('./controller');

const PATH = "/userjobapplications";

/**
 * @swagger
 *  definitions:
 *    UserJobApplication:
 *      type: object
 *      required:
 *        - jobId
 *        - userId
 *      properties:
 *        id:
 *          type: number
 *        jobId:
 *          type: number
 *          example: 1
 *        userId:
 *          type: number
 *          example: 1
 *        isAccepted:
 *          type: boolean
 *          example: false
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
   * /userjobapplications/user/{userId}:
   *   get:
   *     tags:
   *       - UserJobApplications
   *     summary: See all the jobs that a certain user applied for
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
   *            $ref: "#/definitions/UserJobApplication"
   */
  userJobApplicationsRouter.get('/user/:userId', (req, res) => {
    userJobApplicationsController.findByUserId(req.params.userId)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  });

  /**
   * @swagger
   * /userjobapplications/job/{jobId}:
   *   get:
   *     tags:
   *       - UserJobApplications
   *     summary: See all the users that applied for a certain job
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
   *            $ref: "#/definitions/UserJobApplication"
   */
  userJobApplicationsRouter.get('/job/:jobId', (req, res) => {
    userJobApplicationsController.findByJobId(req.params.jobId)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  });

  userJobApplicationsRouter.route('/')
  /**
   * @swagger
   * /userjobapplications:
   *   post:
   *     tags:
   *       - UserJobApplications
   *     summary: Apply for a job
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/UserJobApplication'
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *            $ref: "#/definitions/UserJobApplication"
   */
    .post((req, res) => {
      userJobApplicationsController.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  userJobApplicationsRouter.route('/:id')
    /**
     * @swagger
     * /userjobapplications/{id}:
     *   put:
     *     tags:
     *       - UserJobApplications
     *     summary: Update information for a application [used only when accepting a candidate]
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: UserJobApplication identifier
     *         required: true
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *          $ref: '#/definitions/UserJobApplication'
     *     responses:
     *       200:
     *         description: Successfully updated
     *         schema:
     *            $ref: "#/definitions/UserJobApplication"
     */
    .put((req, res) => {
      userJobApplicationsController.update(req.body, req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /userjobapplications/{id}:
     *   delete:
     *     tags:
     *       - UserJobApplications
     *     summary: Removes application from DB
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: UserJobApplication identifier
     *         required: true
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .delete((req, res) => {
      userJobApplicationsController.deleteById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  return userJobApplicationsRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
