import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import { connect } from 'mongoose';
import router from './routes/index.js';
import session from 'express-session';
import path from 'path';
const app = express()
const PORT = 8000
app.use(express.json());
connect('mongodb://localhost:27017/Data');
const __dirname = path.resolve();
app.use(cors()); // chan cors khoi loi
app.use(cookieParser()); // tao cookie va gan cookie
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set("views","./views") 
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'huydepzaileleuhacker',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use("/", router)
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
router.get('/',(req,res) => {
    return res.render('index');
})
