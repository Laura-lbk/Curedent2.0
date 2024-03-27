import { connect } from "mongoose";
import { Env } from "../tools/environment";


const {DB_HOST, DB_NAME, DB_USER, DB_PASS, DB_PORT} = Env;

export default async () => {
    try {
        console.log("Launching database");
        await connect(`mongodb://${DB_HOST}:${DB_PORT}/admin`, {
            dbName: DB_NAME,
            user: DB_USER,
            pass: DB_PASS,
            autoIndex: true
        });
    }
    catch(e) {
        console.error("We ran into an error while trying to launch database", e);
        throw e;
    }
    
    console.log("Database connected");
}