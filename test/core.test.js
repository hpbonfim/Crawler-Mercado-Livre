const { createCore } = require('../backend/core/index')

describe('A function core está sendo importado', () => {
    test('Deve conter o method @startService, @stopService e @errorService ', () => {
        const core = createCore();
        expect(core).toHaveProperty('startService')
        expect(core).toHaveProperty('stopService')
        expect(core).toHaveProperty('errorService')

    })
})

describe('A function core quando inicializado', () => {
    test('Não deve retornar erros ', () => {
        const core = createCore();
        expect(() => { core.startService() }).not.toThrow()
        expect(() => { core.stopService() }).not.toThrow()
    })
})