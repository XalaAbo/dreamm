const Discord = require("discord.js");

module.exports = {
  name: "status",
  aliases: ["st"],
  description: "Show status of akeno",
  usage: "status",
  async execute(message, args, client) {
    const embed = new Discord.MessageEmbed()
        .setColor("#0d2943")
        .addField("Guilds Count", `\`${client.guilds.cache.size}\``, true)
        .addField("Users Count", `\`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\``, true)
        .addField("Channel Count", `\`${client.channels.cache.size}\``, true)
        .setImage(``)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(embed);
}
}