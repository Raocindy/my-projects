const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const Sequelize = requirre("sequelize")

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "Cindy-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true,
  })
);

const sequelize = new Sequelize({
  HOST: "localhost",
    USER: "root",
    PASSWORD: "123456",
    DB: "testdb",
    dialect: "mysql",
});

const RoleModel = require('./\models\role.model.js');
const UserModel = require('./models/model.js');
const database = require('.\app\database.config.js');
const Role = database.role;

sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Database');
  initial();
  });

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Cindy application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});