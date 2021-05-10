const express = require ( 'express' );
const router = express.Router();
const controllers = require('../controllers/controllers')


router.get('/', controllers.home);
router.get('/detail/:id',controllers.detail)


module.exports =router;