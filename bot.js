const Discord = require("discord.js");
const mysql = require("mysql");
const client = new Discord.Client();
const fs = require('fs');
const prefix = ".";
const snekfetch = require("snekfetch");s



const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, client);



client.on("guildCreate", message => {
    let serverat = client.guilds.size
    let id = client.user.id
snekfetch.post(`https://bots.discord.pw/api/bots/${id}/stats`)
    .set('Authorization', process.env.DB_KEY)
        "server_count": serverat
    })
    .then(() => console.log(`Posted to db.`))
    .catch((e) => console.error(e));

});


//HERasdsadsadsa

client.commands = new Discord.Collection();
const talkedRecently = new Set();


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
client.user.setActivity('.help | mcskin command will be added at EID (Eid moubark Muslims)'); 
console.log(client.commands)

});



// don't ask please




client.on('message', message => {
    if(!message.content.startsWith(prefix))return;
if(message.channel.type === 'dm') return;
if (message.author.bot) return;
    
if (talkedRecently.has(message.author.id)) {
    message.channel.send("The next user have to wait at least 5 secounds between using commands : " + message.author + "\nthe cooldown won't work for who have **ADMINSTRATOR** permission")
     .then(message => {
     message.delete(6000)
 })
} else {

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    
    let cmd = client.commands.get(command.slice(prefix.length));
    if (cmd) { cmd.run(client, message, args, con);
    console.log("(" + command + ") command just used in " + message.guild.name + " server")
if (!message.member.hasPermission("ADMINISTRATOR")){
    talkedRecently.add(message.author.id);
  }
setTimeout(() => {
  // Removes the user from the set after 5 sec
  talkedRecently.delete(message.author.id);
}, 5000);
}
}    
});


var con = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_USER
});








//Addong don't touch

client.on("message", message => {
    if (message.author.bot) return;
   if (message.isMentioned(client.user) && message.content === `<@${client.user.id}>`) return message.channel.send(`do **${prefix}help** to get start` + "\ndm the bot to chat directly with the owner");


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

con.query(`SELECT * FROM blockList WHERE id = '${message.author.id}'`, (err, rows) => { 
    if (rows[0].blocked == '1') return message.channel.send("**YOU ARE BLOCKED**\n--\nyou can join the support server to ask for unblock to be able to call bot owners")

    const embed = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.addField("The message:", message)
.addField("The id : " + message.author.id, message.author.tag)

    client.channels.get("467207782081232920").send({embed})

});
});




client.login(process.env.BOT_TOKEN);
