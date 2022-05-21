const express = require('express');
const cors = require('cors');
const functions = require('./controller.js')


const app = express();
app.use(express.json())
app.use(cors())

app.get('/api/houses', functions.getHouses)
app.post('/api/houses', functions.createHouse)
app.put('/api/houses/:id', functions.updateHouse)
app.delete('/api/houses/:id', functions.deleteHouse)




app.listen(4004, () => console.log(`listening to port 4004`))