exports.databaseControl = () => {
    startService = () => {
        console.log(`${new Date().toLocaleString('pt-BR')} | initiate the database...`)
        try {
            console.log(`${new Date().toLocaleString('pt-BR')} | [database] the database it's running...`)
        } catch (error) {
            throw error
        }
    }

    stopService = () => {
        try {
            console.log(`${new Date().toLocaleString('pt-BR')} | stopping the database...`)
        } catch (error) {
            throw error
        }
    }

    return {
        startService,
        stopService
    }
}
