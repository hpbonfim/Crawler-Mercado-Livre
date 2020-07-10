const express = require('express')
const application = express()
const http = require('http')
const server = http.createServer(application)
const bodyParser = require('body-parser')
const serviceRoutes = require('./routes/index')
const cors = require('cors')
const port = 3000

application.use(bodyParser.urlencoded({ extended: false }))
application.use(bodyParser.json())
application.use("/", serviceRoutes)
application.use(cors())

exports.serverControl = () => {

    startService = () => {
        console.log(`${new Date().toLocaleString('pt-BR')} | [webserver] initiate service...`)
        try {
            server.listen(port, () => {
                console.log(`${new Date().toLocaleString('pt-BR')} | [webserver] server it's running on port: ${port}`)
            })
        } catch (error) {
            errorService(error)
        }
    }

    stopService = () => {
        console.log(`${new Date().toLocaleString('pt-BR')} | [webserver] stopping service...`)
        try {
            server.close()
            console.log(`${new Date().toLocaleString('pt-BR')} | [webserver] closed.`)
        } catch (error) {
            errorService(error)
        }
    }

    errorService = (error) => {
        console.log("\x1b[33m", `${new Date().toLocaleString('pt-BR')} | erro do sistema: ${error}`)
        process.exit(1)
    }

    return {
        startService,
        stopService
    }
}