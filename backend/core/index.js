const { databaseControl } = require('./database/index')
const { serverControl } = require('./server/index')

const database = databaseControl()
const server = serverControl()

exports.createCore = () => {


    startService = () => {
        console.log("\x1b[36m",`${new Date().toLocaleString('pt-BR')} | initiate the core...`)
        try {
            console.log(`${new Date().toLocaleString('pt-BR')} | [core] the core it's running...`)
            database.startService()
            server.startService()
        }
        catch (error) {
            return stopService()
        }
    }


    stopService = () => {
        console.log("\x1b[33m",`${new Date().toLocaleString('pt-BR')} | initiate the shutdown`)
        try {
            database.stopService()
            server.stopService()
            console.log("\x1b[31m",`${new Date().toLocaleString('pt-BR')} | core closed`)
        }
        catch (error) {
            return errorService(error)
        }

    }

    errorService = (err) => {
        console.error(err)
        process.exit(1)
    }

    return {
        startService,
        stopService,
        errorService
    }
}
