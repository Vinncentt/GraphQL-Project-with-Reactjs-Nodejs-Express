const express = require('express');
const app = express();
const PORT = 6969;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas');
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

mongoose.connect('mongodb://localhost:27017/GraphQL', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log( 'Connected to MongoDB'));

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/graphql`);
});