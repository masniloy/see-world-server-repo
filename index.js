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

async function run() {
    try {
        const services = client.db('SeeWorld').collection('Services')
        app.get('/Services', async (req, res) => {
            const query = {}
            const cursor = services.find(query);
            const Services = await cursor.toArray();
            res.send(Services);
        })
    }
    finally {

    }

}
run().catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('ok');
})

app.listen(port, () => {
    console.log('port :', port);
})