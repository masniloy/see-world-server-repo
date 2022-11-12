const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.g924zd8.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const client2 = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v2 });

async function run() {
    try {
        const services = client.db('SeeWorld').collection('Services')
        const service = client2.db('SeeWorld').collection('Service')
        app.get('/Services', async (req, res) => {
            const query = {}
            const cursor = services.find(query);
            const Services = await cursor.toArray();
            res.send(Services);
        })

        app.get("/Service/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const Service = await service.findOne(query);
            res.send(Service);
        });

    }
    finally {

    }

}
run().catch(err => console.log(err));



// async function run() {
//     try {
//         const service = client.db('SeeWorld').collection('Service')
//         app.get('/Service/:_id', async (req, res) => {
//             const _id = req.params._id
//             const query = { _id: Object(_id) };
//             const cursor = service.find(query);
//             const Service = await cursor.toArray(query);
//             res.send(Service);
//         })
//     }
//     finally {

//     }

// }



app.get('/', (req, res) => {
    res.send('ok');
})

app.listen(port, () => {
    console.log('port :', port);
})