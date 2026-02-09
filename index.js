import dotenv from "dotenv";

dotenv.config({
    path:"./.env",
});

let value = process.env.name;

console.log("value : ", value);


console.log("Start of backend project");
console.log("Nodemon is running Right now :)");