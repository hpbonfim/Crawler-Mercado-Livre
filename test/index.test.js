const { systemControl } = require('../backend/index')

describe('Dentro da pasta Backend, o arquivo index.js está sendo importado', () => {
    test('Deve conter o method @startService, @stopService e @errorService ', () => {
        const index = systemControl()
        expect(index).toHaveProperty('startService')
        expect(index).toHaveProperty('stopService')
        expect(index).toHaveProperty('errorService')
    })
})

describe('O arquivo index.js quando inicializado', () => {
    test('Não deve retornar erros ', () => {
        const index = systemControl()
        expect(() => { index.startService() }).not.toThrow()
        expect(() => { index.stopService() }).not.toThrow()
    })
})