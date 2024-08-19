import mongoose from "mongoose";

const protocol = "mongodb+srv";
const url = "";
const params = "";
const username = "";
const password = "";
const database = "";

export const connectionString = `${protocol}://${username}:${password}@${url}/${database}${params}`;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
};

export const connect = (callback) =>
    mongoose
        .connect(connectionString, options)
        .then((db) => {
            console.log(`Connected ${database} sur ${url}`);
            if (callback) callback();
        })
        .catch((err) => {
            console.log(err);
        });
