// 1.require express()
const express = require ('express')


// 2. Initiate express
const app = express()




// ========= the require statement ======
app.set('viewport', 'jsx')

// ======= views for React Components ======
app.engine('jsx', require('express-react-views').createEngine());


// 3. create routes 
app.get('/', (req,res) => {
    res.send('<h1> hello page</h1>')
})


// 4.create greeting route
app.get('/greeting', (req,res) => {
    res.send('<h1>Hello, stranger</h1>');
})

// 5.create greeting route with param name
app.get('/greeting/:name', (req,res) => {
    const name = req.params.name;
    const styledName = `<span style="color: red; font-weight: bold; font-size: 1.2em;">${name}</span>`;
    const responseText = `<h1>Wow! Hello there: ${styledName}</h1><h1>So great to see you: ${styledName}</h1>`;
    res.send(`${responseText}`)
})









// 3. create my server
app.listen(3000, () => {
    console.log('server is running in port 3000')
})