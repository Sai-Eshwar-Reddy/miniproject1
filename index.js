const { faker } = require('@faker-js/faker');
const methodoverride = require('method-override');
const mysql = require('mysql2');
const express = require('express');
const app = express();

app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs")
const path = require('path');
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname, "public")));
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'first',
    password: 'pass@database'
});
let port = 3000;
app.listen(port,()=>{
    console.log("Server is running");
});
app.get('/',(req,res)=>{
    let q = `select count(*) from users`;
    connection.query(q,(err,result)=>{
        if(err)
        {
            console.log(err);
            res.send("some error");
        }
        else
        {
            let count = result[0]["count(*)"];
            res.render("home.ejs",{count});
        }
    });
});
app.get('/users',(req,res)=>{
    let q = 'select *from users';
    connection.query(q,(err,result)=>{
        if(err)
            console.log(err);
        else
        {
            let data = result;
            res.render("userinfo.ejs",{ data });
        }
    });
});
app.get('/users/:id/edit',(req,res)=>{
    let {id} = req.params;
    let q = `select *from users where id = ?`;
    connection.query(q,[id],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            let user = result[0];
            res.render("edit.ejs",{user});
        }
    });
});
app.patch("/user/:id",(req,res)=>{
    let {id} = req.params;
    let { password:formpassword,username:newUsername } = req.body;
    let q = `select *from users where id = ?`;
    connection.query(q,[id],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            let user = result[0];
            if(user.passwordd !== formpassword)
            {
                res.send("Wrong password");
                console.log(formpassword);
            }
            else
            {
                let uq='update users set userid = ? where id = ?';
                connection.query(uq,[newUsername,id],(err)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        res.redirect("/users");
                    }
                })
            }
        }
    });
});
// let data=[];
// let getrandomuser = () => {
//     return [
//         faker.string.uuid(),
//         faker.internet.username(),
//         faker.internet.email(),
//         faker.internet.password(),
//     ]
// }
// for(let i=0;i<10;i++)
// {
//     data.push((getrandomuser()));  
// }
// let q = "insert into users values ?";
// connection.query(q,[data], (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(result)
//     }
// });
// connection.end();

