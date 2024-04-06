const express = require('express');
const controllerdata = require('../controller/controllerFile.js');
const router = express.Router();


router
    .post('/', controllerdata.createModel)
    .get('/', controllerdata.getAllModels)
    .get('/:id', controllerdata.getModelById)
    .put('/:id', controllerdata.updateModel)
    .patch('/:id', controllerdata.updateSpecificModel)
    .delete('/:id', controllerdata.deleteModel);


exports.router = router;