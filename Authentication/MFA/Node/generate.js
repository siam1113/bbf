// import necessary modules
const speakEasy = require('speakeasy')
const qrCode = require('qrcode')
const fs = require('fs')

// generate a secret
const secretToken = speakEasy.generateSecret({
    name: 'Authenticator App',
})

// save the secret
fs.writeFileSync('./secret.json', JSON.stringify(secretToken))

// convert the secret to qr code
qrCode.toDataURL(secretToken.otpauth_url, (err, data) => {
    if (err) {
        console.log('Error occurred')
        return
    }

    // save the qr code in a html file
    const img = `<img src="${data}"/>`
    fs.writeFileSync('./qr.html', img)
})
