const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if (message.author.id !== '269132764576481282' && message.author.id !== '405436409831227404') return message.reply(":x: sorry this command is just for bot owner")
    if (!args[0]) return message.channel.send("Error: invaild ID")
    if (!client.users.get(args[0])) return message.channel.send("Wrong id maybe this user not in mutual servers with this bot")
    let name = client.users.get(args[0]).username

    client.blockList[args[0]] = {
        name: name,
        blocked: "true"
    }
    fs.writeFile("./commands/block/list.json", JSON.stringify(client.blockList, null, 4), err => {
        if(err) throw err;

        message.channel.send("i blocked him and this is the user name\nthe name : **" + name + "**")
    });
    



}

module.exports.help = {
    name: "block"
}
