const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 3000;
const carsData = require("./cars.json")


app.use(cors());

    app.listen(PORT, () =>{
        console.log(`run in port ${PORT}`);
    })

app.get("/", (req, res) =>{
        res.send({response: true, carsData})
    })


app.get("/:id", (req, res) => {
        const {id} = req.params
        const result = carsData.filter(cars => cars.cars._id === id)
        res.send({response: true, carsData1: result})
    }) // review