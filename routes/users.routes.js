const express = require('express')
const router = express.Router() 
const {
    getUser,
    createUser,
    getUserElementById,
    updateUser,
    deleteUser
} = require('../controllers/users.controller')

router.get('/', getUser)
router.get('/:id', getUserElementById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router