const Crawler = require("crawler")
const cheerio = new Crawler()

exports.crawlerService = (req, res) => {

    const limit = Number(req.body.limit)
    if (isNaN(limit))
        return res.status(404).json({ error: 'Digite um número válido no campo Limite!' })

    const search = req.body.search
    if (typeof search !== "string")
        return res.status(404).json({ error: 'Digite uma palavra-chave no campo Procurar!' })


    if (search === null || search === undefined || search === "")
        return res.status(404).json({ error: 'Digite um valor válido para pesquisa' })

    if (Number(limit) <= 0)
        return res.status(404).json({ error: 'Digite um valor maior que 0 para retornar o resultado' })
    else {
        const url = `https://lista.mercadolivre.com.br/${search}`
        console.log(`${new Date().toLocaleString('pt-BR')} | [crawler service] Making request to ${url}...`)

        cheerio.queue([{
            uri: url,
            jQuery: true,
            callback: (error, response, done) => {
                if (error)
                    return res.status(500).json({ error: error })
                else {
                    const items = []
                    console.log(`${new Date().toLocaleString('pt-BR')} | [crawler service] Grabbed ${response.body.length} bytes from ${url}`)
                    response.$('.results-item').slice(0, limit).each((i, elem) => {

                        // tratamento de names
                        const nameTitle = response.$(elem).find('span.main-title').text().trim() // quando search for genérico
                        const nameSubtitle = response.$(elem).find('.item_subtitle').text().trim() // quando search = apartamento
                        const setName = nameTitle !== "" ? nameTitle : nameSubtitle

                        // tratamento do link
                        const setLink = response.$(elem).find('a').attr("href")

                        // tratamento de prices
                        const price = Number(response.$(elem).find('.item__price > .price__decimals').text().trim())
                        const chooseValue = price === 0 ? "" : `,${price}`
                        const setValue = response.$(elem).find('.item__price > .price__symbol').text().trim() +
                            response.$(elem).find('.item__price > .price__fraction').text().trim() + chooseValue

                        // tratamento do stores
                        const store = response.$(elem).find('.item__brand').text().trim()
                        const setStore = store === "" ? null : `${store}`

                        // tratamento dos states
                        const stateTitle = response.$(elem).find('.item__location').text().trim()
                        const stateSubtitle = response.$(elem).find('.item__title').text().trim()
                        let setState = ""
                        setState = nameTitle !== "" ? stateTitle : stateSubtitle
                        setState = setState === "" ? null : setState

                        const obj = {
                            id: i,
                            name: setName,
                            link: setLink,
                            price: setValue,
                            store: setStore,
                            state: setState
                        }

                        items.push(obj)
                    })
                    if (items.length == 0)
                        return res.status(404).json({ error: 'Não há anúncios que coincidam com a sua busca.' })
                    else {
                        return (
                            res.status(200).json(items),
                            done()
                        )
                    }
                }
            }
        }])
    }
}
