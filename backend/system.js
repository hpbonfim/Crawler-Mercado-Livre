const { createCore } = require('./core/core')
const core = createCore()

exports.systemControl = () => {
    
    startService = () =>  core.startService()
    stopService = () => core.stopService()

    return {
        startService,
        stopService
    }
}