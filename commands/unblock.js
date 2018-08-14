const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, con) => {
    if (message.author.id !== '269132764576481282' && message.author.id !== '405436409831227404') return message.reply(":x: sorry this command is just for bot owner")
    if (!args[0]) return message.channel.send("Error: invaild ID");
    if (!client.users.get(args[0])) return message.channel.send("Wrong id maybe this user not in mutual servers with this bot");

    let user = client.users.get(args[0]);
    


    con.query(`SELECT * FROM blockList WHERE id = '${args[0]}'`, (err, rows) => {

        if (err) throw err;

        let sql;

        if(rows.length < 1 || rows[0].blocked == '0') {
            return message.channel.send("Then next user isn't blocked : ``" + user.username + "``");

        } else {
            sql = `UPDATE blockList SET blocked = 0 WHERE id = '${args[0]}'`;
        }

        con.query(sql, message.channel.send("The next user has unblocked : ``" + user.username + "``"));


    });


    



}

module.exports.help = {
    name: "unblock"
}