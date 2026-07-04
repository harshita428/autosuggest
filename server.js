const express= require('express');
const app= express();
//change this!!
const port= process.env.PORT || 3002;

console.log("backend ")

//web server:
app.use(express.static("frontend"))


app.listen(port, function()  {
  console.log("Server is running on http://localhost:"+port);
})
