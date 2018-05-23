const Discord = require("discord.js");
const fs = require("fs");

const jokeslist = JSON.parse(fs.readFileSync('./commands/joke/jokes.json', 'utf8'));

module.exports.run = async (client, message, args) => {

    let joke = Math.floor((Math.random() * jokeslist.length));
    message.channel.send(jokeslist[joke])


}

module.exports.help = {
    name: "joke"
}