const express = require ( 'express' );
const router = express.Router();
const controllers = require('../controllers/home_controllers')


router.get('/', controllers.home)

module.exports =router;