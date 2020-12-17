import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users',usersRoutes);

app.get('/',(req,res)=>{
    res.send('hello from the home page');
});

app.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`);
});