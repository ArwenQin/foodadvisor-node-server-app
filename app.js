import express from 'express';
import cors from 'cors'


import UserController from "./users/users-controller.js"
import TuitsController from "./tuits/tuits-controller.js";
import exploresController from './explores/explores-controller.js';
import "dotenv/config";

import session from "express-session";
import AuthController from "./users/auth-controller.js";
import restaurantController from './restaurant/restaurant-controller.js'
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING);

const allowedOrigins = [process.env.FRONTEND_URL,'https://qin-wang-pan-foodadvisor.netlify.app'];
const app = express();
app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
          return callback(new Error('error'), false);
        }
        return callback(null, true);
      },
      credentials: true
    })
);

app.use(express.json());

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

TuitsController(app);
AuthController(app);
UserController(app);
exploresController(app);
restaurantController(app);

const port = process.env.PORT || 4000;
app.listen(process.env.PORT || 4000);
