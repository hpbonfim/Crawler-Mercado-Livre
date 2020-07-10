const { createCore } = require('../backend/core/core')

describe('createCore function está sendo importado', () => {
    test('Deve conter os serviços @startService, @stopService ', () => {
        const core = createCore()
        expect(core).toHaveProperty('startService')
        expect(core).toHaveProperty('stopService')
    })
})

describe('createCore function quando inicializado', () => {
    test('Os serviços @startService, @stopService não devem retornar erros ', () => {
        const core = createCore()
        expect(() => { core.startService() }).not.toThrow()
        expect(() => { core.stopService() }).not.toThrow()
    })
})