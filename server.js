const express = require('express')
const path = require('path')
const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public'))) //Set public as static

app.listen(PORT, () => {
    console.log('SERVER LISTENING AT PORT 3000')
})