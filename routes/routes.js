const express = require('express');
const ProductController = require('../controller/ProductController')
const UserController = require('../controller/UserController')
const SaleController = require('../controller/SaleController')

const router = express.Router();

router.get('/users', UserController.users);
router.get('/delete-user/:id', UserController.deleteUser);
router.post('/store-user', UserController.storeUser);
router.post('/edit-user/:id', UserController.editUser);
router.get('/update-user/:id', UserController.updateUser);

router.get('/products', ProductController.product)
router.post('/store-products', ProductController.storeProduct)
router.post('/edit-products', ProductController.editProduct)
router.get('/update-products/:id', ProductController.updateProduct)
router.get('/delete-products/:id', ProductController.deleteProduct)

router.get('/', SaleController.sales)
router.post('/create-sale', SaleController.storeSales)

module.exports = router;