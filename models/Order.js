const db = require('../config/db');

class Order {
    static create(partNumber, phoneNumber, userId, callback) {
        const sql = `INSERT INTO orders (part_number, phone_number, user_id) VALUES (?, ?, ?)`;
        db.run(sql, [partNumber, phoneNumber, userId], function(err) {
            if (err) {
                return callback(err);
            }
            callback(null, this.lastID);
        });
    }

    static findAll(callback) {
        const sql = `SELECT * FROM orders`;
        db.all(sql, [], (err, rows) => {
            if (err) {
                return callback(err);
            }
            callback(null, rows);
        });
    }
}

module.exports = Order;