const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const mongoose = require("mongoose");

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// mongoose
//   .connect(process.env.MONGODB_SERVER, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch(() => {
//     console.log("MongoDB Connection Failed!");
//   });


  const port = process.env.PORT || 3002

  app.listen(port, ()=>{
console.log(`listening on port ${port}...`)
  })