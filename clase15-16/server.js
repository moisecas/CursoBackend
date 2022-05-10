import express from 'express'

const app = express()

app.get('/', (req, res) => {

})

app.listen(3000, () => {
    console.log('Server on port 3000')
})