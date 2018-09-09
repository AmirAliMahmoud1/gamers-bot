const Discord = require("discord.js");
const fetch = require("node-fetch");
const snekfetch = require("snekfetch");

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.channel.send("Error : I can't find the region, this is simple example\n\nExample : .lprofile [region] [summoner name]\n\nregions : ``br``, ``eune``, ``euw``, `` jp`` , ``kr`` , ``lan``, ``las`` , ``na``, ``oce``, ``tr``, ``ru``, ``pbe``");
    if (!message.content.split(" ").slice(2).join(' ')) return message.channel.send("Error : I can't find the summoner name, this is simple example\n\nExample : .lprofile [region] [summoner name]\n\nregions : ``br``, ``eune``, ``euw``, `` jp`` , ``kr`` , ``lan``, ``las`` , ``na``, ``oce``, ``tr``, ``ru``, ``pbe``");
    if (args[0]) {
        if (args[0] == "br") { region = "br1"
} else
        if (args[0] == "eune") { region = "eun1"
} else 
        if (args[0] == "euw") { region = "euw1"
} else
        if (args[0] == "jp") { region = "jp1"
} else
        if (args[0] == "kr") { region = "kr"
} else
        if (args[0] == "lan") { region = "la1"
} else
        if (args[0] == "las") { region = "la2"
} else
        if (args[0] == "na") { region = "na1"
} else
        if (args[0] == "oce") { region = "oc1"
} else
        if (args[0] == "tr") { region = "tr1"
} else
        if (args[0] == "ru") { region = "ru"
} else
        if (args[0] == "pbe") { region = "pbe1"
} else
        if (args[0] == "americas") { region = "americas"
} else
        if (args[0] == "europe") { region = "europe"
} else
        if (args[0] == "asia") { region = "asia"
} else return message.channel.send("Error : wrong region, check this list\n\nregions : ``br``, ``eune``, ``euw``, `` jp`` , ``kr`` , ``lan``, ``las`` , ``na``, ``oce``, ``tr``, ``ru``, ``pbe``");
    }

    let url = "https://" + region + ".api.riotgames.com/lol/summoner/v3/summoners/by-name/" + message.content.split(" ").slice(2).join(' ');

    let authorization = "RGAPI-234f361a-bdf9-4aa6-a7a9-840ca23569ca";

    let currentVersion = (await fetch("https://ddragon.leagueoflegends.com/api/versions.json").then(res => res.json()).then(json => json[0]));

    let summoner = (await fetch(url, {
        method: 'GET',
        headers: {
                        "Origin": "https://developer.riotgames.com",
                        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                        "X-Riot-Token": authorization,
                        "Accept-Language": "en-US,en;q=0.9,ar;q=0.8",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
                    }
        
    }).then(res => res.json())
      .then(json => json));
      if (!summoner.id) return message.channel.send("ERROR: can't find the summoner in **" + args[0] + "** region\n\nplease check your name and the region, this is regions list\n\nregions : ``br``, ``eune``, ``euw``, `` jp`` , ``kr`` , ``lan``, ``las`` , ``na``, ``oce``, ``tr``, ``ru``, ``pbe``")
   let summonerlvl = summoner.summonerLevel;
   let summonerid = summoner.id;
   let summonerName = summoner.name;
   let summonerIcon = summoner.profileIconId;
   let accountid = summoner.accountId;




   let champions = (await fetch("http://ddragon.leagueoflegends.com/cdn/" + currentVersion + "/data/en_US/champion.json").then(res => res.json()).then(json => json));
  
  






     let summonerChampions = (await fetch(`https://${region}.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerid}`, {
        method: 'GET',
        headers: {
                        "Origin": "https://developer.riotgames.com",
                        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                        "X-Riot-Token": authorization,
                        "Accept-Language": "en-US,en;q=0.9,ar;q=0.8",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
                    }
        
    }).then(res => res.json())
      .then(json => json));

      let mainChampion1 = "";

      for (var cmd in champions.data) { // Copy and paste

        if (summonerChampions[0].championId == champions.data[cmd].key.toUpperCase()) {
            mainChampion1 = champions.data[cmd].name; // Lets change this so it doesnt make it go uppcase
            break;
        }
 
    }

    let mainChampion2 = "";

    for (var cmd in champions.data) { // Copy and paste

      if (summonerChampions[1].championId == champions.data[cmd].key.toUpperCase()) {
          mainChampion2 = champions.data[cmd].name; // Lets change this so it doesnt make it go uppcase
          break;
      }

  }

  let mainChampion3 = "";

  for (var cmd in champions.data) { // Copy and paste

    if (summonerChampions[2].championId == champions.data[cmd].key.toUpperCase()) {
        mainChampion3 = champions.data[cmd].name; // Lets change this so it doesnt make it go uppcase
        break;
    }

}


