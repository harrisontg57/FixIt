var db = require('./index');

var Pin = {
    getPins: function(callback)
    {
        return db.query(`SELECT * FROM broken_signs;`, callback);
    },
    postPins: function(Pin, callback)
    {
        return db.query(`INSERT INTO broken_signs(sign_type, sign_condition, latitude, longitude) VALUES(?, ?, ?, ?);`,
        [Pin.sign_type, Pin.sign_condition, Pin.latitude, Pin.longitude], callback);

    }
}

module.exports = Pin;