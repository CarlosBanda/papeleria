function sales(req, res) {
    req.getConnection((err, conn) => {
      conn.query('SELECT products.nameProduct, sales.amount,  FROM products JOIN sales ON sales.product_id = products.id', (err, sales) => {
        console.log(sales)
        res.render('../views/home', { sales });
      });
    });
  }

  function storeSales(req, res){
    const amount = req.body.amount
    const product_id = req.body.product_id
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO sales SET ?', {amount, product_id}, (err, rows) => {
            res.redirect('/')
        });
      });
    
}

module.exports = {
    storeSales,
    sales
}