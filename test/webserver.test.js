const { serverControl } = require('../backend/core/server/index')

describe('A function webserver está sendo importado', () => {
    test('Deve conter o method @startService e @stopService ', () => {
        const webserver = serverControl();
        expect(webserver).toHaveProperty('startService')
        expect(webserver).toHaveProperty('stopService')
    })
})

describe('webserver quando inicializado', () => {
    test('Não deve retornar erros ', () => {
        const webserver = serverControl();
        expect(() => {
            webserver.startService()
        }).not.toThrow()
        expect(() => {
            webserver.stopService()
        }).not.toThrow()
    })
})