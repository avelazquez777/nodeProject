const express = require('express')
const router = express.Router() 
const {
    getProduct,
    createProduct,
    getElementById,
    updateProduct,
    deleteProduct
} = require('../controllers/products.controller')

router.get('/', getProduct)
router.get('/:id', getElementById)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


module.exports = router