//promise封装数据库

function db(sql, parmas = null) {
    const mysql = require('mysql')
    const conn = mysql.createConnection({
        host: 'localhost',
        prot: 3306,
        user: 'root',
        password: 'root',
        database: 'big-event'

    })
    // conn.connect()
    // conn.query(sql, parmas, (err, result) => {

    // })
    // conn.end()
    return new Promise((resolve, reject) => {
        conn.connect()
        conn.query(sql, parmas, (err, result) => {
            // if (err) {
            //     reject(err)
            // } else {
            //     resolve(result)
            // }
            err ? reject(err) : resolve(result)
        })
        conn.end()
    })
}
module.exports = db