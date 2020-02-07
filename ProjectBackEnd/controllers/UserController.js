const { mysqldb } = require("../connection");

module.exports = {
  getProduk: (req, res) => {
    let sql = `SELECT * FROM product`;

    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },

  postProduk: (req, res) => {
    let sql = `INSERT INTO product set ?`;

    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(res);
    });
  }
};
