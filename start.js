const { systemControl } = require('./backend/system')

systemControl().startService()
process.on('SIGINT', () => systemControl().stopService()) // await for close services