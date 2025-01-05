const express = require('express');
const app = express();
// adding the () - is invoking it and similar to donig const app = express() for another line;
const PORT = 8080;
app.use( express.json() )

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'red',
        size: 'large'
    })
}) 

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!'})
    }

    res.send({
        tshirt: `red with your ${logo} and ID of ${id}`,

    })

    // Need to set up middleware to tell expess to parse json (The req body)
}) 

app.listen(
    PORT,
    () => console.log(`Its allive on localhost http://localhost:${PORT}`)
)

// This is how to make a restAPI above. Next step is trying to make a call to a database

// nodemon? 

