const orm = require("../config/orm");

const burger = {
  selectAll: (cb) => {
    orm.selectAll("burger", (res) => {
      cb(res);
    });
  },
  insertOne: function (column, value, cb) {
    orm.insertOne("burger", column, value, (res) =>{
      cb(res);
    });
  },
  updateOne: function (id, cb) {
    orm.updateOne("burger", "devoured", id, (res) =>{
      cb(res);
    });
  },
};

module.exports = burger;