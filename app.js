
const express = require('express')
const climaService = require('./clima-service')

const app = new express()

app.get('/clima', async (req, res) => {
    let cidades = await climaService.cidades('Brazil')

    res.send(cidades)
})

app.listen(3000, () => console.log('Serviço rodando na porta 3000'))