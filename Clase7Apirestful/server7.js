
/**
 * crud
 * create : create ==> post
 * read : read ==> get
 * update : update ==> put
 * delete : delete ==> delete
 */
 const express = require('express')
 const app = express()
 
 app.get('/api/:user/mensaje/:id', (req, res) => {
   const { params } = req
 
   console.log(params)
   res.json({ mensaje: 'get' })
 })
 
 app.post('/post', (req, res) => {
   res.json({ mensaje: 'post' })
 })
 
 app.put('/put', (req, res) => {
   res.json({ mensaje: 'put' })
 })
 app.delete('/delete', (req, res) => {
   res.json({ mensaje: 'delete' })
 })

 const PORT = 8080

 const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })
 

