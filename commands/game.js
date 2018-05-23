const Discord = require("discord.js");
const fs = require("fs");

const games = JSON.parse(fs.readFileSync('./commands/game/games.json', 'utf8'));
const gameslist = fs.readFileSync('./commands/game/games.txt', 'utf8');

module.exports.run = async (client, message, args) => {

    if (!games[args[0]]) return message.channel.send(gameslist);
    const embed = new Discord.RichEmbed()
        .setTitle(args[0] + " info")
        .setDescription(games[args[0]].info)
        .addField("Website", games[args[0]].website)
        .addField("wiki", games[args[0]].wiki)
        .setColor('RANDOM')
        .setImage(games[args[0]].image)
    message.channel.send({embed})

}

module.exports.help = {
    name: "game"
}