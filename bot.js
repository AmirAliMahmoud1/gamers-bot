const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const prefix = ".";



const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, client);


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
client.user.setActivity('.help | powers' + client.guilds.size + " servers");
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
if (cmd) { cmd.run(client, message, args);
    console.log("(" + command + ") command just used in " + message.guild.name + " server")

}
});




//Addong don't touch

client.on("message", message => {
    if (message.author.bot) return;
   if (message.isMentioned(client.user)) return message.channel.send(`do **${prefix}help** to get start` + "\ndm the bot to chat directly with the owner");


});


//reply and dm chat settings

client.on('message', message => {
if (message.author.bot) return;
if (message.content.startsWith(prefix + 'reply'))  {

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if (message.author.id !== '269132764576481282' && message.author.id !== '405436409831227404') return message.reply(":x: sorry this command is just for bot owner")
    if (!args[0]) return message.channel.send("please enter the user id")
    if (!args[1]) return message.channel.send("please enter the message")
    if (!client.users.get(args[0])) return message.channel.send("Wrong id maybe this user not in mutual servers with this bot")
    client.users.get(args[0]).send(message.content.split(" ").slice(2).join(' '))
    message.react("👍")
} else
if (message.author.id === client.user.id) return;
if (message.channel.type !== 'dm') return;
if (message.content.startsWith(prefix + 'help')) return message.channel.send("please don't use commands here !!!");
if (message.content.startsWith(prefix + 'reply')) return;
    client.channels.get("467207782081232920").send(message.author.tag + " | " + message.author.id + "\n" + message)
});




client.login(process.env.BOT_TOKEN);
