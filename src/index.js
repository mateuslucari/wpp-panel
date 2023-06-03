const express = require('express');
const app = express();

const va = require('./config/variables')



app.get('/', (req,res)=>{
   res.send('Hello world!')
})

app.listen(va.PORT, () => {
  console.log(`Server up and running on port ${va.PORT}`);
})