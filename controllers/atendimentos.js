module.exports = app => {
    app.get('/atendimento', (req, res) => 
        res.send('Você esta na rota de atendimentos e está realizando um GET'))

    app.post('/atendimento', (req,res) => {
        console.log(req.body)
        res.send("Voçê esta na rota de atendimento e está realizando um POST")
    })
}