const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  client.channels.cache.get("814078946911322122").join()
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.channel.send('as');
  }
});

client.login('ODE3NzE3Njc5MjA5MDU0MjI4.YENk7w.CwBANhOWKTI4DBQjX2a3AnzKMEA');