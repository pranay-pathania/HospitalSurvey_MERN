const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const nodemailer = require('nodemailer')
const { send } = require('process')
const app = express()

const port = 6969

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//NODEMAILER
const account = {
    user: "pranayonlyforprojects@gmail.com",
    pass: "P@t#2n!a"
}

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: account.user,
        pass: account.pass
    }
})


//SERVING STATICS
app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

//MONGOOSE CONNECTION
mongoose.connect('mongodb://localhost:27017/ProjectDB')

//SCHEMA AND MODEL
const surveySchema = {
    name: String,
    age: String,
    phone: String,
    email: String,
    conditions: {
        Asthma: Boolean,
        Cancer: Boolean,
        Cardiac_Diseases: Boolean,
        Diabetes: Boolean,
        Hypertension: Boolean,
        Psychiatric_Disorders: Boolean,
        Epilepsy: Boolean
    },
    medication: String,
    allergy: String,
    tobacco: String,
    drugs: String,
    alcohol: String,
    gender: String
}

const Survey = mongoose.model('survey', surveySchema)

//ROUTES
app.post('/add-response', async (req, res) => {
    const recievedItem = new Survey(req.body)
    const sendToEmail = recievedItem.email
    console.log(sendToEmail)
    try {
        await recievedItem.save()
    } catch (error) {
        console.log(error);
    }

    //SENDING A MAIL TO THE CLIENT

    let mailOptions = {
        from: '"Magnolia Hospital" <pranayonlyforprojects@gmail.com>',
        to: sendToEmail,
        subject: "Thanks",
        text: "Thank you for participating in the survey\n\n(This message need not be replied to)"
    }
    
    transporter.sendMail(mailOptions, (error, data) => {
        if (error){
            console.log("ERROR")
        } else {
            console.log("MAIL SENT")
        }
    })
    

})


//START THE SERVER
app.listen(port, () => {
    console.log(`Running at http://localhost:${port}/`)
})