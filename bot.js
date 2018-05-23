const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const prefix = ".";



client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.error(err);

let jsfiles = files.filter(f => f.split(".").pop() === "js");
if(jsfiles.length <= 0) {
    console.log("no commands to lead");
    return;
}
console.log('loading ' + jsfiles.length + " commands!");

jsfiles.forEach((f, i) => {
    let props = require("./commands/" + f);
console.log(i + 1 + " : " + f + " loaded")
client.commands.set(props.help.name, props);
});
});



//on ready stuff
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
console.log(`on ${client.guilds.size} servers`);
client.user.setActivity('.help | version 0.5 released');
console.log(client.commands)

});



// don't ask please




client.on('message', message => {
    if(!message.content.startsWith(prefix))return;
if(message.channel.type === 'dm') return;
if (message.author.bot) return;
let messageArray = message.content.split(" ");
let command = messageArray[0];
let args = messageArray.slice(1);

let cmd = client.commands.get(command.slice(prefix.length));
if (cmd) cmd.run(client, message, args);
});






client.on("message", message => {
   if (message.isMentioned(client.user)) return message.channel.send(`do **${prefix}help** to get started` + "\ndm the bot to chat directly with the owner");


});






client.login("NDM0MzE4NjA0MDUwMjM1Mzkz.DbIq8Q.pGL5AQP_utNlVilVg0R9yZGDUgo");