// RANK STATS STAAAAAAAATS STAAAAAAAAAAAAAAAATS YEAHGH i was singing while typing STAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAts


let summonerRank = (await fetch(`https://${region}.api.riotgames.com/lol/league/v3/positions/by-summoner/${summonerid}`, {
        method: 'GET',
        headers: {
                        "Origin": "https://developer.riotgames.com",
                        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                        "X-Riot-Token": authorization,
                        "Accept-Language": "en-US,en;q=0.9,ar;q=0.8",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
                    }
        
    }).then(res => res.json())
      .then(json => json));


      let currentRank = "";

      if (!summonerRank[1]) { 
      currentRank = "Not Ranked"
      } else {
        currentRank = summonerRank[1].tier + " " + summonerRank[1].rank
      };

      let WL = "";

      if (!summonerRank[1]) {
              WL = "";
      } else {
              WL = "Wins/Losses : " + summonerRank[1].wins + "/" + summonerRank[1].losses
      };

      // Active Games YEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH

      let activeGame = (await fetch(`https://${region}.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/${summonerid}`, {
        method: 'GET',
        headers: {
                        "Origin": "https://developer.riotgames.com",
                        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                        "X-Riot-Token": authorization,
                        "Accept-Language": "en-US,en;q=0.9,ar;q=0.8",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
                    }
        
    }).then(res => res.json())
      .then(json => json));

      let liveGame = "";
      let gameTimeSec = "";
      let gameTimeMin = "";
      let gameChampionid = "";
      let gameChampion = "";


      if (!activeGame.gameId) {
              liveGame = "the summoner isn't playing now"
      } else {
              gameTimeSec = (parseInt(activeGame.gameLength) / 60).toString();
              gameTimesecounds = (parseInt(activeGame.gameLength % 60))
              gameTimeMin = "**" + gameTimeSec.split(".")[0] + ":" + gameTimesecounds +"** Mins";
              for (let cmd in activeGame.participants) { 

                if (summonerid == activeGame.participants[cmd].summonerId) {
                    gameChampionid = activeGame.participants[cmd].championId;
                    break;
                }
            
              };

              let gameChampion = "";

  for (var cmd in champions.data) { 

    if (gameChampionid == champions.data[cmd].key.toUpperCase()) {
        gameChampion = champions.data[cmd].name; 
        break;
    }

}
        
              liveGame = `**${summonerName}** is online and playing a game, this is the info\nPlaying as : **${gameChampion}**\nMap: [Map photo](http://ddragon.leagueoflegends.com/cdn/${currentVersion}/img/map/map${activeGame.mapId}.png)\nGame mode: ${activeGame.gameMode}\nGame type: ${activeGame.gameType}\nGame time : ${gameTimeMin}`;
      }








   const embed = new Discord.RichEmbed()
   .setTitle(summonerName + " profile stats")
   .setDescription("provided by Gamers Bot")
   .addField("LVL", summonerlvl, true)
   .addField("Ranked tier", currentRank + "\n" + WL , true)
   .addField("most played champions", "**#1 " + mainChampion1 + "** with **" + summonerChampions[0].championPoints + "** points\n" + "**#2 " + mainChampion2 + "** with **" + summonerChampions[1].championPoints + "** points\n" + "**#3 " + mainChampion3 + "** with **" + summonerChampions[2].championPoints + "** points\n")
   .addField("status", liveGame)
   .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/${currentVersion}/img/profileicon/${summonerIcon}.png`)
   

   message.channel.send({embed})




      


}

module.exports.help = {
    name: "lprofile"
}
