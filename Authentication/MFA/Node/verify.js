// import necessary modules
const speakEasy = require('speakeasy')
const fs = require('fs')

// read the secret
const secretToken = JSON.parse(fs.readFileSync('./secret.json'))

// verify the token
const isVerified = speakEasy.totp.verify({
    secret: secretToken[process.argv[3]],
    token: process.argv[2],
    window: 1,
})

// print the result
console.log(isVerified)
