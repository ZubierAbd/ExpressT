const express = require('express')
const router = express.Router()
const members = require('../../Members')
const memberClass = require('../../MemberClass')
const uuid = require('uuid')
const e = require('express')

router.get('/', (req, res) => {
    res.json(members)
})

router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        res.send(members.filter(member => member.id === parseInt(req.params.id)))
    }
    else {
        res.status(400).json({ msg: 'Member not found' })
    }
})

//ADd member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        status: 'active',
        email: req.body.email
    }

    console.log(newMember)

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include name and email' })
    }
    members.push(newMember);
    res.json(members)
})


router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        const updMember = req.body
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name
                member.email = updMember.email ? updMember.email : member.email
                res.json({ msg: 'Member updated', member: updMember })

            }
        })
    } else {
        res.status(400).json({ msg: 'Member not found' })
    }
})

router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        let newMembers = members.filter(member => member.id !== parseInt(req.params.id))

        res.json({
            msg: 'Member deleted',
            members: newMembers
        })
    }
    else {
        res.status(400).json({ msg: 'Member not found' })
    }
})

module.exports = router