const express = require("express");
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');


const User = require('../../modals/User')
router.get('/register', (req, res) => {
    res.send({
        name: "Jon"
    })
})
const errors = {}
router.post("/register", (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (user) {
            errors.emailExist = {
                msg: "Email already registered"
            }
            return res.status(404).json(essors.emailExist)
        } else {
            if (req.body.password !== req.body.password2) {
                errors.password = {
                    msg: "Passwords should match"
                }
                res.status(404).json(essors.password)
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    isAdmin: req.body.isAdmin,
                    password: req.body.password,

                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err
                        newUser.password = hash;
                        newUser.save().then(user => res.json(user)).catch(err => console.log(err))
                    })
                })
            }

        }
    })
})

//login

router.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({
        email
    }).then(user => {
        // Check for user
        if (!user) {
            errors.email = 'User not found';
            return res.status(404).json(errors.email);
        }

        // Check Password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User Matched
                const payload = {
                    id: user.id,
                    name: user.name,
                    isAdmin: user.isAdmin
                }; // Create JWT Payload

                // Sign Token
                jwt.sign(
                    payload,
                    keys.secretOrKey, {
                        expiresIn: 3600
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                    }
                );
            } else {
                errors.password = 'Password incorrect';
                return res.status(400).json(errors.password);
            }
        });
    });
});
module.exports = router;