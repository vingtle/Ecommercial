const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const uploadRouter = require('./upload/router');

router.use('/api', uploadRouter);

/* ************************************************************************* */

module.exports = router;
