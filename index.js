const Express = require('express');
const app = new Express;

app.get('/getUsers',(req,res) => {
    const user = req.body;
    console.log(req);
})

app.listen(3001, ()=> {
    console.log("running");
})