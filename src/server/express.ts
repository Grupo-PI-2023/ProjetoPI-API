
// import { createUserRoute, deleteUserRoute, readUserRoute, readUsersRoute, updateUserRoute } from "./routes";
const { routes } = require('./routes');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // origin: 'http://localhost:3000',
    origin: '*',
    exposedHeaders: '*',
    allowedHeaders: '*',
    credentials: false,
    methods: '*',
  })
);

app.use('/', routes);
// app.use(createUserRoute, deleteUserRoute, readUserRoute, readUsersRoute, updateUserRoute);

app.listen(5002, () => {
    console.log("server running at port 5002");
})