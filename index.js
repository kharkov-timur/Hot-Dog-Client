// process.env.NODE_ENV != 'production' ? require('dotenv').config() : null

const express = require('express')
const app = express()
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public/assets'))

require('./server/database')

const posts = require('./server/routes/posts')
app.use('/posts', posts)

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, () => {
  console.log('Server started on port ' + port)
})
