"use strict";

const express = require("express");
const router = express.Router();
const loginHandle = require("../handles/loginHandle");
const passwordHasherHandle = require("../handles/hashingHandle");
const validate = require("express-jsonschema").validate;
const schema = require("../util/schema");

router.post("/login", validate({body: schema.login}), loginHandle);
router.post("/util/password", validate({body: schema.password}), passwordHasherHandle);

module.exports = router;