const express = require("express"); //loads express package
const cors = require("cors"); // loads cors package
const pool = require("./database.js"); // allows us to access the database

const app = express();

app.use(express.json());
app.use(cors());

// Inserts new user
app.post("/adduser", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("Username: "+username+" Password: "+ password);

    const insertUser = `INSERT INTO users (username, password) VALUES ('${username}', '${password}');`;
  
    pool.query(insertUser).then((response) => {
        console.log("DATA INSERTED SUCCESSFULLY")
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
    
    console.log(req.body);
    res.send("respond recieved: "+ req.body);
});
// checks user login
app.post("/checkuser", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const getPassword = `SELECT password FROM users WHERE username = '${username}';`;

    pool.query(getPassword).then((response)=>{
        console.log("CREDENTIALS TO CHECK: ", username," ", password );
        
        if(response.rowCount == 1){
            console.log("THE PASSWORD: ",response.rows[0].password);
            if(response.rows[0].password === password){
                // if password wrong
                res.send(true);
            }else{
                // if password wrong
                res.send(false);
            }
        }
        else{
            // for if the username doesnt exist
            console.log("USERNAME DOESNT EXIST")
            res.send(false);
        }
    })
})
app.listen(4000, ()=> console.log("Server on localhost:4000"));
