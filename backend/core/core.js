const { serverControl } = require('./server/express')
const server = serverControl()

exports.createCore = () => {

    startService = () => {
        console.log("\x1b[36m", `${new Date().toLocaleString('pt-BR')} | [core] initiate service...`)
        server.startService()
        console.log(`${new Date().toLocaleString('pt-BR')} | [core] service it's running...`)
    }

    stopService = async () => {
        console.log("\x1b[33m", `${new Date().toLocaleString('pt-BR')} | [core] initiate shutdown...`)
        await server.stopService()
        console.log("\x1b[31m", `${new Date().toLocaleString('pt-BR')} | [core] closed.`)
    }

    return {
        startService,
        stopService
    }
}
