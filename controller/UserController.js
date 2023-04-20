function users(req, res) {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM users', (err, users) => {
        if(err) {
          res.json(err);
        }
        res.render('../views/users', { users });
      });
    });
  }

function storeUser(req, res){
    const name = req.body.name
    const username = req.body.username
    const password = req.body.password
    console.log(name)
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO users SET ?', {name:name, username:username, password:password}, (err, rows) => {
            res.redirect('/users')
        });
      });
    
}
function updateUser(req, res){
    const {id} = req.params;
console.log(id)
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users WHERE id = ?', [id], (err, userEdit) => {
            console.log(userEdit[0])
            
            res.render('../views/userEdit', {data: userEdit[0]})
        });
      });
}

function editUser(req, res){
    const {id} = req.params;
    const newDataUser = req.body
    req.getConnection((err,conn) =>{
        conn.query('UPDATE users set ? WHERE id = ?', [newDataUser, id], (err, rows) =>{
            res.redirect('/users')
        })
    })
}


function deleteUser(req, res){
    const {id} = req.params;
    console.log(id)
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM users WHERE id = ?', [id], (err, rows) => {
        res.redirect('/users');
      });
    })
}

module.exports = {
    users,
    storeUser,
    updateUser,
    deleteUser,
    editUser
}