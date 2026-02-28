const express = require("express")
const app = express();
const PORT=5500;

app.use("/test", (req,res)=>{
  res.json({message: "Server is running"})
})

app.listen(PORT,()=>{
  console.log(`Server is running on PORT ${PORT}`)
})

