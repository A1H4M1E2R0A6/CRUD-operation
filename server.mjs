import express from 'express';






const app = express();

const PORT = process.env.PORT || 3000;
//app.get('/')


app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})
//import cors from 'cors';
//import path from 'path';
//import jwt from 'jsonwebtoken';
//import cookieParser from 'cookie-parser'
//import 'dotenv/config'
//const __dirname = path.resolve();

//import authRouter from './routes/auth.mjs'
//import commentRouter from './routes/comment.mjs'
//import feedRouter from './routes/feed.mjs'
//import postRouter from './routes/post.mjs'
//import { decode } from 'punycode';


//app.use(express.json()); // body parser
//app.use(cookieParser()); // cookie parser
// app.use(cors())

// /api/v1/login
//app.use("/api/v1", authRouter)

//app.use("/static", express.static(path.join(__dirname, 'static')))
//app.use(express.static(path.join(__dirname, 'public')))


//app.use((req, res, next) => { // JWT
  //  console.log("cookies: ", req.cookies);

    //const token = req.cookies.token;
    //try {
      //  const decoded = jwt.verify(token, process.env.SECRET);
        //console.log("decoded: ", decoded);

       // req.body.decoded = {
         //   firstName: decoded.firstName,
           // lastName: decoded.lastName,
            //email: decoded.email,
            //isAdmin: decoded.isAdmin,
        //};

       // next();

    //} catch (err) {
      //  res.status(401).send({ message: "invalid token" })
    //}


//})

//app.use("/api/v1", postRouter) // Secure api





//