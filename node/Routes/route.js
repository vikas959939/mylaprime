const express = require('express')
const router = express.Router()
const enroll = require('../Models/Enroll')
const record = require('../Models/Recodinout')

const register = require('../Models/Register')

router.post('/register', (req, res) => {
    const { Name, Email, Department, Password, Date, user_type } = req.body

    register.findOne({ Email: Email }).then((resp) => {
        if (resp) {
            res.status(422).json({ mssg: 'Email is already exists' })
        } else {
            const data = new register({ Name, Email, Department, Password, Date, user_type: 'normal' })
            data.save().then((response) => {
                return res.json({ mssg: 'data saved successfully' })
            })
        }
    })
})



router.get("/register", async (req, res) => {
    const data = await register.find();
    res.send(data);
})

router.post('/login', async (req, res) => {
    const { Email, Password, user_type } = req.body;

    const data = await register.findOne({ Email: Email })

    if (data) {
        if (Password !== data.Password) {
            return res.send({ mssg: 'wrong credential' })
        } else {
            return res.send({ mssg: 'login success', data })
        }

    } else {
        return res.send({ mssg: "user not registered" })
    }
})

router.put('/register/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const leave_count = req.body;

        const result = await register.findByIdAndUpdate(
            id, leave_count
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


router.post('/enroll', async (req, res) => {
    const { Name, Aadhar, Mobile, Start_Date, End_Date, Enrollment } = req.body
    const data = await enroll.findOne({ Enrollment: Enrollment })

    if (data) {
        res.status(422).json({ mssg: 'Cadidate Already Exists' })

    } else {
        const data = new enroll({ Name, Aadhar, Mobile, Start_Date, End_Date, Enrollment, Dateof_Registration:new Date().toDateString() })
        data.save().then((resp) => {
            console.log('Candidate Entry Success')
            return res.status(200).json({ mssg: 'data saved successfully' })
        })
    }
})

router.get('/enroll', async (req, res) => {
    const data = await enroll.find();
    res.send(data);
})

router.post('/record', async (req, res) => {
    const { Name, EnrollMent, Validity, Out_time, In_time, date } = req.body

        const data = new record({ Name, EnrollMent, Validity, In_time : (new Date().toTimeString()), Out_time, date:(new Date().toDateString())})
        data.save().then((res) => {
            console.log('Time Recorded')
        })
    
})

router.get('/record', async (req, res) => {
    const data = await record.find();
    res.send(data);
})

router.put('/record/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const Out_time = req.body;

        const result = await record.findByIdAndUpdate(
            id, Out_time
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})



module.exports = router