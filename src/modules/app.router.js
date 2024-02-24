import { connectDB } from "../../DB/connection.js";
import authRouter from './auth/auth.routre.js';
import blogRouter from './blog/blog.routre.js';
import userRouter from './usre/user.routre.js';
export const initApp = (app,express) => {
    connectDB();
    app.use(express.json());
    app.get('/', (req, res) => {
        return res.json({message:"Welcome!"});
    })
    app.use('/user',userRouter);
    app.use('/blog',blogRouter);
    app.use('/auth',authRouter);
    app.use('*',(req, res) => {
        return res.json({message:"page not found!"});
    });
}
