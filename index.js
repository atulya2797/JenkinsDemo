const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080

app.listen(PORT,() => {
    console.log(`This app is listening to port: ${PORT}`)
})

console.log('Jenkins Demo')