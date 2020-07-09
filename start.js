const { systemControl } = require('./backend/index')

try {
    // TODO
    systemControl().startService()
    process.on('SIGINT', () => systemControl().stopService())
}
catch (error) {
    systemControl().errorService(error)
}
