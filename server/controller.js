
const housesDB = require('./db.json')

let houseID = 4;

const getHouses = (request, respond) => {
    respond.status(200).send(housesDB)
}

const deleteHouse = (request, respond) => {
    
    const { id } = request.params
    
    let index = housesDB.findIndex((item) => item.id === +id)

    if(index != -1){
        housesDB.splice(index, 1)
        respond.status(200).send(housesDB)
    }
}

const createHouse = (request, respond) => {
    let newHouse = {...request.body,id: houseID}
    housesDB.push(newHouse)
    respond.status(200).send(housesDB)
    houseID++
}


/*Build out the functionality for your updateHouse function. It should capture the id from your endpoints params so that you know which house to update. It should also capture type off of req.body. Type is a string and could either be ‘plus’ or ‘minus’. Next, find the index of your house in the houses array by iterating through the houses array and locating the house with the correct id (I reccomend the findIndex method). Once you have the index of the house you should be updating, use a sequce of conditional checks to see if the type is ‘minus’ or ‘plus’, and then decrease or increase the price of the hosue by $10,000. Once complete, send all the houses to the front-end so you can update the views.*/

const updateHouse = (request, respond) => {
    const { id } = request.params
    const {type} = request.body
    let index = housesDB.findIndex((item) => item.id === +id)
    if(housesDB[index].price <= 9999 && type === 'minus'){
        housesDB[index].price = 0
        respond.status(200).send(housesDB)
    }
    if(type === 'minus') {
      housesDB[index].price -= 10000 
      respond.status(200).send(housesDB)
    } else if (type === 'plus') {
        housesDB[index].price += 10000
        respond.status(200).send(housesDB)
    }
}


module.exports = {
    getHouses,
    deleteHouse,
    createHouse,
    updateHouse
}