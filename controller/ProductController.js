function product(req, res){
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM products', (err, products) => {
          if(err) {
            res.json(err);
          }
          res.render('../views/products', { products });
        });
      });
}

function storeProduct(req, res){
    const nameProduct = req.body.nameProduct
    const descripcion = req.body.descripcion
    const cantidad = req.body.cantidad
    const price = req.body.price
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO products SET ?', {nameProduct:nameProduct, descripcion:descripcion, cantidad:cantidad, price}, (err, rows) => {
            res.redirect('/products')
        });
      });
}
function updateProduct(req, res){
    const {id} = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * INTO products WHERE id = ?', [id], (err, productEdit) => {
            
            res.render('../views/productEdit', {data: productEdit[0]})
        });
      });
}

function editProduct(req, res){
    const {id} = req.params;
    const newDataProduct = req.body
    req.getConnection((err,conn) =>{
        conn.query('UPDATE products set ? WHERE id = ?', [newDataProduct, id], (err, rows) =>{
            res.redirect('/products')
        })
    })
}

function deleteProduct(req, res){
    const {id} = req.params;
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM products WHERE id = ?', [id], (err, rows) => {
        res.redirect('/products');
      });
    })
}

module.exports = {
    product,
    deleteProduct,
    updateProduct,
    storeProduct,
    editProduct
}