// Importing environment variable before starting the app
// DO NOT REMOVE
// DO NOT USE ENV VARIABLE BEFORE THOSE TWO LINES
import path from "path";
require('dotenv').config({ path: path.resolve(".env") })

require(".");

import DatabaseManager from './database/DatabaseManager';
DatabaseManager().then(()=>{
    require(".");
}).catch((e)=>{
    console.error(e);
})