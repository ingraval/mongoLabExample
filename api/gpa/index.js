'use strict';

// Defining the "classes" API module
// =======================================


var express = require('express');
var controller = require('./gpa.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/:gpa_id', controller.destroy);

module.exports = router;