'use strict';

const express = require('express');
const contactsRouter = express.Router();
const contactsController = require('./controller');

const PATH = "/contacts";

/**
 * @swagger
 *  definitions:
 *    ContactInfo:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        email:
 *          type: string
 *          example: "vlad.tomsa@arobs.com"
 *        phone:
 *          type: string
 *          example: '+40711133322'
 *        address:
 *          type: string
 *          example: 'str. Henry Barbusse, nr 44-46'
 *        city:
 *          type: string
 *          example: 'Cluj Napoca'
 *        countryId:
 *          type: number
 *          example: 153 // for Romania (see Countries table in DB)
 *        website:
 *          type: string
 *          example: 'http://www.arobs.com'
 *        avatarUrl:
 *          type: string
 *          example: 'http://www.arobs.com/fileadmin/emb/logoArobs.png'
 *        about:
 *          type: string
 *          example: 'something about me'
 *        createdAt:
 *          type: string
 *          format: date
 *        updatedAt:
 *          type: string
 *          format: date
 */
let router = () => {
  contactsRouter.route('/')
  /**
   * @swagger
   * /contacts:
   *   get:
   *     tags:
   *       - Contacts
   *     summary: Returns all contacts
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: An array of contacts
   *         schema:
   *           $ref: "#/definitions/ContactInfo"
   */
    .get((req, res) => {
      contactsController.find({})
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
  /**
   * @swagger
   * /contacts:
   *   post:
   *     tags:
   *       - Contacts
   *     summary: Create a new contact
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/ContactInfo'
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *            $ref: "#/definitions/ContactInfo"
   */
    .post((req, res) => {
      contactsController.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  contactsRouter.route('/:id')
    /**
     * @swagger
     * /contacts/{id}:
     *   get:
     *     tags:
     *       - Contacts
     *     summary: Find information for a single contact
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Contact's identifier
     *         required: true
     *     responses:
     *       200:
     *         description: Successfully received
     *         schema:
     *            $ref: "#/definitions/ContactInfo"
     */
    .get((req, res) => {
      contactsController.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /contacts/{id}:
     *   put:
     *     tags:
     *       - Contacts
     *     summary: Update information for a single contact
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: The current contact identifier
     *         required: true
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *          $ref: '#/definitions/ContactInfo'
     *     responses:
     *       200:
     *         description: Successfully received
     *         schema:
     *            $ref: "#/definitions/ContactInfo"
     */
    .put((req, res) => {
      contactsController.update(req.body, req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    })
    /**
     * @swagger
     * /contacts/{id}:
     *   delete:
     *     tags:
     *       - Contacts
     *     summary: Removes contact from DB
     *     produces: application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Contact's identifier
     *         required: true
     *     schema:
     *        $ref: '#/definitions/ContactInfo'
     *     responses:
     *       200:
     *         description: Successfully received (1 true, 0 false)
     */
    .delete((req, res) => {
      contactsController.deleteById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json(error));
    });

  contactsRouter.post('/find', (req, res) => {
    contactsController.find(req.body)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json(error));
  });

  return contactsRouter;
};

module.exports.route = router();
module.exports.PATH = PATH;
