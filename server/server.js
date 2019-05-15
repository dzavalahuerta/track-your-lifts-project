const express = require('express');
    let app = express();
const path = require('path');
// const apiRoute = require("./routes/api-router")

app.use(express.static(path.join(__dirname, "../dist/track-your-lifts-project")));

// app.use("/api",apiRoute);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, "../dist/track-your-lifts-project/index.html"));
});


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`working on port ${port}`);
});