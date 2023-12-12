const express=require('express');
const app=express();
const path=require('path');
const PORT=3500;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.get("/",(req, res)=>{
    res.status(200).send("Homepage");
})
app.use("/api/images", require('./routes/images'));
//server is listening to port
app.listen(PORT, ()=>{
    console.log('Server is running on port '+PORT);

})