const Discord = require("discord.js");
const fs = require("fs");


    const questions = JSON.parse(fs.readFileSync('./commands/ask/questions.json', 'utf8'));
    const answers = JSON.parse(fs.readFileSync('./commands/ask/answers.json', 'utf8'));



module.exports.run = async (client, message, args) => {
    const id = message.author.id;
    const question = Math.floor((Math.random() * questions.length));


   let askQuestion = await message.channel.send("you have 10 secounds to answer the next question\n--------------------------------------\n" + questions[question])


const msgs = await message.channel.awaitMessages(msg => {

    return msg.content === answers[question] && msg.author.id === id;

}, {maxMatches: 1, time: 10000});


let userAnswer = msgs.map(msg => msg.content);

if (!userAnswer.length) {
    message.channel.send("time finished, the answer was [`" + answers[question] + "`]");
    askQuestion.delete()
}
if (userAnswer.length) return message.channel.send("Right answer :heavy_check_mark:")




}

module.exports.help = {
    name: "ask"
}