const conn = require("../mariadb");
const { StatusCodes } = require("http-status-codes");

const order = (res, res) => {
  const { items, delivery, totalQuantity, totalPrice, userId, firstBookTitle } =
    req.body;
  let delivery_id, order_id;

  let sql =
    "INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id) VALUES (?, ?, ?, ?, ?);";
  values = [firstBookTitle, totalQuantity, totalPrice, userId, delivery_id];
  conn.query(sql, values, (err, results) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    order_id = results.insertId;

    return res.status(StatusCodes.OK).json(results);
  });

  sql =
    "INSERT INTO orderedBook (order_id, book_id, quantity) VALUES (?, ?, ?);";
  values = [];
  items.forEach((item) => {
    values.push([order_id, item.book_id, item.quantity]);
  });
  conn.query(sql, values, (err, results) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.OK).json(results);
  });
};

const getOrders = (req, res) => {};

const getOrderDetail = (req, res) => {};

module.exports = { order, getOrders, getOrderDetail };
