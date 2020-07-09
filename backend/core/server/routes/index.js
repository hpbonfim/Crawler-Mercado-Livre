const controller = require('../controller/crawler')
const express = require("express")
const router = express.Router()

router.post("/", controller.crawlerService)

module.exports = router