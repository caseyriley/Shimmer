
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csurf = require('csurf');
const fetch = require('node-fetch');
const session = require('express-session');
// const { check, validationResult } = require('express-validator');

// const bcrypt = require('bcrypt');
// const saltRounds = 10;

const app = express();

const csrfProtection = csurf({ cookie: true });
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/assets'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', ( (req, res, next) => {
    res.render('backend')
}));

// app.get('/', asyncHandler(async (req, res, next) => {
    // res.render


    // if (!res.locals.authenticated) {
    //     res.render('landingPage');
    // } else {
    //     res.redirect('/dashboard')
    // }
// }));



// app.post('/login-page', loginValidator, asyncHandler(async (req, res) => {
//     let validationErrors = validationResult(req);
//     let errs = new Array();

//     if (validationErrors.isEmpty()) {
//         let user = await User.findOne({ where: { email: req.body.email } });

//         if (user) {
//             let hash = user.password;
//             bcrypt.compare(req.body.password, hash, function (err, result) {
//                 if (result) {
//                     loginUser(req, res, user);
//                     return res.redirect('/')
//                 } else {
//                     errs.push("This email or password could not be found.")
//                     res.render('login-page', {
//                         msg: `${errs}`
//                     });
//                 }
//             });
//         } else {
//             errs.push("This email or password could not be found.")
//             res.render('login-page', {
//                 msg: `${errs}`
//             })
//         }
//     } else {
//         errs = validationErrors.errors.map(err => err.msg)
//         errs = errs.join(" ");
//         res.render('login-page', {
//             msg: `${errs}`
//         })
//     }
// }))



// app.post('/signup', userValidators, asyncHandler(async (req, res) => {
//     let validationErrors = validationResult(req);
//     if (validationErrors.isEmpty()) {
//         const password = req.body.password;
//         let hashes = await [];

//         bcrypt.genSalt(saltRounds, function (err, salt) {
//             hashes.push(salt)
//             bcrypt.hash(password, salt, function (err, hash) {
//                 hashes.push(hash)
//             })
//         });
//         const salt = bcrypt.genSaltSync(saltRounds);
//         const hash = bcrypt.hashSync(password, salt)

//         let user = await User.create({
//             email: req.body.email,
//             password: hash,
//             salt: salt,
//             session_token: req.session.id,
//             account_balance: 100000,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         });

//         await user.save();
//         loginUser(req, res, user);
//         res.redirect('/dashboard')
//     } else {
//         let errs = validationErrors.errors.map(err => err.msg);
//         errs = errs.join(" ");
//         res.render('signup', {
//             msg2: `${errs}`
//         })
//     }
// }));


// app.get('/dashboard', requireAuth, asyncHandler(async (req, res) => {
//     let userId = req.session.auth.userId;
//     const stockData = await Stock.findAll({
//         attributes: ["symbol", "fullName"]
//     })
//     let data = ''
//     res.render('dashboardPage', { stockData, data, userId });
// }));


// app.use((req, res, next) => {
//   const err = new Error("The requested resource couldn't be found.");
//   err.status = 404;
//   next(err);
// });

const port = Number.parseInt(process.env.PORT, 10) || 8080;

app.listen(port, () => {
    console.log(`Listening on port:${port}...`);
});