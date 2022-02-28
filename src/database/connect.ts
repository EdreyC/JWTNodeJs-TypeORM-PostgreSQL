import { createConnection } from "typeorm";

createConnection().then(()=>{
    console.log("📦 Successfull connected with database")
});