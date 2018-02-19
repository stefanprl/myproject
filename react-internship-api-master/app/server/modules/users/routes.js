'use strict';

const express = require('express');
const usersRouter = express.Router();
const userController = require('./controller');

const PATH = "/users";

/**
 * @swagger
 *  definitions:
 *    Login:
 *      type: object
 *      required:
 *        - username
 *        - password
 *      properties:
 *        username:
 *          type: string
 *        password:
 *          type: string
 *    User:
 *      type: object
 *      required:
 *        - username
 *        - userRoleId
 *      properties:
 *        id:
 *          type: number
 *        username:
 *          type: string
 *          example: "Bob"
 *        firstName:
 *          type: string
 *          example: "Bob"
 *        lastName:
 *          type: string
 *          example: "Bobulescu"
 *        password:
 *          type: string
 *          example: "Qwerty123!@#"
 *        userRoleId:
 *          type: integer
 *          enum:
 *          - "1 - Admin"
 *          - "2 - Company User"
 *          - "3 - User"
 *          example: 3
 *        createdAt:
 *          type: string
 *          format: date
 *        updatedAt:
 *          type: string
 *          format: date
 *        contactInfo:
 *          $ref: "#/definitions/ContactInfo"
 *        userRoleInfo:
 *          $ref: "#/definitions/UserRole"
 *        companyInfoList:
 *          type: array
 *          items:
 *            $ref: "#/definitions/Company"
 *        userWorkExperienceInfoList:
 *          type: array
 *          items:
 *            $ref: "#/definitions/UserWorkExperience"
 *        userEducationInfoList:
 *          type: array
 *          items:
 *            $ref: "#/definitions/UserEducation"
 */
let router = () => {
  usersRouter.route('/')
    /**
     * @swagger
     * /users:
     *   get:
     *     tags:
     *       - Users
     *     summary: Returns all users
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of users
     *         schema:
     *           $ref: '#/definitions/User'
     */
    .get((req, res) => {
      userController.find({})
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /users:
     *   post:
     *     tags:
     *       - Users
     *     summary: Create a new user
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/User'
     *     responses:
     *       200:
     *         description: Successfully created
     *         schema:
     *            $ref: "#/definitions/User"
     */
    .post((req, res) => {
      userController.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  usersRouter.route('/:id/:deep?')
    /**
     * @swagger
     * /users/{id}/{deep}:
     *   get:
     *     tags:
     *       - Users
     *     summary: Find information for a single user
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: The current user's identifier
     *         required: true
     *       - name: deep
     *         in: path
     *         description: Perform deep search to retrieve all the associated objects
     *         required: false
     *     responses:
     *       200:
     *         description: Successfully received
     *         schema:
     *            $ref: "#/definitions/User"
     */
    .get((req, res) => {
      userController.findById(req.params.id, req.params.deep)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     tags:
     *       - Users
     *     summary: Update information for a single user
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: The current user's identifier
     *         required: true
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *          $ref: '#/definitions/User'
     *     responses:
     *       200:
     *         description: Successfully updated
     *         schema:
     *            $ref: "#/definitions/User"
     */
    .put((req, res) => {
      userController.update(req.body, req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
      })
    /**
     * @swagger
     * /users/{id}:
     *   delete:
     *     tags:
     *       - Users
     *     summary: Removes user from DB
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: The current user's identifier
     *         required: true
     *     schema:
     *        $ref: '#/definitions/User'
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .delete((req, res) => {
      userController.deleteById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  /**
   * @swagger
   * /users/find:
   *   post:
   *     tags:
   *       - Users
   *     summary: Find information for a single user based on search criteria
   *     produces: application/json
   *     parameters:
   *       - name: searchCriteria
   *         in: body
   *         description: User related properties
   *         schema:
   *            $ref: "#/definitions/User"
   *     responses:
   *       200:
   *         description: Successfully received
   *         schema:
   *            $ref: "#/definitions/User"
   */
  usersRouter.post('/find', (req, res) => {
    userController.find(req.body)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  });

  /**
   * @swagger
   * /users/login:
   *   post:
   *     tags:
   *       - Users
   *     summary: Perform login
   *     produces: application/json
   *     parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *          $ref: "#/definitions/Login"
   *     responses:
   *       200:
   *         description: Successfully received
   *         schema:
   *            $ref: "#/definitions/User"
   */
  usersRouter.post('/login', function(req, res) {
    userController.login(req.body)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  });

  return usersRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
