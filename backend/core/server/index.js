exports.serverControl = () => {
    startService = () => {

        console.log(`${new Date().toLocaleString('pt-BR')} | initiate the webserver...`)

        try {
            console.log(`${new Date().toLocaleString('pt-BR')} | [webserver] the webserver it's running...`)
        } catch (error) {
            throw error

        }
    }

    stopService = () => {
        try {
            console.log(`${new Date().toLocaleString('pt-BR')} | stopping the webserver...`)
        } catch (error) {
            throw error
        }
    }

    return {
        startService,
        stopService
    }
}
