const { Router } = require('express')
const {
  getCustomerByID,
  createCustomer,
  putCustomer,
  deleteCustomer
} = require('../controllers/customers')
const router = Router()
const uploadImage = require('../middlewares/multer')

router.get('/:id', getCustomerByID)
router.post('/', uploadImage, createCustomer)
router.put('/:id',uploadImage, putCustomer)
router.delete('/:id', deleteCustomer)

module.exports = router