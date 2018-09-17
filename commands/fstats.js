const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.channel.send("Error : can't find the name !\nExample : .fnstats **name**")
    if (args[1]){
        if (args[1] != "pc" && args[1] != "xbl" && args[1] != "psn") return message.channel.send("can't find ``" + args[1] + "`` platform\n\nPlatforms: pc, xbl, psn")
    }
         var platform = ""
    if (!args[1]) {
        platform = "pc"
    } else {
        platform = args[1];
    }
    let url = `https://api.fortnitetracker.com/v1/profile/${platform}/${args[0]}`

    

    fetch(url, { 
        method: 'GET',
        headers: {
          'TRN-Api-Key': process.env.TRN_API_KEY
        }
    })
        .then(res => res.json())
        .then(json => {
            if (!json.lifeTimeStats) return message.channel.send("can't find the name in **" + platform + "** platform\n\nyou can search using other platform\n\n``Example : .fnstats [name] {pc}``\n\nPlatforms: pc, xbl, psn")
        const embed = new Discord.RichEmbed()
        .setTitle(`**${args[0]}** stats`)
        .setDescription("Provided By gamers bot")
        .setThumbnail("https://theverticalslice.files.wordpress.com/2017/06/fortnite_white_logo.png")
        .addField(json.lifeTimeStats[6].key, json.lifeTimeStats[6].value, true)
        .addField(json.lifeTimeStats[7].key, json.lifeTimeStats[7].value, true)
        .addField(json.lifeTimeStats[8].key, json.lifeTimeStats[8].value, true)
        .addField(json.lifeTimeStats[9].key, json.lifeTimeStats[9].value, true)
        .addField(json.lifeTimeStats[10].key, json.lifeTimeStats[10].value, true)
        .addField(json.lifeTimeStats[11].key, json.lifeTimeStats[11].value, true)
        .setColor('RANDOM')
    message.channel.send({embed})
        });




}

module.exports.help = {
    name: "fstats"
}
