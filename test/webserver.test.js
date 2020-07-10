const { serverControl } = require('../backend/core/server/express')

describe('serverControl function está sendo importado', () => {
    test('Deve conter os serviços @startService e @stopService ', () => {
        const webserver = serverControl()
        expect(webserver).toHaveProperty('startService')
        expect(webserver).toHaveProperty('stopService')
    })
})

describe('serverControl function quando inicializado', () => {
    test('Os serviços @startService, @stopService não devem retornar erros ', () => {
        const webserver = serverControl()
        expect(() => { webserver.startService() }).not.toThrow()
        expect(() => { webserver.stopService() }).not.toThrow()
    })
})