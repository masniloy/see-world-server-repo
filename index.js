const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://SeeWorldUser:F0zito2DweD9xaCA@cluster0.g924zd8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {

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