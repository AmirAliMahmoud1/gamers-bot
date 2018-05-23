const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var currentTime = new Date(),
    Year = currentTime.getFullYear(),
    Month = currentTime.getMonth() + 1,
    Day = currentTime.getDate(),
    Houre = currentTime.getHours(),
    Minutes = currentTime.getMinutes()
    message.channel.send( "Date : " + Day + "-" + Month + "-" +Year +"\nTime : " + Houre + " : " + Minutes)

}

module.exports.help = {
    name: "date"
}