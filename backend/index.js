const { createCore } = require('./core/index')

const core = createCore()

exports.systemControl = () => {
    startService = () => {
        try {
            core.startService()
        } catch (error) {
            return stopService()
        }
    }

    stopService = () => {
        try {
            core.stopService()
        } catch (error) {
            return errorService(error)
        }
    }

    errorService = (error) => {
        console.error(error)
        process.exit(1)
    }

    return {
        startService,
        stopService,
        errorService
    }
}
