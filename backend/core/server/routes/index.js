const express = require("express")
const router = express.Router()
const controller = require('../controller/crawler')

router.post("/", controller.crawlerService)

module.exports = router