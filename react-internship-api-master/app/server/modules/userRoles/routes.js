'use strict';

const express = require('express');
const userRolesRouter = express.Router();
const userRolesController = require('./controller');

const PATH = "/userroles";

/**
 * @swagger
 *  definitions:
 *    UserRole:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        id:
 *          type: number
 *        name:
 *          type: string
 *          example: "Company administrator"
 *        createdAt:
 *          type: string
 *          format: date
 *        updatedAt:
 *          type: string
 *          format: date
 */
let router = () => {
  userRolesRouter.route('/')
  /**
   * @swagger
   * /userroles:
   *   get:
   *     tags:
   *       - UserRoles
   *     summary: Returns all user roles
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: An array of user roles
   *         schema:
   *           $ref: '#/definitions/UserRole'
   */
    .get((req, res) => {
      userRolesController.find({})
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /userroles:
     *   post:
     *     tags:
     *       - UserRoles
     *     summary: Create a new user
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/UserRole'
     *     responses:
     *       200:
     *         description: Successfully created
     *         schema:
     *            $ref: "#/definitions/UserRole"
     */
    .post((req, res) => {
      userRolesController.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  userRolesRouter.route('/:id/:deep?')
  /**
   * @swagger
   * /userroles/{id}:
   *   get:
   *     tags:
   *       - UserRoles
   *     summary: Find information for a single user role
   *     produces: application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         description: The current user role identifier
   *         required: true
   *     responses:
   *       200:
   *         description: Successfully received
   *         schema:
   *            $ref: "#/definitions/UserRole"
   */
    .get((req, res) => {
      userRolesController.findById(req.params.id, req.params.deep)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /userroles/{id}:
     *   delete:
     *     tags:
     *       - UserRoles
     *     summary: Removes user role from DB
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: The current user role identifier
     *         required: true
     *     schema:
     *        $ref: '#/definitions/UserRole'
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .delete((req, res) => {
      userRolesController.deleteById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  userRolesRouter.post('/find', (req, res) => {
    userRolesController.find(req.body)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  });

  return userRolesRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
