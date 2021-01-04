const connection = require("./connection");

const orm = {
  selectAll: (table, cb) => {
    // console.log(table);
    const queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: (table, column, value, cb) => {
    const queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table, column, value], (err, res) => {
      if (err) throw err;
      // console.log(res);
      cb(res);
    });
  },
  updateOne: (table, column, id, cb) => {
    const queryString = "UPDATE ?? SET ?? = 1 WHERE id = ?";
    connection.query(queryString, [table, column, id], (err, res) => {
      console.log("update" + queryString);
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
};
module.exports = orm;