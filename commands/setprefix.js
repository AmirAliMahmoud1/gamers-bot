const Discord = require("discord.js");

module.exports.run = async (client, message, args, con) => {

    if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== "269132764576481282") return message.channel.send("you don't have **ADMINISTRATOR** permission");


    if(!args[0]) return message.channel.send("Error: Please insert the prefix\nExample: .setprefix **.**")
    let prefix = args[0];
    if(prefix.length > 5) return message.channel.send("The prefix must be lower than 5 characters")
    let guildID = message.guild.id;


    con.query(`SELECT * FROM prefixes WHERE id = '${guildID}'`, (err, rows) => {

        if (err) throw err;

        let sql;

        if(rows.length < 1) {
            sql = `INSERT INTO prefixes (id, prefix) VALUES ('${guildID}', '${args[0]}')`;

        } else {
            sql = `UPDATE prefixes SET prefix = '${args[0]}' WHERE id = '${guildID}'`;
        }

        con.query(sql, message.channel.send("Okay i got it, the new prefix is ``" + prefix + "``"));


    });


}

module.exports.help = {
    name: "setprefix"
}