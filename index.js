import express from 'express';
import { initApp } from './src/modules/app.router.js';

const  app = express();
initApp(app,express);
const Port = process.env.Port||4000;
app.listen(Port,()=>{
    console.log(`server listening on ${Port}`);
})