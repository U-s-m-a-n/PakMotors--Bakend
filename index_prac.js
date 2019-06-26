const mongoose = require('mongoose');
const express = require("express");
const graphqlHttp = require('express-graphql');
const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();

const report = require('./routes/report');

///------------------------------------------------------///
// const persons = require('./routes/persons');
// const cars = require('./routes/cars');
// const sales = require('./routes/sales');
// const users = require('./routes/users');
// const accounts = require('./routes/accounts');
// const home = require('./routes/home');
///------------------------------------------------------///


mongoose.connect('mongodb://localhost/pakMotors')
    .then(() => console.log("Connected to pakMotors Database"))
    .catch((err) => console.log("Could not connect to mongoDB" + err));

mongoose.set('useFindAndModify', false);


app.use(express.json());

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    if(req.method === 'OPTIONS'){
        return res.sendStatus(200);
    }
    next();
});
app.use("/pakMotors/report", report);

app.use(
    '/graphql',
    graphqlHttp({
        schema: graphQlSchema,
         rootValue: graphQlResolvers,
        graphiql: true
    })
);

// app.use("/pakMotors/persons", persons);
// app.use('/pakMotors/cars', cars);
// app.use('/pakMotors/sales', sales);
// app.use('/pakMotors/users', users);
// app.use('/pakMotors/accounts', accounts);
// app.use("/", home);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port 3000`);
});




