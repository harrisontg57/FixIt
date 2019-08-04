var db = require('./index');
//Makes calls to the SQL server
var Chat = {
    getChats: function(callback)
    {
        return db.query(`SELECT * FROM chats;`, callback);
    },
    postChats: function(Chat, callback)
    {
        return db.query(`INSERT INTO chats(dtime, username, message) VALUES(?, ?, ?);`,
        [Chat.date, Chat.username, Chat.message], callback);

    }
}

module.exports = Chat;