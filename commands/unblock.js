const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if (message.author.id !== '269132764576481282' && message.author.id !== '405436409831227404') return message.reply(":x: sorry this command is just for bot owner")
    if (!args[0]) return message.channel.send("Error: invaild ID")
    if (client.blockList[args[0]].blocked === "false" || !client.blockList[args[0]]) return message.channel.send("this user not in block list")
    let name = client.users.get(args[0]).username

    client.blockList[args[0]] = {
        name: name,
        blocked: "false"
    }
    fs.writeFile("./commands/block/list.json", JSON.stringify(client.blockList, null, 4), err => {
        if(err) throw err;

        message.channel.send("i unblocked him and this is the user name\nthe name : **" + name + "**")
    });
    



}

module.exports.help = {
    name: "unblock"
}
