
// 1.require express()
const express = require ('express')


// 2. Initiate express
const app = express()





// ==================== require statement
app.set('view engine', 'jsx'); 




//======== view Template (React components)
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

// 6. create tip calculator:
app.get('/tips/:total/:percentage',(req,res) => {
    const total = parseFloat(req.params.total);
    const percentage = parseFloat (req.params.percentage)

    if(isNaN(total) || isNaN(percentage)){ 
        res.send('Please provide a Number')
    return;
}
   const tipAmount = (total * percentage)/100
   res.send(`The tip amount is: <h1 style="color: red;">$${tipAmount}</h1>`);
})



// Magic 8 Ball responses 
const magic8BallResponses = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no",
    "Outlook not so good", "Very doubtful"
  ];

// create route for magic 8 ball
app.get('/magic/:question',(req,res) => {
    const question = req.params.question;
    const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];
    res.send(`<h1>Question: ${question}</h1><h1>Answer: ${randomResponse}</h1>`);

})



//function if is Fibonacci number 
function Fibonacci(num) {
    let a = 0, b=1 ;
    while (a < num) {
        let c = a ;
        a = b ;
        b = c + b ;
    }
    return a === num ;
}


// Create a route if a number is a Fibonacci
app.get('/fibonacci/:number', (req,res) => {
    const numero = req.params.number
    const number = parseInt(numero)

    if(Fibonacci(number)) {
        res.send(`<h1 style = 'color : red'>${number} </h1><h1>For sure is fibonnaci Number</h1>`)
    } else {
        res.send(`<h1 style ="color : red">${number}</h1><h1> Sorry is not Fibonnaci number</h1>`)
    }
});








// 3. create my server
app.listen(3000, () => {
    console.log('server is running in port 3000')
})