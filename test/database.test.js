const { databaseControl } = require('../backend/core/database/index')

describe('a function database está sendo importado', () => {
    test('Deve conter o method @start e @end ', () => {
        const database = databaseControl();
        expect(database).toHaveProperty('startService')
        expect(database).toHaveProperty('stopService')
    })
})

describe('A function database quando inicializado', () => {
    test('Não deve retornar erros ', () => {
        const database = databaseControl();
        expect(() => {
            database.startService()
        }).not.toThrow()
        expect(() => {
            database.stopService()
        }).not.toThrow()
    })
})