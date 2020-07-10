const { systemControl } = require('../backend/system')

describe('systemControl function está sendo importado', () => {
    test('Deve conter os serviços @startService e @stopService ', () => {
        const index = systemControl()
        expect(index).toHaveProperty('startService')
        expect(index).toHaveProperty('stopService')
    })
})

describe('systemControl function quando inicializado', () => {
    test('Os serviços @startService, @stopService não devem retornar erros ', () => {
        const index = systemControl()
        expect(() => { index.startService() }).not.toThrow()
        expect(() => { index.stopService() }).not.toThrow()
    })
})