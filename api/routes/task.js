const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');
const checkAuth = require('../middleware/check-auth');

/* @GET(/api/rest/v1/todo/task/getalltask) */
router.get('/getalltask', taskController.getAllTask);

/* @POST(/api/rest/v1/todo/task/create) */
router.post('/create', taskController.addNewTask);

/* @PATCH(/api/rest/v1/todo/task/edit) */
router.patch('/edit', taskController.editExistingTask);

/* @DELETE(/api/rest/v1/todo/task/delete) */
router.delete('/delete', taskController.deleteTask);

/* @POST(/api/rest/v1/todo/task/status) */
router.post('/status', taskController.changeStatus);

/* @POST(/api/rest/v1/todo/task/share) */
router.post('/share', taskController.shareToOtherUser);

/* @POST(/api/rest/v1/todo/task/specificrecord) */
router.post('/specificrecord', taskController.getSpecificTask);

module.exports = router;