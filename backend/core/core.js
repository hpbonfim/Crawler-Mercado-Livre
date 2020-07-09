const { serverControl } = require('./server/express')
const server = serverControl()

exports.createCore = () => {
    
    startService = async () => {
        console.log("\x1b[36m", `${new Date().toLocaleString('pt-BR')} | [core] initiate service...`)
        try {
            server.startService()
            console.log(`${new Date().toLocaleString('pt-BR')} | [core] service it's running...`)
        }
        catch (error) {
            errorService(error)
        }
    }

    stopService = async () => {
        console.log("\x1b[33m", `${new Date().toLocaleString('pt-BR')} | [core] initiate shutdown...`)
        try {
            await server.stopService()
            console.log("\x1b[31m", `${new Date().toLocaleString('pt-BR')} | [core] closed.`)
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
