const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("Salam Be Family", {type: "PLAYING"});
});

bot.on("guildMemberAdd", member => {
    let guild = member.guild;
    let count = guild.memberCount;

  let botc = member.guild.channels.get('443694531070787614')
  let memberc = member.guild.channels.get('443691167725649920')
  let total = member.guild.channels.get('443686826142597120')

  if(member.user.bot){botc.setName(`Total BOT: ${guild.members.filter(m => m.user.bot).size}`)}
  memberc.setName(`Total Manusia: ${guild.members.filter(m => !m.user.bot).size}`)
  total.setName(`Total Users: ${count}`)

  console.log(`${member} just joined us!`)
  });

  bot.on("guildMemberRemove", member => {
    let guild = member.guild;
    let count = guild.memberCount;

  let botc = member.guild.channels.get('443694531070787614')
  let memberc = member.guild.channels.get('443691167725649920')
  let total = member.guild.channels.get('443686826142597120')

  if(member.user.bot){botc.setName(`Total BOT: ${guild.members.filter(m => m.user.bot).size}`)}

  memberc.setName(`Total Manusia: ${guild.members.filter(m => !m.user.bot).size}`)
  total.setName(`Total Users: ${count}`)

    console.log(`${member} just left us!`)
});

bot.login(tokenfile.token);
